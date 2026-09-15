import { NextResponse } from 'next/server';
export function GET() { return NextResponse.json({ roi: 2.4, annualRent: 96000, insight: 'Property values increased 8.7% this year.' }); }
