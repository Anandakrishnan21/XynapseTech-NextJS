import React from "react";
import { Button } from "../ui/button";

export default function GetStartedBtn() {
  return (
    <Button
      variant="blueOutline"
      onClick={() => {
        location.assign("/#contact");
      }}
    >
      Get Started
    </Button>
  );
}
