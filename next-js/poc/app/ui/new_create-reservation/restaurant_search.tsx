"use client";

export default function RestaurantSearch() {
    return (
        <div className="space-y-2">

            <div className="relative">
                <input
                    type="text"
                    id="Search"
                    placeholder="Inserisci il nome di un ristorante..."
                    className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-10 shadow-sm sm:text-sm pl-[14px]"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </div>

            <div className="relative">
                <input
                    type="text"
                    id="Search"
                    placeholder="Inserisci una città..."
                    className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-10 shadow-sm sm:text-sm pl-[14px]"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </div>

            <div className="relative">
                <input
                    type="date"
                    className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                />
            </div>

            <div className="relative">

                <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                >
                    <option value="">Seleziona la tipologia di cucina...</option>
                    <option value="JM">John Mayer</option>
                </select>
            </div>
            <div>
                <a href="#" className="underline">Resetta i filtri</a>
            </div>
        </div>
    );
}