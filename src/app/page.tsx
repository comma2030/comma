'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowRight, Youtube, Instagram } from 'lucide-react';

// --- 레퍼런스 스타일의 섹션 래퍼 ---
const TitledSection = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="container mx-auto px-6 py-16 md:py-24"
        >
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <p className="text-brand-gray text-sm">
                        ({num}) {title}
                    </p>
                </div>
                <div className="md:col-span-3">{children}</div>
            </div>
        </motion.section>
    );
};

// --- 프로그램 카드 ---
const ProgramCard = ({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) => (
    <div className="group">
        <div className="overflow-hidden mb-4 bg-gray-200">
            <Image
                src={imgSrc}
                alt={title}
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
        </div>
        <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
        <p className="text-brand-gray">{description}</p>
    </div>
);

export default function HomePage() {
    return (
        <div className="font-sans">
            <main>
                {/* --- Hero Section --- */}
                <section className="h-screen min-h-[600px] flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                        >
                            REST, AND <br />
                            OPPORTUNITY FOR <br />
                            <span className="text-sky-500">CHANGE.</span>
                        </motion.h1>
                    </div>
                </section>

                {/* --- About Section --- */}
                <TitledSection num="01" title="ABOUT">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark leading-snug">
                        쉼, 그 이상의 가치를 제공하는 <br /> 2030 청년 플랫폼, 콤마
                    </h2>
                    <p className="max-w-2xl text-brand-gray leading-relaxed">
                        불확실한 사회 속에서 자기만의 정체성을 추구하는 2030세대를 위해 존재합니다. COMMA는 단순히 쉬는
                        것을 넘어, 감정·신체·정체성까지 온전히 충전하는{' '}
                        <strong className="text-brand-dark">회복의 시간</strong>과 자기답게 살아가되 끊임없이 배우고
                        연결하며 변화에 유연하게 대응하는 <strong className="text-brand-dark">성장의 기회</strong>를
                        제공합니다.
                    </p>
                </TitledSection>

                {/* --- Programs Section --- */}
                <TitledSection num="02" title="PROGRAMS">
                    <div className="grid md:grid-cols-2 gap-10">
                        <ProgramCard
                            imgSrc="/culture1.jpg"
                            title="Culture"
                            description="전시, 연극, 콘서트 등 문화 경험"
                        />
                        <ProgramCard
                            imgSrc="/community1.jpg"
                            title="Community"
                            description="플로깅, 독서모임 등 함께하는 활동"
                        />
                        <ProgramCard
                            imgSrc="/class1.jpg"
                            title="Class"
                            description="원데이 클래스를 통한 새로운 배움"
                        />
                        <ProgramCard
                            imgSrc="/consultation1.jpg"
                            title="Consultation"
                            description="성향, 진로, 금융 등 전문 상담"
                        />
                    </div>
                </TitledSection>

                {/* --- Deep Dive Section --- */}
                <TitledSection num="03" title="DEEP DIVE">
                    <div className="bg-gray-100 p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
                            나를 발견하는 특별한 여정
                        </h2>
                        <p className="text-sky-500 font-semibold mb-6">무제 자기계발 프로그램</p>
                        <p className="max-w-2xl mx-auto text-brand-gray leading-relaxed">
                            {
                                "COMMA의 '무제'는 고전의 내용을 통해 자존감, 리더십 등을 개선하는 자기계발 프로그램입니다."
                            }
                        </p>
                    </div>
                </TitledSection>

                {/* --- Reviews Section --- */}
                <TitledSection num="04" title="REVIEWS">
                    <div className="space-y-10">
                        <div className="border-l-4 border-sky-400 pl-6">
                            {/* [수정됨] "..." -> “...” */}
                            <p className="text-xl md:text-2xl font-medium text-brand-dark">
                                “정신없이 살다가 처음으로 제대로 된 쉼을 경험했어요. 저를 돌아보는 소중한
                                시간이었습니다.”
                            </p>
                            <p className="mt-3 text-brand-gray">- 김O은, [커뮤니티] 참여자</p>
                        </div>
                        <div className="border-l-4 border-sky-400 pl-6">
                            {/* [수정됨] "..." -> “...” */}
                            <p className="text-xl md:text-2xl font-medium text-brand-dark">
                                “진로상담을 통해 막막했던 미래에 대한 실마리를 찾았어요. 제 안의 가능성을 보게
                                해주셨습니다.”
                            </p>
                            <p className="mt-3 text-brand-gray">- 이O진, [컨설테이션] 참여자</p>
                        </div>
                    </div>
                </TitledSection>

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
            </main>
        </div>
    );
}
