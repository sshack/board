import { IconProps } from '../../utils/types';

export function Close({ className, ...props }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill="#fff"
        d="m6.997 5.587 4.95-4.95L13.36 2.05 8.41 7l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.633 11.95 5.583 7 .633 2.05 2.047.638z"
      />
    </svg>
  );
}

export default Close;
