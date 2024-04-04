'use client';

import { Container, Tabs, rem } from '@mantine/core';
import { IconBuildingFactory, IconTruckDelivery, IconChartBar } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { TransportationServices, IsSelfLogistic, QuantityLogisticEmployees, LogisticServices } from './ChartResult';
import TransportationResult from './TransportationResult';
import ManufacturingResult from './ManufacturingResult';
import classes from './style.module.css';
import Map from './Map';

const ResultPageDetail = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  const [transportationServices, setTransportationServices] = useState<string[]>([]);
  const [isSelfLogistic, setIsSelfLogistic] = useState<string[]>([]);
  const [quantityLogisticEmployees, setQuantityLogisticEmployees] = useState<string[]>([]);
  const [logisticServices, setDataLogisticServices] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api?${new URLSearchParams({
          index: '1',
        })}`
      );
      const dataFetched = await response.json();
      //
      const resFile2 = await fetch(
        `/api?${new URLSearchParams({
          index: '0',
        })}`
      );
      const dataFetchedFile2 = await resFile2.json();
      // dataFetched.data
      const logisticServicesArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.logisticServices) {
            acc.push(item.logisticServices);
        }
        return acc;
      }, []);
      const quantityLogisticEmployeesArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.quantityLogisticEmployees) {
            acc.push(item.quantityLogisticEmployees);
        }
        return acc;
      }, []);
      const isSelfLogisticArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.isSelfLogistic) {
            acc.push(item.isSelfLogistic);
        }
        return acc;
      }, []);
      const transportationServicesArray = dataFetchedFile2.data.reduce((acc: any, item: any) => {
        if (item.transportationServices) {
            acc.push(item.transportationServices);
        }
        return acc;
      }, []);

      setDataLogisticServices(logisticServicesArray);
      setQuantityLogisticEmployees(quantityLogisticEmployeesArray);
      setIsSelfLogistic(isSelfLogisticArray);
      setTransportationServices(transportationServicesArray);
    };
    fetchData();
  }, []);

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
          <Tabs.Tab value="chart" leftSection={<IconChartBar style={iconStyle} />}>
            Chart
          </Tabs.Tab>

          <Tabs.Tab value="map" leftSection={<IconChartBar style={iconStyle} />}>
            Map
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="transportation">
          <TransportationResult />
        </Tabs.Panel>

        <Tabs.Panel value="manufacturing">
          <ManufacturingResult />
        </Tabs.Panel>

        <Tabs.Panel value="chart">
          <TransportationServices transportationServices={transportationServices} />
          <IsSelfLogistic isSelfLogistic={isSelfLogistic} />
          <QuantityLogisticEmployees quantityLogisticEmployees={quantityLogisticEmployees} />
          <LogisticServices logisticServices={logisticServices} />
        </Tabs.Panel>

        <Tabs.Panel value="map">
          <Map/>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default ResultPageDetail;
