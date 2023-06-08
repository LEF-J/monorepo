"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('click', (e: MouseEvent) => {
            const list = document.getElementById("list");
            const menu = document.getElementById("menu");
            if(!menu?.contains(e.target as Node) && !list?.contains(e.target as Node)) {
                setShowMenu(false);
            }

            const listItems = document.querySelectorAll("#list li");
            listItems.forEach((item) => {
                item.addEventListener('click', () => {
                    setShowMenu(false);
                })
            })
        })
    })

    const openedIn = "block";
    const closedIn = "hidden";

    return (
        <header className="flex flex-row items-center justify-between bg-white p-4 absolute top-0 left-0 w-full">
            <img
                alt="Logo"
                src="/Logo.png"
                className="box-border w-[196px]"
            />

            <img
                id="menu"
                alt="Menu"
                src="/Menu.png"
                className="box-border block lg:hidden"
                onClick={() => setShowMenu(showMenu => !showMenu)}
            />
   
            <ul id="list" className={`${(showMenu ? openedIn : closedIn)} flex flex-col gap-4 absolute right-2 top-24 bg-white p-4 transition-opacity lg:flex lg:flex-row lg:static lg:gap-4 lg:p-0 lg:opacity-100`}>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#first">First page</a></li>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#second">Second page</a></li>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#third">Third page</a></li>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#fourth">Fourth page</a></li>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#fifth">Fifth page</a></li>
                <li><a className="block p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#sixth">Sixth page</a></li>
            </ul>
        </header>
    );
}

export default Navbar;