import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/utils/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const session = await getServerSession({ req, authOptions });

    if (!session) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { name, email, password } = await req.json();

    const { db } = await connectToDatabase();

    const updateData: { [key: string]: string } = { name, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const result = await db.collection('users').updateOne(
      { email: session.user.email },
      { $set: updateData }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ message: 'No changes were made.' }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: 'Profile updated successfully.' }), { status: 200 });
  } catch (error) {
    console.error('Error updating profile:', error);
    return new Response(JSON.stringify({ message: 'Failed to update profile.' }), { status: 500 });
  }
}
