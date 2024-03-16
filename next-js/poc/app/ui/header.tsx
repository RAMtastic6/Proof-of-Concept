"use client"; 

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-orange-500">
            <div className="mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-white font-bold" href="#"> EasyMeal </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link className="inline-block rounded bg-orange-950 px-12 py-3 text-sm font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href="/login"> Login </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}