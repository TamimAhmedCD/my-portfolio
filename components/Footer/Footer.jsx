import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        {
            name: "About",
            href: "/about",
        },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="mx-auto max-w-7xl font-figtree mt-16">
            <div className="mx-6 lg:mx-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Left Section - Logo and Contact Info */}
                    <div>
                        <div className="mb-6">
                            {/* Logo */}
                            <div className="flex items-center space-x-2 mb-3">
                                <Link prefetch={false} href="/" className="flex items-center space-x-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09090b]/30">
                                        <Image src="/tamim.png" alt="tamim" width={60} height={60} />
                                    </div>
                                    <span className="text-[#09090b] text-xl font-bold">Tamim</span>
                                </Link>
                            </div>
                            <div className="text-sm text-gray-700 space-y-1">
                                <p>120 Balichar Street</p>
                                <p>Barlekha, Moulvibazar</p>
                                <p>Bangladesh</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2">
                            <div><Link href="tel:+8801742982184" className="text-sm font-semibold text-gray-700">
                                +880 174 298 2184
                            </Link></div>
                            <Link href="mailto:tamim20072@gmail.com" className="text-sm text-blue-600 hover:underline">
                                tamim20072@gmail.com
                            </Link>
                        </div>
                    </div>

                    {/* Middle Section - Navigation Links */}
                    <div>
                        <nav className="space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-sm text-gray-700 hover:text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>



                    {/* Right Section - Social Links */}
                    <div>
                        <nav className="space-y-3">
                            <Link href="https://github.com/TamimAhmedCD" target="_blank" className="block text-sm text-gray-700 hover:text-gray-900">
                                GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/tamim-ahmed-dev/" target="_blank" className="block text-sm text-gray-700 hover:text-gray-900">
                                LinkedIn
                            </Link>
                            <Link href="https://www.facebook.com/tamim.ahmed.360496" target="_blank" className="block text-sm text-gray-700 hover:text-gray-900">
                                Facebook
                            </Link>
                            <Link href="#" className="block text-sm text-gray-700 hover:text-gray-900">
                                Instagram
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                    <p className="text-xs text-gray-600">© 2025 Tamim Ahmed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
