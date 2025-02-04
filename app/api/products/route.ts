
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=18");
        const products = await response.json();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}
