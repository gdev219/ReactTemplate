import { Checkbox, CheckboxProps, SvgIconProps, styled } from '@mui/material';

type CustomIconProps = {
  disabled: boolean | undefined;
} & SvgIconProps;

const Icon = styled('span')((props: CustomIconProps) => {
  const { fontSize, disabled } = props;
  const sizeMap: { [key: string]: number } = {
    small: 16,
    medium: 20,
  };
  return {
    borderRadius: '2px',
    width: sizeMap[fontSize ?? 'small'],
    height: sizeMap[fontSize ?? 'small'],
    border: '1px solid #D8D8D8',
    background: disabled ? '#B7B7B7' : '#fff',
  };
});

const CustomStyledCheckbox = styled(Checkbox)((props) => {
  const { theme } = props;

  return {
    '.MuiSvgIcon-root': {
      fill: '#D8D8D8',
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
      fill: '#B7B7B7',
    },
    '&.Mui-disabled.Mui-checked .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
    },
  };
});
const wrapCheckbox = function ({ ...rest }: CheckboxProps) {
  const systemDefaults = {
    icon: <Icon disabled={rest.disabled} />,
  };
  return <CustomStyledCheckbox {...systemDefaults} {...rest} />;
};

export { wrapCheckbox as Checkbox };
