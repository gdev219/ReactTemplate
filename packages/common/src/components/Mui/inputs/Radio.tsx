import { Radio, RadioProps, SvgIconProps, styled } from '@mui/material';

type CustomBpIconProps = {
  disabled: boolean | undefined;
} & SvgIconProps;

const BpIcon = styled('span')((props: CustomBpIconProps) => {
  const { fontSize, disabled } = props;
  const sizeMap: { [key: string]: number } = {
    small: 16,
    medium: 20,
  };
  return {
    width: sizeMap[fontSize ?? 'small'],
    height: sizeMap[fontSize ?? 'small'],
    borderRadius: '50%',
    backgroundColor: disabled ? '#D8D8D8' : '#F8F8F8',
    transform: 'rotate(90deg)',
    filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.4))',
  };
});

const BpCheckedIcon = styled(BpIcon)((props: CustomBpIconProps) => {
  const { disabled } = props;
  return {
    '&::after': {
      content: `''`,
      clipPath: 'circle(30%)',
      background: disabled ? '#B7B7B7' : '#0072C6',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };
});
const CustomRadio = styled(Radio)(({ size }) => {
  const sizeMap: { [key: string]: number } = {
    small: 16,
    medium: 20,
  };
  return {
    '& .Mui-disabled .MuiSvgIcon-root': {
      color: 'black',
    },
    '& .MuiSvgIcon-root': {
      fontSize: sizeMap[size ?? 'small'],
    },
  };
});
const wrapRadio = function ({ ...rest }: RadioProps) {
  const systemDefaults = {
    icon: <BpIcon disabled={rest.disabled} />,
    checkedIcon: <BpCheckedIcon disabled={rest.disabled} />,
  };
  return <CustomRadio {...systemDefaults} {...rest} />;
};

export { wrapRadio as Radio };
