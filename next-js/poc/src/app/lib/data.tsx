import {
    Restaurant,
    Menu,
    Food,
    Order,
    Reservation,
} from "@/app/lib/definitions";
import { restaurants, reservations } from "@/app/lib/dati-di-prova";
import { getDayOfWeek } from '@/app/lib/utils';

export default function getRestaurants(): Restaurant[] {
    return restaurants;
}

export function getReservations(): Reservation[] {
    return reservations;
}

export function getReservationById(id: number): Reservation | null {
    const reservations = getReservations();
    return reservations.find((reservation) => reservation.id === id) || null;
}

export function getMenuByRestaurantId(id: number): Menu | null {
    const restaurants = getRestaurants();
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    return restaurant ? restaurant.menu : null;
}

export function getCuisines(): string[] {
    const restaurants = getRestaurants();
    return Array.from(new Set(restaurants.map((restaurant) => restaurant.cuisine)));
}

export function getCities(): string[] {
    const restaurants = getRestaurants();
    return Array.from(new Set(restaurants.map((restaurant) => restaurant.city)));
}

export function getFilteredRestaurants(query: { date: string | null; nameRestaurant: string | null; city: string | null; cuisine: string | null; }): Restaurant[] {
    const restaurants = getRestaurants();
    return restaurants.filter((restaurant) => {
        if (query.date) {
            const dayOfWeek = getDayOfWeek(new Date(query.date));
            if (!restaurant.daysopen.includes(dayOfWeek)) {
                return false;
            }
        }
        if(query.nameRestaurant && !restaurant.name.includes(query.nameRestaurant)) {
            return false;
        }
        if (query.city && restaurant.city !== query.city) {
            return false;
        }
        if (query.cuisine && restaurant.cuisine !== query.cuisine) {
            return false;
        }
        return true;
    });
}

interface QueryParams {
    date: string | null;
    nameRestaurant: string | null;
    city: string | null;
    cuisine: string | null;
}

export async function getFilteredRestaurantsFromDB(query: QueryParams): Promise<Restaurant[]> {
    const params = new URLSearchParams();
    for (const key in query) {
        if (query[key as keyof QueryParams] !== null) {
            console.log(key);
            params.append(key, (query[key as keyof QueryParams]!).toLowerCase());
        }
    }
    const response = await fetch(`http://nestjs:6969/restaurant/filter?${params.toString()}`);
    console.log(await response.json());
    return [];
}

export function getRestaurantById(id: string): Restaurant | null {
    const restaurants = getRestaurants();
    return restaurants.find((restaurant) => restaurant.id.toString() === id) || null;
}