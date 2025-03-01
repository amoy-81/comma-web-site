import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16"/><path d="M3.69043 11.71C8.31043 12.3 11.7004 15.7 12.3004 20.32"/><path d="M2.62012 15.0699C6.01012 15.4999 8.50012 18 8.94012 21.39"/><path d="M1.98047 18.86C3.67047 19.08 4.92047 20.32 5.14047 22.02"/>
    </BaseIcon>
  );
}