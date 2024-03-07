import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
	return (
		<Card>
			<CardContent className="flex justify-between items-center p-5">
				<Image
					priority
					src={"/logo.png"}
					alt="FSW - Barber"
					height={20}
					width={120}
				/>
				<Button variant={"outline"} size={"icon"}>
					<MenuIcon size={20} />
				</Button>
			</CardContent>
		</Card>
	);
};

export default Header;
