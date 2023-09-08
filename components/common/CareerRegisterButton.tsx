import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CareerRegisterButton() {
  return (
    <Link href="/careers/register">
      <Button variant="blueBg" size="big" className="mt-7 mx-0">
        Register Now <BsArrowRight />
      </Button>
    </Link>
  );
}
