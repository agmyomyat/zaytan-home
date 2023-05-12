import React from 'react';
import IconProps from './types/icon-types';
export const CheckIcon: React.FC<IconProps> = ({
  size = '48',
  ...attributes
}) => {
  return (
    <svg
      {...attributes}
      height={size}
      width={size}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.00 512.00"
      xmlSpace="preserve"
      fill="#F67C31"
      stroke="#F67C31"
      transform="matrix(1, 0, 0, 1, 0, 0)"
      strokeWidth="0.00512"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="2.048"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: ' .st0{fill:#F67C31;} ' }}
        />{' '}
        <g>
          {' '}
          <path
            className="st0"
            d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172 l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z"
          />{' '}
        </g>{' '}
      </g>
    </svg>
  );
};
