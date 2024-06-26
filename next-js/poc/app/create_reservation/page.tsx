import Header from '@/app/ui/header';
import Table from '../ui/create_reservation/restaurants_table';
import RestaurantSearch from '../ui/create_reservation/restaurant_search';

export default function Page() {
	return (
		<div className="w-full">
			<Header />
			<div className="container mx-auto mt-4 space-y-4">
				<h1 className="text-lg font-bold text-center text-red-950"> Effettua una prenotazione </h1>
				<RestaurantSearch />
				<Table />     
			</div>
		</div>
	)
}