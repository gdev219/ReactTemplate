import { Container, ContainerProps } from '@mui/material';

const WrapContainer = function ({ children, ...rest }: ContainerProps) {
  const systemDefaults = {};
  return (
    <Container {...systemDefaults} {...rest}>
      {children}
    </Container>
  );
};

export { WrapContainer as Container };
