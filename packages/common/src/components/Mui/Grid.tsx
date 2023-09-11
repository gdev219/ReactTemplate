import { Grid, GridProps } from '@mui/material';

const WrapGrid = function ({ children, ...rest }: GridProps) {
  const systemDefaults = {};
  return (
    <Grid {...systemDefaults} {...rest}>
      {children}
    </Grid>
  );
};

export { WrapGrid as Grid };
