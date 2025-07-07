// /app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header'; // Header 임포트
import { Footer } from './components/Footer'; // Footer 임포트

export const metadata: Metadata = {
    title: 'COMMA | 쉼과 변화를 위한 2030 청년 플랫폼',
    description: '불확실한 사회 속 나를 다시 나답게 만들어주는 회복의 시간을 선물합니다.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="bg-off-white font-sans text-brand-dark">
                <Header /> {/* Header를 여기에 추가 */}
                <main>{children}</main>
                <Footer /> {/* Footer를 여기에 추가 */}
            </body>
        </html>
    );
}
