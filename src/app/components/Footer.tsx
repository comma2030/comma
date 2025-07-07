// /app/components/Footer.tsx
import { Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <>
            <section id="join" className="bg-brand-dark text-off-white py-20 md:py-32">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-brand-gray mb-4">(05) JOIN US</p>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                        Join The <br />
                        Comma Community
                    </h2>
                    <p className="text-brand-gray mb-10 max-w-lg mx-auto">
                        지금 바로 콤마의 소식을 확인하고, 다양한 프로그램에 참여해보세요.
                    </p>
                    <div className="flex justify-center items-center space-x-6 mb-12">
                        <a
                            href="https://www.instagram.com/c2030comma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://www.youtube.com/@comma_music-i8m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Youtube size={28} />
                        </a>
                    </div>
                    <a
                        href="#"
                        className="bg-sky-500 text-white font-bold px-8 py-3 rounded-full hover:bg-sky-600 transition-colors inline-flex items-center text-base"
                    >
                        최신 소식 확인하기 <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
            <footer className="bg-brand-dark text-brand-gray text-sm py-6">
                <div className="container mx-auto px-6 text-center">
                    © {new Date().getFullYear()} COMMA. All rights reserved.
                </div>
            </footer>
        </>
    );
};
