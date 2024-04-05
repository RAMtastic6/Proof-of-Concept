'use client';
import MenuTable from '@/app/ui/order/menu_table';
import Header from '@/app/ui/header';
import OrderCart from '@/app/ui/order/order_cart';
import { Endpoints } from '@/app/lib/database/endpoints';
import { getRestaurantOrders } from '@/app/lib/database/restaurant';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { number: string }}) {
  const [restaurant, setRestaurant] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRestaurant() {
      const response = await getRestaurantOrders(parseInt(params.number));
      if (!response) {
        throw new Error('Error fetching restaurant from the database');
      }
      setRestaurant(response.restaurant);
      setLoading(false);
    }
    fetchRestaurant();
  });

  if(loading) {
    return <div>Loading...</div>
  }

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
						<h1 className="text-3xl font-bold">{restaurant.name}</h1>
						<p>Indirizzo: {restaurant.address}</p>
						<p>Città: {restaurant.city}</p>
						<p>Cucina: {restaurant.cuisine}</p>
					</div>
				</div>
				<span className="flex items-center mt-8">
					<span className="h-px flex-1 bg-orange-950"></span>
				</span>
				<MenuTable menu={restaurant.menu}/>
				<span className="flex items-center mt-8">
					<span className="h-px flex-1 bg-orange-950"></span>
				</span>
				{ 
					//<OrderCart />
				}
			</div>
		</div>
	)
}