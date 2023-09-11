import { Box, Typography } from '@mui/material';
import { IUser } from '../../types/user';

interface IHeaderProfileProps {
  user: IUser;
}

export default function HeaderProfile({ user }: IHeaderProfileProps) {
  console.log(user);
  return (
    <Box>
      <Typography variant="h6" color="primary1.main">
        {user.nickname}
      </Typography>
    </Box>
  );
}
