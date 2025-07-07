// /app/components/Footer.tsx
import { Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <>
            <footer className="bg-brand-dark text-brand-gray text-sm py-6">
                <div className="container mx-auto px-6 text-center">
                    © {new Date().getFullYear()} COMMA. All rights reserved.
                </div>
            </footer>
        </>
    );
};
