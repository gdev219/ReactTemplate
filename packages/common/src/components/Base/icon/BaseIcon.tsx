import { SvgIcon, SvgIconProps } from '@mui/material';
import { useEffect, useRef } from 'react';

const icons = import.meta.glob('../../../../assets/icons/*', { eager: true, as: 'raw' });

interface IBaseIcon extends SvgIconProps {
  name: string;
}

const BaseIcon = function ({ name, ...rest }: IBaseIcon) {
  const iconRef = useRef<SVGSVGElement>(null);
  const systemDefaults = {};
  const matchedIconKey = Object.keys(icons).find((v) => v.includes(name));
  const iconElement = matchedIconKey ? icons[matchedIconKey] : '';
  const templateEl = document.createElement('div');
  templateEl.innerHTML = iconElement.trim();
  const svgEl = templateEl.querySelector('svg');
  const viewBox = svgEl?.getAttribute('viewBox');

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.innerHTML = iconElement.trim();
    }
  }, [iconElement]);

  return <SvgIcon ref={iconRef} viewBox={viewBox || ''} {...systemDefaults} {...rest}></SvgIcon>;
};

export { BaseIcon };
