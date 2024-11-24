import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
const TopNavbar = () => {
	return (
		<Navbar className="bg-yellow-200">
			<NavbarBrand>
				<p className="font-bold text-inherit">DatingApp</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link href="/member">Member</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/listings">Listings</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/message">Message</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/login">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="/register" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default TopNavbar;
