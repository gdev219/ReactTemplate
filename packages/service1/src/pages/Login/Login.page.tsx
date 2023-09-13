import { BaseSpinner, Button, Container, TextField } from '@gdev219/common/src/components';
import { Box, FormControl, Link, List, ListItem, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { MouseEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FETCH_LOGIN } from '../../api/auth';
import { defaultRedirectURL } from '../../router/routes';
import { useBoundStore } from '../../store';
function Login() {
  const idInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updateTokens } = useBoundStore();
  const navigate = useNavigate();

  function handleClickLogin(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    const userId = idInputRef.current?.value || '';
    const userPassword = passwordInputRef.current?.value || '';
    setIsLoading(true);
    FETCH_LOGIN({ userId, userPassword })
      .then((res) => {
        const {
          data: { accessToken, refreshToken },
        } = res;
        updateTokens({ accessToken, refreshToken });
        // axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        // axiosInstance.defaults.headers['refresh-token'] = `${refreshToken}`;
        navigate(defaultRedirectURL);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const errMsg: IResponseError = error.response?.data;

          console.log(errMsg);

          return;
        }
      });
  }

  return (
    <>
      <Container
        style={{
          width: '100%',
          height: '100%',
          padding: '92px 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          component={'form'}
          sx={{
            background: '#fff',
            p: 4,
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <BaseSpinner loading={isLoading}></BaseSpinner>
          <Typography variant="h2" component="h2" color="primary.main" sx={{ mb: 2 }}>
            로그인
          </Typography>
          <FormControl variant="standard" fullWidth>
            <List sx={{ width: '100%' }} disablePadding>
              <ListItem sx={{ mb: 2 }}>
                <TextField
                  inputRef={idInputRef}
                  label="아이디"
                  size="small"
                  placeholder="아이디 입력"
                  disabled={isLoading}
                  fullWidth
                ></TextField>
              </ListItem>
              <ListItem sx={{ mb: 4 }}>
                <TextField
                  type="password"
                  inputRef={passwordInputRef}
                  label="비밀번호"
                  size="small"
                  placeholder="비밀번호 입력"
                  disabled={isLoading}
                  fullWidth
                ></TextField>
              </ListItem>
              <ListItem sx={{ width: '100%', mb: 2 }}>
                <Button fullWidth type="submit" onClick={handleClickLogin} color="primary" disabled={isLoading}>
                  로그인
                </Button>
              </ListItem>
              <ListItem sx={{ justifyContent: 'flex-end' }}>
                <Link component="button">비밀번호 변경</Link>
              </ListItem>
            </List>
          </FormControl>
        </Box>
      </Container>
    </>
  );
}

export default Login;
