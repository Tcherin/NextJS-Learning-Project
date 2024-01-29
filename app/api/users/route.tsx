import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: '1', name: "Richard" },
        {id: '2', name: "John" },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    if(!body.name)
        return NextResponse.json({error: 'Name is required'})
    return NextResponse.json({id: 1, name: body.name});
}