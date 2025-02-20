import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        mensagem: "Olá Next!!!"
    });
}

export async function POST(){
    return NextResponse.json({
        mensagem:"Ola Next - POST!!!"
    });
}