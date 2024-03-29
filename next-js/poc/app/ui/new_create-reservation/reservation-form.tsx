import { Endpoints } from "@/app/lib/database/endpoints";
import { createReservation } from "@/app/lib/database/reservation";
import { get } from "http";

export default function ReservationForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const datetime = new Date(formData.get("date") as string + ' ' +formData.get("time") as string);
        const json = {
            date: datetime.toISOString(),
            number_people: parseInt(formData.get("number_people") as string),
            restaurant_id: 1,
            customer_id: 1,
        };
        const response = await createReservation(json);
        if (response) {
            //Gestire successo
            alert("Prenotazione effettuata con successo!");
        } else {
            //Gestire errore
            alert("Errore nella prenotazione");
        }
    }
    
    return (
        <>
            <div className="rounded-lg bg-white shadow-lg p-12 space-y-4">
                <h2 className="text-2xl font-bold text-orange-950 text-center">Effettua una prenotazione</h2>
                <form action="#" className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label>Data:</label>
                        <input
                            name="date"
                            type="date"
                            className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                        />
                    </div>

                    <div className="relative">
                        <p>Ora di arrivo:</p>
                        <input  
                            name="time"
                            type="time"
                            className="w-full rounded-md border-2 border-orange-700 py-2.5 pe-2 shadow-sm sm:text-sm pl-[14px] text-gray-600"
                        />
                    </div>

                    <div className="relative">
                        <p>Numero di persone:</p>
                        <input
                            name="number_people"
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