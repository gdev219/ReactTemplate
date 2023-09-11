import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, List, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DEFAULT_LINK_STYLE } from '../../styles';
import { BaseMenuItem, IMenuItem } from './BaseMenuItem';

export interface IBaseMenuProps {
  type?: 'normal' | 'icon';
  items: IMenuItem[];
  depth?: number;
}
const BaseMenu = function ({ items, depth, type }: IBaseMenuProps) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItemStates, setMenuItemStates] = useState<{
    [key: string]: boolean;
  }>(
    items.reduce((acc: { [key: string]: boolean }, obj) => {
      acc[obj.id] = true;
      return acc;
    }, {}),
  );
  // set collpase make open by default
  useMemo(() => {
    if (type !== 'icon') {
      items.forEach(({ id }) => {
        setMenuItemStates((prev) => ({ ...prev, [id]: true }));
      });
    }
  }, [items, type]);

  const handleMenuItemClick = useCallback(function (isOpen: boolean, id: string, event: MouseEvent<unknown> | null) {
    if (event) {
      setAnchorEl(event.currentTarget as HTMLElement);
    }
    setMenuItemStates((prev) => ({ ...prev, [id]: isOpen }));
  }, []);

  useEffect(() => {
    if (type === 'icon') {
      setMenuItemStates((prev) => {
        for (const key in prev) {
          prev[key] = false;
        }
        return { ...prev };
      });
    }
  }, [type, depth]);

  return (
    <>
      <List
        sx={{
          width: '100%',
          backgroundColor: 'inherit',
          color: '#fff',
        }}
        disablePadding
        component={Number(depth) > 0 ? 'nav' : 'div'}
      >
        {items.map((item, index) => {
          return (
            <Box key={`${item.id}_${index}`}>
              <BaseMenuItem
                {...item}
                open={menuItemStates[item.id]}
                depth={Number(depth ?? 0)}
                type={type}
                selected={location.pathname === item.link}
                handleMenuClick={handleMenuItemClick}
              >
                {item.items ? menuItemStates[item.id] ? <ExpandMore /> : <ExpandLess /> : null}
              </BaseMenuItem>

              {item.items &&
                (type === 'normal' ? (
                  <Collapse in={menuItemStates[item.id]} timeout="auto">
                    <BaseMenu
                      items={item.items}
                      key={`child_${item.id}_${index}`}
                      depth={(depth ?? 0) + 1}
                      type={type}
                    ></BaseMenu>
                  </Collapse>
                ) : (
                  // @TODO recursive ... only depth 1 is working now
                  <Menu
                    open={menuItemStates[item.id]}
                    anchorEl={anchorEl}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onClose={() => {
                      setMenuItemStates((prev) => {
                        return { ...prev, [item.id]: false };
                      });
                    }}
                  >
                    {item.items.map((childItem) => (
                      <MenuItem
                        key={`menu_item_${childItem.id}`}
                        selected={location.pathname === childItem.link}
                        sx={{ padding: 0 }}
                      >
                        <Link
                          to={childItem.link || '/'}
                          style={{ ...DEFAULT_LINK_STYLE, padding: '0.25rem 0.5rem' }}
                          onClick={() => {
                            setMenuItemStates((prev) => {
                              return { ...prev, [item.id]: false };
                            });
                          }}
                        >
                          {childItem.title}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                ))}
            </Box>
          );
        })}
      </List>
    </>
  );
};

export { BaseMenu };
