import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, Div3, NavLink } from "./HeaderStyles";

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center" }}>@nafisnihal</a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href={route === "/all-projects" ? "/#about" : "#about"}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "/#tech" : "#tech"}>
            <NavLink>Skills</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialMedia />
      </Div3>
    </HeaderContainer>
  );
};

export default Header;
