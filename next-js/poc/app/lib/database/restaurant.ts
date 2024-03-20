import { Endpoints } from "./endpoints";

//Otteniamo i ristoranti filtrati
export async function getFilteredRestaurant(params: Map<string, string>): Promise<JSON> {
    const urlParams = Array.from(params).map(([key, value]) => `${key}=${value}`).join('&');
    const response = await fetch(`${Endpoints.restaurant}?${urlParams}`);
    if (!response.ok) {
        throw new Error('Error fetching restaurants from the database');
    }
    const data = await response.json();
    return data;
}

//Get all the restaurants
export async function getRestaurants(): Promise<JSON> {
    const response = await fetch(Endpoints.restaurant);
    if (!response.ok) {
        throw new Error('Error fetching restaurants from the database');
    }
    const data = await response.json();
    return data;
}

//Get a restaurant by id
export async function getRestaurantById(id: number): Promise<JSON> {
    const response = await fetch(`${Endpoints.restaurant}${id}`);
    if (!response.ok) {
        throw new Error('Error fetching restaurant from the database');
    }
    const data = await response.json();
    return data;
}

//Get all the cuisines
export async function getCuisines(): Promise<JSON> {
    const response = await fetch(`${Endpoints.restaurant}cuisines`);
    if (!response.ok) {
        throw new Error('Error fetching cuisines from the database');
    }
    const data = await response.json();
    return data;
}

//Get all the cities
export async function getCities(): Promise<JSON> {
    const response = await fetch(`${Endpoints.restaurant}cities`);
    if (!response.ok) {
        throw new Error('Error fetching cities from the database');
    }
    const data = await response.json();
    return data;
}
