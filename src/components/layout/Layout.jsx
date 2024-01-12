import { useEffect, useState } from "react";
import { ReactComponent as BurgerLines } from "../../images/burger.svg";
import accountData from "../../data/account.json";
import { NavLink, Outlet } from "react-router-dom";
import gsap from "gsap";
import { Menu } from "../menu/Menu";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = ({ currentScreen }) => {
  const [userAccount, setUserAcoount] = useState(null);
  const [menuContainer, setMenuContainer] = useState(null);
  useEffect(() => {
    setUserAcoount(accountData);
  }, []);

  useEffect(() => {
    setMenuContainer(document.querySelector(".menu-wrapper"));
  }, []);
  let mm = gsap.matchMedia();

  let menuTl = null;
  menuContainer &&
    mm.add(
      "(max-width: 1023px)",
      () => {
        menuTl = gsap.timeline({ paused: true });
        // menuTl.reversed(false).progress(0).clear().pause();
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
         menuTl.kill() 
        }
      },
  
    );
  mm.add("(min-width: 1024px)", () => {
  menuTl&& menuTl.kill()
})
  const openMenu = () => {
    console.log("opem menu");
    menuTl.play();
  };
  const closeMenu = () => {
    menuTl.reverse();
  };

  return (
    <div className="container global_container">
      <div className="header_container">
        {userAccount && (
          <p className="account-name">Hello, {userAccount.account.name}</p>
        )}

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
      {Number(currentScreen) > 1023 && (
        <Sidebar closeMenu={closeMenu} currentScreen={currentScreen} />
      )}
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
};
