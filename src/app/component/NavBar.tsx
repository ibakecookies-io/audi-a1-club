'use client'

import React from "react";
import Link from 'next/link'

// components

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-opacity-0 bg-gray-900/50">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-red-600 text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="/"
                        >
                            <strong className="text-white font-semibold text-xl">Audi A1</strong> Club
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none opacity-80" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="text-black lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Мероприятия
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="text-black lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Галерея
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="text-black lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Сервисы и обслуживание
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="text-black lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                                    target="_blank"
                                >
                                    <i className={
                                        (navbarOpen ? "text-black ": "text-white " ) + "fab fa-instagram text-lg leading-lg"} />
                                    <span className="lg:hidden inline-block ml-2">Instagram</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                                    target="_blank"
                                >
                                    <i className={
                                        (navbarOpen ? "text-black ": "text-white " ) + "fab fa-telegram text-lg leading-lg"} />
                                    <span className="text-black lg:hidden inline-block ml-2">Telegram</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://github.com/creativetimofficial/notus-react?ref=nr-auth-navbar"
                                    target="_blank"
                                >
                                    <i className={
                                        (navbarOpen ? "text-black ": "text-white " ) +"fab fa-whatsapp text-lg leading-lg"
                                    } />
                                    <span className="text-black lg:hidden inline-block ml-2">Whats'App</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <button
                                    className="text-black bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <i className="text-black fa-sharp fa-regular fa-comments"></i> Форум
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}
