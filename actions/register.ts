"use server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

interface RegisterParams {
  email: string;
  password: string;
  name: string;
}

export async function register({ email, password, name }: RegisterParams) {
  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, name });

  try {
    await newUser.save();
    return { message: 'User registered successfully' };
  } catch (error) {
    console.error('Error registering user:', error);
    return { error: 'Error registering user' };
  }
}
