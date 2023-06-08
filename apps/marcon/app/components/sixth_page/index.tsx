"use client";
import React, { useState } from "react";
import { SixthPageField, SixthPageTextarea } from "./components/field";

function SixthPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="sixth" className="flex flex-col gap-8 p-4 w-full lg:w-5/12 lg:m-auto">
            <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-bold">Ante metus dictum</h2>
                <p className="">at tempor commodo.</p>
            </div>
            <button className="bg-neutral-900 hover:bg-gray-300 text-white hover:text-gray-800 font-bold py-3 px-6 text-2xl">CALL TO ACTION</button>

            <SixthPageField label="Input name" value={name} setValue={setName}/>
            <SixthPageField label="Input e-mail" value={email} setValue={setEmail}/>
            <SixthPageTextarea label="Input message" value={message} setValue={setMessage}/>

            <button className="bg-neutral-900 hover:bg-gray-300 text-white hover:text-gray-800 font-bold py-3 px-6 text-2xl">CALL TO ACTION</button>
        </section>
    );
}

export default SixthPage;