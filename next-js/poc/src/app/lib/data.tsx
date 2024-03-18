import {
    Restaurant as RestaurantOld,
    Menu,
    Food,
    Order,
    Reservation,
    RestaurantFilter,
} from "@/app/lib/definitions";
import { restaurants, reservations } from "@/app/lib/dati-di-prova";
import { getDayOfWeek } from '@/app/lib/utils';
import Restaurant from "./definition/restaurant";


export default function getRestaurants(): RestaurantOld[] {
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

export function getFilteredRestaurants(query: { date: string | null; nameRestaurant: string | null; city: string | null; cuisine: string | null; }): RestaurantOld[] {
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

export async function getFilteredRestaurantsFromDB(query: RestaurantFilter): Promise<Restaurant[]> {
    const params = new URLSearchParams();
    for (const key in query) {
        if (query[key as keyof RestaurantFilter] !== null) {
            console.log(key);
            params.append(key, (query[key as keyof RestaurantFilter]!).toLowerCase());
        }
    }
    const response = await fetch(`http://nestjs:6969/restaurant/filter?${params.toString()}`);
    const json: any[] = await response.json();
    console.log(json);
    return json.map((obj) => Restaurant.fromJson(obj));
}

export function getRestaurantById(id: string): RestaurantOld | null {
    const restaurants = getRestaurants();
    return restaurants.find((restaurant) => restaurant.id.toString() === id) || null;
}