import React from "react";

function FirstPage(){
    return (
        <section id="first" className="flex flex-col items-start justify-end bg-gray-200 h-[100vh] p-4 pb-32 w-full">
            <h2 className="mb-2 mt-0 text-4xl font-bold leading-tight text-primary uppercase">Lorem ipsum dolor sit amet</h2>
            <p className="mb-2 mt-0 text-1xl leading-tight text-secondary uppercase">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-neutral-900 hover:bg-gray-300 text-white hover:text-gray-800 font-bold py-3 px-6 inline-flex items-center text-2xl">CALL TO ACTION</button>
        </section>
    )
}

export default FirstPage;