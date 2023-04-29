import { useState } from 'react';

import { Stack } from '../Box/Stack';
import { InputPassword } from '../InputPassword';

import type { PasswordStrengthProps } from './PasswordStrength';
import { PasswordStrength } from './PasswordStrength';

export default {
  component: PasswordStrength,
  title: 'Overlay/PasswordStrength',
};

export const Usage = (args: PasswordStrengthProps) => {
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(true);

  return (
    <Stack css={{ maxW: '350px' }}>
      <PasswordStrength
        {...args}
        onOpenChange={() => setOpen(true)}
        password={password}
        open={open}
      >
        <InputPassword
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          value={password}
          placeholder="Type your password"
        />
      </PasswordStrength>
    </Stack>
  );
};