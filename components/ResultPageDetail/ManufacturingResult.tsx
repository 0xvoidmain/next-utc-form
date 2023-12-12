'use client';

import { Container, Flex, Space, rem, Text, Skeleton, Table } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import globalCss from '../../styles/global.module.css';
import { ManufacturingData } from '@/types';
import classes from './style.module.css';

const ManufacturingResult = () => {
  const [data, setData] = useState<ManufacturingData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api?${new URLSearchParams({
          index: '1',
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
          DOANH NGHIỆP SẢN XUẤT, KINH DOANH
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
                <Table.Th>1.1. Tên công ty</Table.Th>
                <Table.Th>1.2. Địa chỉ công ty</Table.Th>
                <Table.Th>1.3. Họ và tên</Table.Th>
                <Table.Th>1.4. Số điện thoại</Table.Th>
                <Table.Th>1.5. Địa chỉ Email</Table.Th>
                <Table.Th>1.6. Chức vụ</Table.Th>
                <Table.Th>1.7. Loại hình công ty</Table.Th>
                <Table.Th>1.8. Loại hàng hoá</Table.Th>
                <Table.Th>1.9. Số nhân viên</Table.Th>
                <Table.Th>1.10. Số nhân viên logistics</Table.Th>
                <Table.Th>1.11. Mô hình doanh nghiệp</Table.Th>
                <Table.Th>2.1. Doanh thu hàng năm</Table.Th>
                <Table.Th>2.2. Chi phí logistics (%)</Table.Th>
                <Table.Th>2.3. Đánh giá chi phí logistics</Table.Th>
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
                  <Table.Td>{item.kindOfEnterprise}</Table.Td>
                  <Table.Td>{item.kindOfProduct}</Table.Td>
                  <Table.Td>{item.quantityEmployees}</Table.Td>
                  <Table.Td>{item.quantityLogisticEmployees}</Table.Td>
                  <Table.Td>{item.businessEnterprise}</Table.Td>
                  <Table.Td>{item.annualRevenue}</Table.Td>
                  <Table.Td>{item.logisticExpense}</Table.Td>
                  <Table.Td>{item.feedbackLogisticExpense}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      )}
    </Container>
  );
};

export default ManufacturingResult;
