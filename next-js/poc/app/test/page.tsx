import Header from '@/app/ui/header';
import Search from '../ui/create-reservation/search';

export default function Home() {
    return (
      <div className = "w-full">
        <Header />
        <div className="mt-4">
          <h2 className="text-lg font-bold">Ristoranti</h2>
          <p>Seleziona data, ora di arrivo, città e tipologia di cucina per ricercare un ristorante</p>
          <Search />
        </div>
      </div>
    )
  }