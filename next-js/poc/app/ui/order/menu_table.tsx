'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuTable() {
    // Define state for quantity of each item separately
    const [quantities, setQuantities] = useState([1, 1, 1]); // Initialize with default quantities

    const decreaseQuantity = (index: number) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] = newQuantities[index] - 1;
            setQuantities(newQuantities);
        }
    };

    const increaseQuantity = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantities[index] + 1;
        setQuantities(newQuantities);
    };


    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left">
                        <tr>
                            <th className="whitespace-nowrap py-5 text-2xl text-orange-950 text-start">Antipasti</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {[0, 1, 2].map((index) => ( // Render rows dynamically
                            <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <div className="flex place-content-center">
                                        <Image src="/caprese.png" alt="Immagine della caprese" width={75} height={75} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caprese</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">10€</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Mozzarella, pomodoro, olio EVO</td>
                                <td className="whitespace-nowrap py-2 text-right">
                                    <div>
                                        <label htmlFor={`Quantity_${index}`} className="sr-only">Quantity</label>

                                        <div className="inline-block items-center rounded border border-gray-200">
                                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => decreaseQuantity(index)}>
                                                -
                                            </button>

                                            <input
                                                type="number"
                                                id={`Quantity_${index}`}
                                                value={quantities[index]}
                                                className="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                readOnly
                                            />

                                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => increaseQuantity(index)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link className="inline-block rounded bg-orange-950 px-4 py-2 text-xs font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring" href="">
                                        Add
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
