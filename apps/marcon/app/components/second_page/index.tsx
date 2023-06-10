import React from "react";

function SecondPage() {
    return (
        <section id="second" className="flex flex-col p-6 py-16 w-full lg:px-60">
            <div>
                <h2 className="mb-2 mt-0 text-2xl font-bold leading-tight text-primary">Lorem ipsum dolor sit amet</h2>
                <p className="text-left leading-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="w-full lg:flex lg:justify-between">
                    <img 
                        src="https://placeimg.com/640/640"
                        className="w-full mt-4 lg:w-5/12"
                    />
                    <img
                        src="https://placeimg.com/640/640"
                        className="hidden mt-4 lg:block lg:w-5/12"
                    />
                </div>
            </div>  
        </section>
    );
}

export default SecondPage;