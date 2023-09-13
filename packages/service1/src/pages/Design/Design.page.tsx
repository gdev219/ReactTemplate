import { BaseCode, Button, Checkbox, Radio, TextField } from '@gdev219/common/src/components';
import {
  Box,
  ButtonProps,
  CheckboxProps,
  Container,
  Grid,
  Paper,
  RadioProps,
  Stack,
  TextFieldProps,
  Typography,
} from '@mui/material';

type ComponentStyleMap<T> = {
  [key: string]: T[];
};
function Design() {
  const buttonMap: ComponentStyleMap<ButtonProps> = {
    large: [
      { size: 'large', variant: 'contained', color: 'primary' },
      { size: 'large', variant: 'outlined', color: 'primary' },
      { size: 'large', variant: 'outlined', color: 'white' },
      { size: 'large', variant: 'contained', disabled: true, color: 'primary' },
    ],
    medium: [
      { size: 'medium', variant: 'contained', color: 'primary' },
      { size: 'medium', variant: 'outlined', color: 'primary' },
      { size: 'medium', variant: 'outlined', color: 'white' },
      { size: 'medium', variant: 'contained', disabled: true, color: 'primary' },
    ],
    small: [
      { size: 'small', variant: 'contained', color: 'primary' },
      { size: 'small', variant: 'outlined', color: 'primary' },
      { size: 'small', variant: 'outlined', color: 'white' },
      { size: 'small', variant: 'contained', disabled: true, color: 'primary' },
    ],
    extraSmall: [
      { size: 'extraSmall', variant: 'contained', color: 'primary' },
      { size: 'extraSmall', variant: 'outlined', color: 'primary' },
      { size: 'extraSmall', variant: 'outlined', color: 'white' },
      { size: 'extraSmall', variant: 'contained', disabled: true, color: 'primary' },
    ],
    mini: [
      { size: 'mini', variant: 'contained', color: 'primary' },
      { size: 'mini', variant: 'outlined', color: 'primary' },
      { size: 'mini', variant: 'outlined', color: 'white' },
      { size: 'mini', variant: 'contained', disabled: true, color: 'primary' },
    ],
  };

  const textFieldMap: ComponentStyleMap<TextFieldProps> = {
    medium: [
      { size: 'medium', label: '라벨 영역', required: true },
      { size: 'medium', label: '라벨 영역', focused: true },
      { size: 'medium', label: '라벨 영역', error: true, helperText: '오류입니다.' },
    ],
  };

  const radioMap: ComponentStyleMap<RadioProps> = {
    medium: [
      { checked: true, size: 'medium' },
      { checked: false, size: 'medium' },
      { disabled: true, size: 'medium' },
      { checked: true, disabled: true, size: 'medium' },
    ],
    small: [
      { checked: true, size: 'small' },
      { checked: false, size: 'small' },
      { disabled: true, size: 'small' },
      { checked: true, disabled: true, size: 'small' },
    ],
  };

  const checkboxMap: ComponentStyleMap<CheckboxProps> = {
    medium: [
      { checked: true, size: 'medium' },
      { checked: false, size: 'medium' },
      { disabled: true, size: 'medium' },
      { checked: true, disabled: true, size: 'medium' },
    ],
    small: [
      { checked: true, size: 'small' },
      { checked: false, size: 'small' },
      { disabled: true, size: 'small' },
      { checked: true, disabled: true, size: 'small' },
    ],
  };

  return (
    <>
      <Container>
        <Paper sx={{ padding: '40px', mb: 2 }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h4">체크박스(Checkbox)</Typography>
          </Box>
          <Stack spacing={2}>
            {Object.keys(checkboxMap).map((key, index) => {
              const checkboxes = checkboxMap[key];
              return (
                <Grid container key={index} direction="row" spacing={2}>
                  {checkboxes.map((checkbox, childIndex) => {
                    return (
                      <Grid item xs={Math.floor(12 / checkboxes.length)} key={key + childIndex}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}
                        >
                          <Checkbox {...checkbox}></Checkbox>
                        </Box>
                        <Box>{<BaseCode>{JSON.stringify(checkbox, undefined, 2)}</BaseCode>}</Box>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </Stack>
        </Paper>
        <Paper sx={{ padding: '40px', mb: 2 }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h4">라디오(Radio)</Typography>
          </Box>
          <Stack spacing={2}>
            {Object.keys(radioMap).map((key, index) => {
              const radios = radioMap[key];
              return (
                <Grid container key={index} direction="row" spacing={2}>
                  {radios.map((radio, childIndex) => {
                    return (
                      <Grid item xs={Math.floor(12 / radios.length)} key={key + childIndex}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}
                        >
                          <Radio {...radio}></Radio>
                        </Box>
                        <Box>{<BaseCode>{JSON.stringify(radio, undefined, 2)}</BaseCode>}</Box>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </Stack>
        </Paper>
        <Paper sx={{ padding: '40px', mb: 2 }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h4">인풋(TextField)</Typography>
          </Box>
          <Stack spacing={2}>
            {Object.keys(textFieldMap).map((key, index) => {
              const textFields = textFieldMap[key];
              return (
                <Grid container key={index} direction="row" spacing={2}>
                  {textFields.map((textField, childIndex) => {
                    return (
                      <Grid item xs={Math.floor(12 / textFields.length)} key={key + childIndex}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}
                        >
                          <TextField {...textField}></TextField>
                        </Box>
                        <Box>{<BaseCode>{JSON.stringify(textField, undefined, 2)}</BaseCode>}</Box>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </Stack>
        </Paper>
        <Paper sx={{ padding: '40px', mb: 2 }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h4">버튼(Button)</Typography>
          </Box>
          <Stack spacing={2}>
            {Object.keys(buttonMap).map((key, index) => {
              const buttons = buttonMap[key];
              return (
                <Grid container key={index} direction="row" spacing={2}>
                  {buttons.map((button, childIndex) => {
                    return (
                      <Grid item xs={Math.floor(12 / buttons.length)} key={key + childIndex}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}
                        >
                          <Button {...button}>{key}</Button>
                        </Box>
                        <Box>{<BaseCode>{JSON.stringify(button, undefined, 2)}</BaseCode>}</Box>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
export default Design;
