import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Insert into Vercel Postgres
    // The table will be created via Vercel dashboard or this init query
    await sql`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Insert email (ignore if duplicate)
    await sql`
      INSERT INTO signups (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    console.log(`New signup: ${email}`);

    return NextResponse.json(
      { message: 'Successfully signed up!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    
    // Fallback for local development without DB
    if (process.env.NODE_ENV === 'development') {
      console.log('Dev mode: Would have saved email to database');
      return NextResponse.json(
        { message: 'Successfully signed up! (dev mode)' },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
