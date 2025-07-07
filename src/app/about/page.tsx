// /app/about/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="pt-32 pb-16 text-center">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
        >
            {title}
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-brand-gray"
        >
            {subtitle}
        </motion.p>
    </div>
);

export default function AboutPage() {
    return (
        <>
            <PageHeader title="ABOUT COMMA" subtitle="우리는 쉼과 변화를 위한 기회를 제공합니다." />

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-brand-dark mb-4">설립 이념</h2>
                        <p className="text-brand-gray leading-relaxed">
                            불확실한 사회 속에서 자기만의 정체성과 안정된 삶의 기반을 추구하는 2030세대를 위해
                            존재합니다. COMMA는 나를 다시 나답게 만들어주는 회복의 시간을 통해 단순히 쉬는 것이 아닌,
                            감정·신체·정체성까지 충전할 수 있는 진정한 <strong className="text-brand-dark">쉼</strong>을
                            선물합니다.
                        </p>
                        <br />
                        <p className="text-brand-gray leading-relaxed">
                            또한, 자기답게 살아가되, 끊임없이 배우고 연결하며 변화에 유연하게 대응하는 힘을 가질 수 있는{' '}
                            <strong className="text-brand-dark">기회</strong>를 제공하여 당신의 성장을 돕습니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="overflow-hidden rounded-lg"
                    >
                        <Image
                            src="/community2.jpg"
                            alt="COMMA community"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
