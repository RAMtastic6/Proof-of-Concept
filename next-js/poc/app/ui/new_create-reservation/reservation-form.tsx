
export default function ReservationForm() {
    return (
        <>
            <div className="rounded-lg bg-white shadow-lg p-12 space-y-4">
                <h2 className="text-2xl font-bold text-orange-950 text-center">Effettua una prenotazione</h2>
                <form action="#" className="space-y-4">
                    <div className="relative">
                        <p>Data:</p>
                        <input
                            type="date"
                            className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                        />
                    </div>

                    <div className="relative">
                        <p>Ora di arrivo:</p>
                        <input
                            type="time"
                            className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                        />
                    </div>

                    <div className="relative">
                        <p>Numero di persone:</p>
                        <input
                            type="number"
                            className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-lg bg-orange-950 px-5 py-3 font-medium text-white"
                        >
                            Prenota
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}