import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
    const { fullname, email, message } = await req.json();
    try {
        await connectDB();
        await Contact.create({ fullname, email, message });
        return NextResponse.json({ msg: ["i m contact server"] });
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in err.errors) {
                errorList.push(err.errors[e].message); // corrected
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: ["Unable to send message"] }); // moved else outside of if block
        }
    }
}
