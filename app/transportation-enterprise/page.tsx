import dynamic from 'next/dynamic';
import React from 'react';

const TransportationEnterpriseForm = dynamic(
  () => import('@/components/TransportationEnterpriseForm'),
  { ssr: false }
);

const TransportationEnterprisePage = () => <TransportationEnterpriseForm />;

export default TransportationEnterprisePage;
