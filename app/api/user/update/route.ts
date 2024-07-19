import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/utils/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const session = await getServerSession({ req, ...authOptions });

    if (!session || !session.user || !session.user.email) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { name, email, password } = await req.json();
    const { db } = await connectToDatabase();

    const updateData: { [key: string]: string } = { name, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    await db.collection('users').updateOne(
      { email: session.user.email },
      { $set: updateData }
    );

    return new Response(JSON.stringify({ message: 'Profile updated' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to update profile.' }), { status: 500 });
  }
}
