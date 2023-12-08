import dynamic from 'next/dynamic';
import React from 'react';

const ManufacturingEnterpriseForm = dynamic(
  () => import('@/components/ManufacturingEnterpriseForm'),
  { ssr: false }
);

const ManufacturingEnterprisePage = () => <ManufacturingEnterpriseForm />;

export default ManufacturingEnterprisePage;
