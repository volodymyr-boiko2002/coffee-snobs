import Link from "next/link";

const Header: () => void = () => (
    <header className="container mx-auto p-4">
        <nav className="flex flex-row justify-center items-center gap-16">
            <Link href="/#about-us"><span className="transition hover:text-green-600">About us</span></Link>
            <Link href="/#pricing"><span className="transition hover:text-green-600">Pricing</span></Link>
            <Link href="/#order"><span className="transition hover:text-green-600">Order</span></Link>
        </nav>
    </header>
);

export default Header;