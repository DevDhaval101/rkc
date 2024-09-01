import connectToDB from "@/app/utils/connectToDB";
import { NextResponse } from "next/server";
import { hashPassword, checkPassword } from "@/app/utils/hash";

export async function POST(req, res) {
  const { username, password } = await req.json();

  if (
    !username ||
    username.trim().length < 1 ||
    !password ||
    password.trim().length < 4
  ) {
    return NextResponse.json({ message: "Invalid Input", error: true });
  }

  try {
    const client = await connectToDB();

    const collection = client.db(process.env.DB_NAME).collection(process.env.COLL_AUTH);

    const user = await collection.findOne({ name: username });

    if (user) {
      return NextResponse.json({ message: "User already exist", error: true });
    } else {
      const hashedPassword = await hashPassword(password);

      const user = await collection.insertOne({
        name: username,
        password: hashedPassword,
        isVerified: false
      });
      
      return NextResponse.json({ message: "User created", error: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
