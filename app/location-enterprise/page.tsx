import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const ResultPageDetail = dynamic(() => import('@/components/Location'), { ssr: false });

const ResultPage = () => <ResultPageDetail />;

export default ResultPage;
