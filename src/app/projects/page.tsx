// /app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start">
        <CheckCircle className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
        <span className="text-brand-gray">{children}</span>
    </div>
);

export default function ProjectsPage() {
    return (
        <div className="pt-32 pb-24 bg-off-white">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-sky-500 font-semibold">SPECIAL PROJECT</p>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-2">나를 발견하는 시간</h1>
            </motion.div>

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold text-brand-dark mb-3">어떤 프로그램인가요?</h2>
                        <p className="text-brand-gray leading-relaxed mb-10">
                            이 프로그램은 종교 활동이 아닌,{' '}
                            <strong className="text-brand-dark">
                                바이블의 지혜를 통해 나를 성장시키는 자기계발 프로젝트
                            </strong>
                            입니다. 현재 더 많은 청년들에게 보편적이고 효과적인 코칭 프로그램을 제공하기 위해, 추가 연구
                            중인 프로젝트의 <strong className="text-brand-dark">베타 테스트</strong>로 운영됩니다.
                        </p>

                        <h2 className="text-2xl font-bold text-brand-dark mb-3">왜 무료로 제공되나요?</h2>
                        <p className="text-brand-gray leading-relaxed mb-10">
                            본 프로그램은 전문성을 갖춘 교사(코치)들의{' '}
                            <strong className="text-brand-dark">재능기부</strong>로 진행됩니다. 참여자들의 경험은 향후
                            코칭 프로그램을 개발하고 고도화하는 데 필요한{' '}
                            <strong className="text-brand-dark">귀중한 빅데이터</strong>로 활용됩니다. 여러분의 참여가
                            더 나은 프로그램을 만드는 밑거름이 됩니다.
                        </p>

                        <h2 className="text-2xl font-bold text-brand-dark mb-4">어떤 효과를 기대할 수 있나요?</h2>
                        <div className="space-y-3 mb-12">
                            <FeatureItem>자존감 향상 및 긍정적 자아상 확립</FeatureItem>
                            <FeatureItem>목표 설정 및 달성을 위한 자제력 향상</FeatureItem>
                            <FeatureItem>공감과 소통을 통한 대인관계 개선</FeatureItem>
                            <FeatureItem>자신과 타인에게 선한 영향력을 미치는 리더십 향상</FeatureItem>
                        </div>

                        <a
                            href="#"
                            className="w-full bg-brand-dark text-white font-bold text-center py-4 rounded-lg hover:bg-black/80 transition-colors block"
                        >
                            프로젝트 참여 문의하기
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
