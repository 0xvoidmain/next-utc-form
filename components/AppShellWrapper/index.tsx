'use client';

import React, { useEffect, useState } from 'react';
import { AppShell, Flex, rem, Burger, Avatar, Text, NavLink } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconBuildingFactory, IconChevronRight, IconTruckDelivery } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import globalCss from '../../styles/global.module.css';
import SwitchThemeButton from '../SwitchThemeButton';

const AppShellWrapper = ({ children }: { children: any }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isMobileSmall = useMediaQuery('(max-width: 460px)');

  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {isClient && (
        <AppShell
          transitionDuration={500}
          transitionTimingFunction="ease"
          header={{ height: isMobile ? 72 : 90 }}
          navbar={{
            width: 350,
            breakpoint: 'md',
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Flex gap={12} align="center" justify="space-between" px={rem(24)} h="100%">
              <Flex gap={rem(12)} align="center" justify="flex-start">
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
                <Flex
                  gap={rem(8)}
                  align="center"
                  justify="flex-start"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    router.push('/');
                    close();
                  }}
                >
                  <Avatar src="/assets/images/LogoUTC.jpg" alt="logo" size={isMobile ? 48 : 64} />
                  <Flex gap={rem(4)} align="flex-start" justify="center" direction="column">
                    <Text className={globalCss.logoText}>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</Text>
                    {!isMobileSmall && (
                      <Text className={globalCss.logoSubText}>
                        UNIVERSITY OF TRANSPORT AND COMMUNICATIONS
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Flex>
              <Flex justify="flex-end">
                <SwitchThemeButton />
              </Flex>
            </Flex>
          </AppShell.Header>

          <AppShell.Navbar p="md" pb={rem(isMobile ? 50 : 100)}>
            {/* <Flex direction="column" justify="space-between" h="100%"> */}
            <Flex direction="column" gap={rem(8)}>
              <NavLink
                onClick={() => {
                  router.push('/transportation-enterprise');
                  close();
                }}
                label="Doanh nghiệp vận tải"
                leftSection={<IconTruckDelivery size="1rem" stroke={1.5} />}
                rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
                variant="subtle"
                active={pathname === '/transportation-enterprise'}
              />
              <NavLink
                onClick={() => {
                  router.push('/manufacturing-enterprise');
                  close();
                }}
                label="Doanh nghiệp sản xuất, kinh doanh"
                leftSection={<IconBuildingFactory size="1rem" stroke={1.5} />}
                rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
                variant="subtle"
                active={pathname === '/manufacturing-enterprise'}
              />
            </Flex>
            {/* </Flex> */}
          </AppShell.Navbar>

          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      )}
    </>
  );
};

export default AppShellWrapper;
