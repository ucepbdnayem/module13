import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: ["/dashboard"],
};

export function middleware(request,response) {

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const authCookie = request.cookies.get("Authorization")?.value;
        //console.log(authCookie);
        if(authCookie === '' || authCookie === null || authCookie === undefined){
            return NextResponse.redirect(new URL('/', request.url));
        }else{
            return NextResponse.next();
        }
    }
};

