"use client";
import React, { ComponentProps, ElementType, useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer as Drawerr } from "antd";

interface IDrawer {
  title: string;
  children: React.ReactNode;
  buttonProps: ComponentProps<"button">;
  buttonTitle?: string;
  drawerPosition?: "left" | "right" | "top" | "bottom";
  icon: ElementType;
}
export default function Drawer({
  children,
  title,
  buttonProps,
  buttonTitle,
  drawerPosition,
  icon: Icon,
}: IDrawer) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>(
    drawerPosition ? drawerPosition : "bottom"
  );

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  function handleActionFn() {
    showDrawer();
  }

  return (
    <>
      <button onClick={showDrawer} {...buttonProps}>
        <Icon size={18} />
        <p>{buttonTitle ? buttonTitle : "Abrir"}</p>
      </button>

      <Drawerr
        autoFocus={false}
        className="rounded-t-3xl"
        title={title}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        
      >
        {children}
      </Drawerr>
    </>
  );
}
