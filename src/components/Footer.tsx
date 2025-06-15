import Link from "next/link";

function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-4 mt-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    This website was created for educational purposes. For more information, visit our <Link href="/privacy-policy" className="text-blue-400">Privacy Policy</Link>.
                </p>
            </div>
        </footer>
    );
}
export default Footer;