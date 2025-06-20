"use client";

import { useState } from "react";

export default function ContactForm() {
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState([]);

    const handleSubmit= async (e) => {
        e.preventDefault();
        console.log(fullname)
        console.log(email)
        console.log(message)

        const res = await fetch("api/contact",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                fullname,
                email,
                message
            }),
        });

        const {msg} = await res.json();
        setError(msg);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" placeholder="Enter Your Name"
                    onChange={(e)=> setFullname(e.target.value)} value={fullname}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter Your Email"onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" placeholder="Enter Your Message..."onChange={(e)=> setMessage(e.target.value)} value={message}/>
                </div>
                <button type="submit">Send</button>
            </form>
            <br/>
            <div>
                <div>Error Message</div>
            </div>
        </div>
    )
}
