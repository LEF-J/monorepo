import React from "react";

function Footer() {
    const links = [
        {
            image: "https://placeimg.com/640/640",
            text: "Ut enim ad"
        },
        {
            image: "https://placeimg.com/640/640",
            text: "Proin libero"
        },
        {
            image: "https://placeimg.com/640/640",
            text: "volutpat"
        },
    ]

    return (
        <footer className="bg-neutral-900 flex flex-col gap-10 p-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-white text-2xl font-bold">Lorem ipsum dolor sit amet</h3>
                <p className="text-white leading-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <hr/>

            <div className="flex flex-col gap-4">
                {
                    links && links.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-4">
                                <img 
                                    src={item.image}
                                    className="h-[32px] w-[32px] rounded-full"
                                />
                                <p className="text-white text-xl">{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>

            <p className="text-white text-center text-sm text-neutral-300">Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.</p>
        </footer>
    )
}

export default Footer;