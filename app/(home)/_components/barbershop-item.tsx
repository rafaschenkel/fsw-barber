"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface barbershopItemProps {
	barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: barbershopItemProps) => {
	const router = useRouter();
	const handleBookingClick = () => {
		router.push(`/barbershops/${barbershop.id}`);
	};

	return (
		<Card className="min-w-[167px] max-w-[167px] rounded-2xl">
			<CardContent className="p-0 px-1 pt-1 flex flex-col gap-2">
				<div className="w-full h-[159px] relative">
					<div className="absolute top-1 left-1 z-50">
						<Badge
							variant={"secondary"}
							className="flex items-center gap-1 justify-center bg-slate-800 backdrop-blur-[6px] bg-opacity-70"
						>
							<StarIcon size={10} className="fill-primary text-primary" />
							<span className="text-xs">5,0</span>
						</Badge>
					</div>
					<Image
						alt={barbershop.name}
						src={barbershop.imageUrl}
						style={{
							objectFit: "cover",
						}}
						fill
						sizes="h-[159px] w-[159px]"
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
					<Button
						className="w-full mt-2"
						variant={"secondary"}
						onClick={handleBookingClick}
					>
						Reservar
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default BarbershopItem;
