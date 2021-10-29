import React, { ButtonHTMLAttributes } from "react";
import { styled } from "../../stitches.config";

const StyledDefaultButton = styled("button", {
  backgroundColor: "$s_CyanBlue",
});

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function DefaultButton(props: DefaultButtonProps) {
  return <StyledDefaultButton {...props} />;
}

export default DefaultButton;
