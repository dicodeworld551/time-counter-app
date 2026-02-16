import { google } from 'googleapis';
import { NextResponse } from 'next/server';

type ContactPayload = {
  fullName: string;
  email: string;
  message: string;
};

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Google Sheets credentials are not configured.');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SPREADSHEET_ID is not configured.');
    }

    const submissionDate = new Date().toISOString();

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[payload.fullName, payload.email, payload.message, submissionDate]]
      }
    });

    return NextResponse.json({ status: 'received' });
  } catch (error) {
    console.error('Error saving contact form submission to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Unable to save contact form submission.' },
      { status: 500 }
    );
  }
}
