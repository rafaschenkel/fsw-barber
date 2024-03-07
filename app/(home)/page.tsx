import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
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
		</div>
	);
}
