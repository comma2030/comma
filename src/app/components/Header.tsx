// /app/components/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`text-sm font-medium transition-colors ${
                isActive ? 'text-brand-dark' : 'text-brand-gray hover:text-brand-dark'
            }`}
        >
            {children}
        </Link>
    );
};

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="COMMA Logo" width={110} height={36} />
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/programs">Programs</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                </nav>
                <a
                    href="#join"
                    className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
                >
                    Join Us
                </a>
            </div>
        </header>
    );
};
