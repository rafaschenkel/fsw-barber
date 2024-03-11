import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface barbershopItemProps {
	barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: barbershopItemProps) => {
	return (
		<Card className="min-w-[167px] max-w-[167px] rounded-2xl">
			<CardContent className="p-0 px-1 pt-1 flex flex-col gap-2">
				<div className="w-full h-[159px] relative">
					<Image
						alt={barbershop.name}
						src={barbershop.imageUrl}
						style={{
							objectFit: "cover",
						}}
						fill
						className="rounded-2xl"
					/>
				</div>
				<div className="px-2 pb-2 flex flex-col">
					<h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">
						{barbershop.name}
					</h2>
					<p className="text-xs text-gray-400 overflow-hidden text-ellipsis text-nowrap">
						{barbershop.address}
					</p>
					<Button className="w-full mt-2" variant={"secondary"}>
						Reservar
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default BarbershopItem;
