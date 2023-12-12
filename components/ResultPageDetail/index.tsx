'use client';

import { Container, Tabs, rem } from '@mantine/core';
import { IconBuildingFactory, IconTruckDelivery } from '@tabler/icons-react';
import React from 'react';
import TransportationResult from './TransportationResult';
import ManufacturingResult from './ManufacturingResult';
import classes from './style.module.css';

const ResultPageDetail = () => {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <Container
      pb={rem(30)}
      pt={rem(0)}
      m={0}
      classNames={{
        root: classes.wrapper,
      }}
    >
      <Tabs defaultValue="transportation">
        <Tabs.List>
          <Tabs.Tab value="transportation" leftSection={<IconTruckDelivery style={iconStyle} />}>
            Doanh nghiệp vận tải
          </Tabs.Tab>
          <Tabs.Tab value="manufacturing" leftSection={<IconBuildingFactory style={iconStyle} />}>
            Doanh nghiệp sản xuất, kinh doanh
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="transportation">
          <TransportationResult />
        </Tabs.Panel>

        <Tabs.Panel value="manufacturing">
          <ManufacturingResult />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default ResultPageDetail;
