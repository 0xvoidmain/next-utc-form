'use client';

import { Container, Flex, rem, Skeleton, Space, Table, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import globalCss from '../../styles/global.module.css';
import classes from './style.module.css';
import { TransportationData } from '@/types';

const TransportationResult = () => {
  const [data, setData] = useState<TransportationData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api?${new URLSearchParams({
          index: '0',
        })}`
      );
      const dataFetched = await response.json();
      setData(dataFetched.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Container
      m={0}
      py={rem(20)}
      classNames={{
        root: classes.wrapper,
      }}
    >
      <Flex align="center" justify="center" mb={30}>
        <Text className={cx(globalCss.title, globalCss.bold, globalCss.textCenter)}>
          DOANH NGHIỆP VẬN TẢI
        </Text>
      </Flex>
      <Space h="xl" />
      {loading ? (
        <>
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} radius="xl" />
        </>
      ) : (
        <Table.ScrollContainer minWidth={1800}>
          <Table stickyHeader stickyHeaderOffset={0}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>1.1. Tên doanh nghiệp</Table.Th>
                <Table.Th>1.2. Địa chỉ doanh nghiệp</Table.Th>
                <Table.Th>1.3. Họ và tên</Table.Th>
                <Table.Th>1.4. Số điện thoại</Table.Th>
                <Table.Th>1.5. Địa chỉ Email</Table.Th>
                <Table.Th>1.6. Chức vụ</Table.Th>
                <Table.Th>1.7. Loại hàng hoá</Table.Th>
                <Table.Th>1.8. Số nhân viên</Table.Th>
                <Table.Th>1.9. Dịch vụ vận tải</Table.Th>
                <Table.Th>1.10. Dịch vụ logistics</Table.Th>
                <Table.Th>1.11. Phương thức vận tải</Table.Th>
                <Table.Th>2.1. Địa điểm lấy hàng</Table.Th>
                <Table.Th>2.2. Địa điểm trả hàng</Table.Th>
                <Table.Th>2.3. Địa điểm cửa khẩu</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((item, index) => (
                <Table.Tr key={item.nameEnterprise + index}>
                  <Table.Td>{item.nameEnterprise}</Table.Td>
                  <Table.Td>{item.addressEnterprise}</Table.Td>
                  <Table.Td>{item.userName}</Table.Td>
                  <Table.Td>{item.phone}</Table.Td>
                  <Table.Td>{item.email}</Table.Td>
                  <Table.Td>{item.userPosition}</Table.Td>
                  <Table.Td>{item.kindOfProduct}</Table.Td>
                  <Table.Td>{item.quantityEmployees}</Table.Td>
                  <Table.Td>{item.transportationServices}</Table.Td>
                  <Table.Td>{item.logisticServices}</Table.Td>
                  <Table.Td>{item.transportationWays}</Table.Td>
                  <Table.Td>{item.fromLocation}</Table.Td>
                  <Table.Td>{item.toLocation}</Table.Td>
                  <Table.Td>{item.gateLocation}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      )}
    </Container>
  );
};

export default TransportationResult;
