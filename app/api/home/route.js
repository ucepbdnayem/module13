import { NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid';

export async function POST(req,res) {
    req.cookies.delete('Authorization');
    const unique_id = uuid();
    const auth_token = `Bearer ${unique_id}`;
    return NextResponse.json(
        {status:true,message:"Request completed"},
        {
            status: 201,
            headers: { 'Set-Cookie': `Authorization=${auth_token}; Path=/dashboard` },
        }
    )
}

export async function GET(request) {
    const data = {
        "message": "Welcome to our API!",
        "version": "1.0"
    };
    return NextResponse.json({ data })
}

