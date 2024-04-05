import { Endpoints } from "./endpoints";

export async function getOrderByReservationId(id: number) {
    const res = await fetch(Endpoints.order + '/reservation/' + id.toString());
    const data = await res.json();
    return data;
}
