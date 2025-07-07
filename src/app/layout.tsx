import type { Metadata } from 'next';
// next/font/google 대신 local로 Pretendard를 설정합니다.
import './globals.css';

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
            <body className="bg-off-white font-sans text-brand-dark">{children}</body>
        </html>
    );
}
