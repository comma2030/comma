// /app/programs/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ProgramDetail = ({ title, description, images }: { title: string; description: string; images: string[] }) => (
    <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
        <h2 className="text-4xl font-bold text-brand-dark mb-4">{title}</h2>
        <p className="text-brand-gray mb-8 max-w-2xl">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src) => (
                <div key={src} className="overflow-hidden rounded-md bg-gray-200">
                    <Image
                        src={src}
                        alt={`${title} activity`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    </motion.div>
);

export default function ProgramsPage() {
    return (
        <div className="pt-32 pb-16">
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">OUR PROGRAMS</h1>
                <p className="mt-4 text-brand-gray">콤마는 4가지 핵심 활동을 통해 당신의 성장을 돕습니다.</p>
            </motion.div>

            <div className="container mx-auto px-6">
                <ProgramDetail
                    title="Culture"
                    description="전시, 연극, 콘서트, 팝업 등 다양한 문화 활동을 통해 일상에 새로운 영감과 활력을 불어넣습니다."
                    images={['/culture1.jpg', '/culture2.jpg', '/culture3.jpg', '/culture4.jpg']}
                />
                <ProgramDetail
                    title="Community"
                    description="플로깅, 운동 인증, 독서모임, 맛집 탐방 등 관심사가 비슷한 사람들과 함께하며 즐거운 관계를 형성합니다."
                    images={['/community1.jpg', '/community2.jpg', '/community3.jpg', '/community4.jpg']}
                />
                <ProgramDetail
                    title="Class"
                    description="원석팔찌, 향수, 메이크업, 뜨개질 등 원데이 클래스를 통해 새로운 것을 배우고 나만의 재능을 발견합니다."
                    images={['/class1.jpg', '/class2.jpg', '/class3.jpg', '/class4.jpg']}
                />
                <ProgramDetail
                    title="Consultation"
                    description="성향분석, 진로, 금융, 반려동물 등 전문가와의 상담을 통해 삶의 다양한 고민에 대한 해답을 찾아갑니다."
                    images={['/consultation1.jpg', '/consultation2.jpg', '/consultation3.jpg', '/consultation4.jpg']}
                />
            </div>
        </div>
    );
}
