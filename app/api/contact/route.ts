import { clientPromise } from '@/utils/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Change this to your actual database name

    const { name, email, message } = await request.json();

    const collection = db.collection("messages");
    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
