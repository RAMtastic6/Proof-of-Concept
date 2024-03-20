import { Endpoints } from "./endpoints";

export async function getReservation(): Promise<JSON> {
    const response = await fetch(Endpoints.reservation);
    if (!response.ok) {
        throw new Error('Error fetching reservations from the database');
    }
    const data = await response.json();
    return data;
}

export async function getReservationById(id: number): Promise<JSON> {
    const response = await fetch(`${Endpoints.reservation}${id}`);
    if (!response.ok) {
        throw new Error('Error fetching reservation from the database');
    }
    const data = await response.json();
    return data;
}