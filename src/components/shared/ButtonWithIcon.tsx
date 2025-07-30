import { Button } from "@/components/ui/button";
import React from "react";

export function ButtonWithIcon({
  props,
}: {
  props: {
    icon: React.ReactNode;
    text: string;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    customClasses?: string;
  };
}) {
  return (
    <Button size={props.size} className={props?.customClasses}>
      {props.icon} {props.text}
    </Button>
  );
}
