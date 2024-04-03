'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuTable() {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            < div className="overflow-x-auto" >
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left">
                        <tr>
                            <th className="whitespace-nowrap py-5 text-2xl text-orange-950 text-start">Antipasti</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >

            <span className="flex items-center mt-4"></span>

            < div className="overflow-x-auto" >
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left">
                        <tr>
                            <th className="whitespace-nowrap py-5 text-2xl text-orange-950 text-start">Antipasti</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                            <td className="whitespace-nowrap py-2 text-right">
                                <div>
                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                    <div className="inline-block items-center rounded border border-gray-200">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={decreaseQuantity}>
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            id="Quantity"
                                            value={quantity}
                                            className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            readOnly
                                        />

                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring"
                                href=""> Add </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    );
}