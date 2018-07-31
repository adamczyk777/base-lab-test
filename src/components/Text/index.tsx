import * as React from "react";
import { Size } from "../../util/Enum";

interface Props {
  children?: any;
  size: Size;
  color: string;
}

const Text = (props: Props) => (
  <span style={{ fontSize: props.size + "em", color: props.color }}>
    {props.children}
  </span>
);

export default Text;
