'use client';

import { Container, Tabs, rem } from '@mantine/core';
import { IconBuildingFactory, IconTruckDelivery, IconChartBar } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import {
  TransportationServices,
  IsSelfLogistic,
  QuantityLogisticEmployees,
  LogisticServices,
  Doituongkhaosat,
  QuantityEmployees,
  LogisticExpense,
  TransportationWays,
  ImportantFactor,
  QuantityEmployees_0,
  LogisticServices_1, LogisticServices_Xep
} from './ChartResult';
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
  const [doituongkhaosat, setDoituongkhaosat] = useState<string[]>([]);
  const [quantityEmployees, setQuantityEmployees] = useState<string[]>([]);
  const [logisticExpense, setLogisticExpense] = useState<string[]>([]);
  const [transportationWays, setTransportationWays] = useState<string[]>([]);
  const [importantFactors, setImportantFactors] = useState<string[]>([]);
  const [quantityEmployees_0, setQuantityEmployees_0] = useState<string[]>([]);
  const [logisticServices_1, setLogisticServices_1] = useState<string[]>([]);
  const [logisticServices_Xep, setLogisticServices_Xep] = useState<string[]>([]);
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
      const userPosition = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.userPosition) {
            acc.push(item.userPosition);
        }
        return acc;
      }, []);
      const quantityEmployeesArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.quantityEmployees) {
            acc.push(item.quantityEmployees);
        }
        return acc;
      }, []);
      const logisticExpenseArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.logisticExpense) {
            acc.push(item.logisticExpense);
        }
        return acc;
      }, []);
      const transportationWaysArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.transportationWays) {
            acc.push(item.transportationWays);
        }
        return acc;
      }, []);
      const importantFactorsArray = dataFetched.data.reduce((acc: any, item: any) => {
        if (item.importantFactor) {
            acc.push(item.importantFactor);
        }
        return acc;
      }, []);
      const quantityEmployeesArray_0 = dataFetchedFile2.data.reduce((acc: any, item: any) => {
        if (item.quantityEmployees) {
            acc.push(item.quantityEmployees);
        }
        return acc;
      }, []);
      const logisticServicesArray_1 = dataFetchedFile2.data.reduce((acc: any, item: any) => {
        if (item.kindOfProduct) {
            acc.push(item.kindOfProduct);
        }
        return acc;
      }, []);
      const logisticServicesArray_Xep = dataFetchedFile2.data.reduce((acc: any, item: any) => {
        if (item.logisticServices) {
            acc.push(item.logisticServices);
        }
        return acc;
      }, []);
      setDataLogisticServices(logisticServicesArray);
      setQuantityLogisticEmployees(quantityLogisticEmployeesArray);
      setIsSelfLogistic(isSelfLogisticArray);
      setTransportationServices(transportationServicesArray);
      setDoituongkhaosat(userPosition);
      setQuantityEmployees(quantityEmployeesArray);
      setLogisticExpense(logisticExpenseArray);
      setTransportationWays(transportationWaysArray);
      setImportantFactors(importantFactorsArray);
      setQuantityEmployees_0(quantityEmployeesArray_0);
      setLogisticServices_1(logisticServicesArray_1);
      setLogisticServices_Xep(logisticServicesArray_Xep);
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
          <Doituongkhaosat doituongkhaosat={doituongkhaosat} />
          <QuantityEmployees quantityEmployees={quantityEmployees} />
          <LogisticExpense logisticExpense={logisticExpense} />
          <TransportationWays transportationWays={transportationWays} />
          <ImportantFactor importantFactors={importantFactors} />
          <QuantityEmployees_0 quantityEmployees_0={quantityEmployees_0} />
          <LogisticServices_1 logisticServices_1={logisticServices_1} />
          <LogisticServices_Xep logisticServices_Xep={logisticServices_Xep} />
        </Tabs.Panel>

        <Tabs.Panel value="map">
          <Map/>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default ResultPageDetail;
