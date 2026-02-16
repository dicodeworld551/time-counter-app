import { NextResponse } from 'next/server';

type ContactPayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  budgetRange: string;
  message: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  console.log('New remodeling inquiry:', payload);

  return NextResponse.json({ status: 'received' });
}
