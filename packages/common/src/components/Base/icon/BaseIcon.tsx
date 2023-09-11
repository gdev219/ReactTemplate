import { SvgIcon, SvgIconProps } from '@mui/material';

const icons = import.meta.glob('../../../../assets/icons/*', { eager: true, as: 'raw' });

interface IBaseIcon extends SvgIconProps {
  name: string;
}

const BaseIcon = function ({ name, ...rest }: IBaseIcon) {
  const systemDefaults = {};

  const matchedIconKey = Object.keys(icons).find((v) => v.includes(name));
  const iconElement = matchedIconKey ? icons[matchedIconKey] : '';

  const templateEl = document.createElement('div');
  templateEl.innerHTML = iconElement.trim();
  const svgEl = templateEl.querySelector('svg');
  const viewBox = svgEl?.getAttribute('viewBox');

  function svgMarkup() {
    return { __html: iconElement };
  }

  return (
    <SvgIcon viewBox={viewBox || ''} {...systemDefaults} {...rest}>
      <svg dangerouslySetInnerHTML={svgMarkup()} style={{ alignItems: 'center', justifyContent: 'center' }}></svg>
    </SvgIcon>
  );
};

export { BaseIcon };
