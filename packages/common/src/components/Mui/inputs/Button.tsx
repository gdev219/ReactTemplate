import { Button, ButtonProps } from '@mui/material';

const wrapButton = function ({ children, ...rest }: ButtonProps) {
  const systemDefaults = {
    variant: rest.variant ?? 'contained',
  };
  return (
    <Button {...systemDefaults} {...rest}>
      {children}
    </Button>
  );
};

export { wrapButton as Button };
