'use client';
import ReservationForm from '@/app/ui/new_create-reservation/reservation-form';
import Form from '@/app/ui/create-reservation/form';
import { getRestaurantById } from '../../../lib/data';
import Header from '@/app/ui/header';

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const restaurant = getRestaurantById(id);
    return (
        <div className="w-full">
            <Header />
            <div className="px-10 py-4 flex flex-col">
                <div className="flex flex-row">
                    <div className="self-start py-1">
                        <img
                            src='/restaurant_template_image.jpg'
                            alt='Restaurant Image template'
                            className="w-128 h-64 mr-4"    
                        />
                    </div>
                    <div className="self-start py-20 text-orange-950">
                        <h1 className="text-3xl font-bold">{restaurant?.name}</h1>
                        <p>Indirizzo: {restaurant?.address}</p>
                        <p>Città: {restaurant?.city}</p>
                        <p>Cucina: {restaurant?.cuisine}</p>
                    </div>
                </div>
                <div>
                    <ReservationForm />
                </div>
            </div>
        </div>
    );
}