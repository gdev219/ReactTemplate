import { DonutLarge } from '@mui/icons-material';
import { Paper } from '@mui/material';

export interface IBaseSpinnerProps {
  loading: boolean;
}

function BaseSpinner(props: IBaseSpinnerProps) {
  const { loading } = props;

  return loading ? (
    <Paper
      sx={{
        zIndex: '999',
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <DonutLarge
        sx={{
          fontSize: '2rem',
          animation: loading ? 'spin .6s linear infinite' : '',
          '@keyframes spin': {
            '0%': {
              transform: 'rotate(-360deg)',
            },
            '100%': {
              transform: 'rotate(0deg)',
            },
          },
        }}
      ></DonutLarge>
    </Paper>
  ) : (
    <></>
  );
}

export { BaseSpinner };
