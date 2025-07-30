import { MenuIcon, UserRoundPlus } from "lucide-react";
import navTexts from "./../json/navbarText.json";

import {
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useEffect, useRef } from "react";
import { ButtonWithIcon } from "@/components/shared/ButtonWithIcon";

const NavSidebar = () => {
  const { setOpen, open } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <div ref={sidebarRef}>
      {!open && (
        <SidebarTrigger icon={<MenuIcon />} className="cursor-pointer" />
      )}
      <Sidebar side="right">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navTexts.options.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild className="cursor-pointer">
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <ButtonWithIcon
            props={{
              text: navTexts.signup,
              icon: <UserRoundPlus />,
              size: "lg",
              customClasses: "cursor-pointer text-foreground w-full",
            }}
          />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default NavSidebar;
