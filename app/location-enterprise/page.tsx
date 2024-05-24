import dynamic from 'next/dynamic';
import React from 'react';

const ResultPageDetail = dynamic(() => import('@/components/Location'), { ssr: false });

const ResultPage = () => <ResultPageDetail />;

export default ResultPage;
