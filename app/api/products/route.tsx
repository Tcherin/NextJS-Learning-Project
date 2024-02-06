import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const products = await prisma?.product.findMany()
    return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors)

    const product = await prisma.product.findUnique({
        where: { price: body.price }
    })

    if(product)
        return NextResponse.json({ error: "Product already exists" })



    return NextResponse.json(newproduct);
}

