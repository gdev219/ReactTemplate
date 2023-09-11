import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';
import { DEFAULT_LINK_STYLE } from '../../styles';
import { BaseIcon } from './icon/BaseIcon';

export interface IMenuItem {
  id: string;
  title: string;
  link?: string;
  selected?: boolean;
  iconComponent?: ReactNode;
  icon?: string;
  items?: IMenuItem[];
}
export type IBaseMenuItemProps = Omit<IMenuItem, ''> & {
  open: boolean;
  depth: number;
  type?: 'normal' | 'icon';
  handleMenuClick: (open: boolean, id: string, event: MouseEvent<unknown> | null) => void;
  children: ReactNode;
};

const BaseMenuItem = function ({
  id,
  link,
  title,
  open,
  depth,
  selected,
  handleMenuClick,
  icon,
  iconComponent,
  children,
}: IBaseMenuItemProps) {
  const handleClick = (event: MouseEvent) => {
    if (!depth || !link) {
      event.preventDefault();
    }

    handleMenuClick(!open, id, event);
  };
  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        padding: '12px',
        paddingLeft: `${(depth + 1) * 12}px`,
        '&.Mui-selected, &.Mui-selected:hover': (theme) => {
          return { backgroundColor: theme.palette.primary.dark };
        },
        ...DEFAULT_LINK_STYLE,
      }}
      aria-haspopup={true}
      selected={selected}
      href={link || '/'}
    >
      {depth === 0 ? (
        <ListItemIcon sx={{ minWidth: '24px' }}>
          {iconComponent ? iconComponent : <BaseIcon name={icon || ''} />}
        </ListItemIcon>
      ) : null}
      <ListItemText
        sx={{ margin: 0, paddingLeft: `${(depth + 1) * 12}px` }}
        primary={
          depth === 0 ? (
            <Typography variant="h5" noWrap>
              {title}
            </Typography>
          ) : (
            <Typography variant="h6" noWrap sx={{ color: 'rgba(255,255,255,0.8)' }}>
              {title}
            </Typography>
          )
        }
      />
      {children}
    </ListItemButton>
  );
};

export { BaseMenuItem };
