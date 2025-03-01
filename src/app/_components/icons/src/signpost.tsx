import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M17.2195 2H8.95956C8.55956 2 8.17953 2.14 7.86953 2.38L5.67953 4.13C4.79953 4.83 4.79953 6.15999 5.67953 6.85999L7.86953 8.60999C8.17953 8.85999 8.56956 8.98999 8.95956 8.98999H17.2195C18.1895 8.98999 18.9695 8.20999 18.9695 7.23999V3.73999C18.9695 2.77999 18.1895 2 17.2195 2Z"/><path d="M6.7998 12H15.0598C15.4598 12 15.8398 12.14 16.1498 12.38L18.3398 14.13C19.2198 14.83 19.2198 16.16 18.3398 16.86L16.1498 18.61C15.8398 18.86 15.4498 18.99 15.0598 18.99H6.7998C5.8298 18.99 5.0498 18.21 5.0498 17.24V13.74C5.0498 12.78 5.8298 12 6.7998 12Z"/><path d="M12 12V9"/><path d="M12 22V19"/><path d="M9 22H15"/>
    </BaseIcon>
  );
}