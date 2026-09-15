import { NextRequest, NextResponse } from 'next/server';
import { properties } from '@/lib/data';
export function GET(request: NextRequest) { const type = request.nextUrl.searchParams.get('type'); return NextResponse.json(type && type !== 'All' ? properties.filter(p => p.type === type) : properties); }
