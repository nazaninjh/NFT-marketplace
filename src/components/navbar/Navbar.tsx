"use client";
import { ButtonWithIcon } from "../shared/ButtonWithIcon";
import { UserRoundPlus } from "lucide-react";
import navTexts from "./json/navbarText.json";
import { SidebarProvider } from "../ui/sidebar";
import NavSidebar from "./sidebar/NavSidebar";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-transparent text-lg">
      <p>{navTexts["logo-text"]}</p>
      <div className="lg:absolute lg:hidden">
        <SidebarProvider>
          <NavSidebar />
        </SidebarProvider>
      </div>
      <div className="hidden gap-2 lg:flex">
        <ul className="flex items-center gap-2">
          {navTexts.options.map((item) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
        <ButtonWithIcon
          props={{
            text: navTexts.signup,
            icon: <UserRoundPlus />,
            size: "lg",
            customClasses:
              "cursor-pointer text-foreground rounded-2xl px-5 py-6",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
