import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";

import { Menu } from "../menu/Menu";
import { Sidebar } from "../sidebar/Sidebar";

import accountData from "../../data/account.json";
import { ReactComponent as BurgerLines } from "../../images/burger.svg";

export const Layout = ({ currentScreen }) => {
  const [userAccount, setUserAcoount] = useState(null);
  useEffect(() => {
    setUserAcoount(accountData);
  }, []);

  const [menuContainer, setMenuContainer] = useState(null);
  useEffect(() => {
    setMenuContainer(document.querySelector(".menu-wrapper"));
  }, [currentScreen]);

  let gsapScreen = gsap.matchMedia();

  let menuTl = gsap.timeline({ paused: true });
  menuContainer &&
    gsapScreen.add("(max-width: 1023px)", () => {
      menuTl
        .to(".menu-wrapper", {
          yPercent: 100,
          duration: 1,
          ease: "bounce.out",
        })
        .fromTo(
          ".nav-link",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "expo.inOut",
          },
          "-=0.5"
        );
      return () => {
        console.log("return in gsapScreen");
      };
    });
  const openMenu = () => {
    if (Number(currentScreen) < 1024) menuTl.restart();
  };
  const closeMenu = () => { console.log('close menu')
    if (Number(currentScreen) < 1024) menuTl.reverse();
  };

  return (
    <div className="container global_container">
      <div className="header_container">
      
        {Number(currentScreen) < 1024 && (
          <>
            <button
              type="button"
              className="menu-btn open-menu-btn"
              onClick={openMenu}
            >
              <BurgerLines />
            </button>
            <Menu closeMenu={closeMenu} />{" "}
          </>
        )}
      </div>
      {Number(currentScreen) > 1023 && <Sidebar userAccount={ userAccount} />}
      <main className="main_container">
        {userAccount && (
          <p className="account-name">Hello {userAccount.account.name} 👋🏼,</p>
        )}
        <Outlet />
      </main>
    </div>
  );
};
