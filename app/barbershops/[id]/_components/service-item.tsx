import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
	service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
	return (
		<Card>
			<CardContent className="p-3">
				<div className="flex gap-4 items-center">
					<div className="relative min-w-[110px] min-h-[110px] max-w-[110px] max-h-[110px]">
						<Image
							src={service.imageUrl}
							alt={service.name}
							width={110}
							height={110}
							className="object-contain rounded-lg"
						/>
					</div>
					<div className="flex flex-col justify-between gap-1 w-full">
						<h2 className="text-sm font-bold">{service.name}</h2>
						<p className="text-sm text-slate-500">{service.description}</p>
						<div className="flex justify-between items-center">
							<span className="text-primary text-sm font-bold">
								{Intl.NumberFormat("pt-BR", {
									style: "currency",
									currency: "BRL",
								}).format(Number(service.price))}
							</span>
							<Button size={"sm"} variant={"secondary"}>
								Reservar
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ServiceItem;
