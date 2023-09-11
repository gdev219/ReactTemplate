import { TextField, TextFieldProps, styled } from '@mui/material';
const CustomTextField = styled(TextField)(({ theme, color }) => {
  return {
    '& .MuiInputLabel-root': {
      position: 'relative',
      transform: 'none',
      display: 'flex',
      alignItems: 'center',
      color: '#7E7E7E',
      fontSize: '16px',
      marginBottom: '4px',
    },
    '& .MuiInputLabel-root .MuiFormLabel-asterisk': {
      color: '#DF3F49',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette[color || 'primary'].main,
    },
    '& .Mui-error input': {
      background: '#FCECED',
    },
    '& .MuiInputLabel-root.Mui-focused.Mui-error,& .MuiInputLabel-root.Mui-error': {
      color: theme.palette.error.main,
    },
    '& .MuiFormHelperText-root': {
      margin: 0,
      marginTop: '4px',
      textAlign: 'right',
    },
  };
});

const wrapTextField = function ({ ...rest }: TextFieldProps) {
  const systemDefaults = {
    InputLabelProps: {
      shrink: false,
    },
  };
  return <CustomTextField {...systemDefaults} {...rest}></CustomTextField>;
};

export { wrapTextField as TextField };
