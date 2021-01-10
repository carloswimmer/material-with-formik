import React from "react";
import { Button as MuiButton } from "@material-ui/core";

const Button = (props) => {
  const { text, size, color, variant, onClick, ...others } = props;

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size}
      color={color}
      onClick={onClick}
      {...others}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
