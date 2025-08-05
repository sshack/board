import { IconProps } from '../../utils/types';

export function Hamburguer({ className, ...props }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path fill="#fff" d="M0 0h18v2H0zm0 7h18v2H0zm0 7h18v2H0z"></path>
    </svg>
  );
}

export default Hamburguer;
