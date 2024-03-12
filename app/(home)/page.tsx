import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
	// chamar prisma e buscar barbearias
	const barbershops = await db.barbershop.findMany({});

	return (
		<div>
			<Header />

			<div className="px-5 py-6 flex flex-col gap-1">
				<h2 className="text-xl">
					Olá, <span className="font-bold">Rafael!</span>
				</h2>
				<p className="text-sm leading-tight capitalize">
					{format(new Date(), "EEEE',' d 'de' MMMM", { locale: ptBR })}
				</p>
			</div>

			<div className="px-5">
				<Search />
			</div>

			<div className="px-5 pt-9 flex flex-col gap-3">
				<h2 className="text-xs font-bold text-slate-500 uppercase">
					Agendamentos
				</h2>
				<BookingItem />
			</div>

			<div className="px-5 pt-9 flex flex-col gap-3">
				<h2 className="text-xs font-bold text-slate-500 uppercase">
					Recomendados
				</h2>
				<div className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden">
					{barbershops.map((barbershop) => (
						<BarbershopItem key={barbershop.id} barbershop={barbershop} />
					))}
				</div>
			</div>

			<div className="px-5 pt-9 flex flex-col gap-3">
				<h2 className="text-xs font-bold text-slate-500 uppercase">
					Populares
				</h2>
				<div className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden">
					{barbershops.map((barbershop) => (
						<BarbershopItem key={barbershop.id} barbershop={barbershop} />
					))}
				</div>
			</div>
		</div>
	);
}
