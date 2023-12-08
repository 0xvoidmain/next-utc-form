import React, { useState } from 'react';
import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const SwitchThemeButton = () => {
  const theme = useMantineTheme();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(colorScheme === 'light');

  const onHandleChange = (isChecked: boolean) => {
    if (isChecked) {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
    setChecked(isChecked);
  };

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      checked={checked}
      onChange={(event) => onHandleChange(event.currentTarget.checked)}
    />
  );
};

export default SwitchThemeButton;
