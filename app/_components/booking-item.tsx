import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const BookingItem = () => {
	return (
		<div>
			<Card>
				<CardContent className="flex justify-between p-0">
					<div className="flex flex-col gap-3 p-3 w-full">
						<Badge className="bg-[#221C3D] text-violet-500 w-fit">
							Confirmado
						</Badge>
						<p className="font-bold">Corte de Cabelo</p>
						<div className="flex items-center gap-2">
							<Avatar className="h-6 w-6">
								<AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
								<AvatarFallback>CC</AvatarFallback>
							</Avatar>
							<p className="text-sm leading-tight">Vintage Barber</p>
						</div>
					</div>

					<Separator
						orientation="vertical"
						className="border-slate-100 h-auto"
					/>

					<div className="flex flex-col justify-center items-center px-9 py-3">
						<p className="text-xs">Fevereiro</p>
						<p className="text-2xl">06</p>
						<p className="text-xs">09:45</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default BookingItem;
