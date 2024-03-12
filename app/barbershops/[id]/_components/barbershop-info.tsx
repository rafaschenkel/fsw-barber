"use client";

import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
	barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
	const router = useRouter();
	const handleBackClick = () => {
		router.back();
	};

	return (
		<div>
			<div className="h-[250px] w-full relative">
				<Button
					size={"icon"}
					variant={"outline"}
					className="absolute top-4 left-4 z-50"
					onClick={handleBackClick}
				>
					<ChevronLeftIcon />
				</Button>

				<Button
					size={"icon"}
					variant={"outline"}
					className="absolute top-4 right-4 z-50"
				>
					<MenuIcon />
				</Button>

				<Image
					src={barbershop.imageUrl}
					alt={barbershop.name}
					fill
					className="absolute object-cover opacity-75"
					priority
				/>
			</div>

			<div className="flex flex-col gap-2 px-5 py-6">
				<h1 className="text-xl font-bold">{barbershop.name}</h1>
				<div className="flex gap-2 items-center">
					<MapPinIcon size={18} className="text-primary" />
					<p className="text-sm">{barbershop.address}</p>
				</div>
				<div className="flex gap-2 items-center">
					<StarIcon size={18} className="text-primary" />
					<p className="text-sm">5,0 ( 899 avaliações )</p>
				</div>
			</div>

			<Separator className="w-full my-6" />
		</div>
	);
};

export default BarbershopInfo;
