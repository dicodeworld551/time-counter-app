import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  fullName: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { fullName, email, message } =
      (await request.json()) as ContactPayload;

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error('Missing Google Sheets environment variables.');
      return NextResponse.json(
        { error: 'Google Sheets configuration is missing.' },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[fullName, email, message, new Date().toISOString()]]
      }
    });

    return NextResponse.json({ status: 'received' });
  } catch (error: any) {
    console.error('Google Sheets append failed:', error?.response?.data || error);

    return NextResponse.json(
      { error: 'Unable to save contact form submission.' },
      { status: 500 }
    );
  }
}