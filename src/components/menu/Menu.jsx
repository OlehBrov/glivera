import { useLocation } from "react-router-dom";

import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";
import { ProductIcon } from "../sidebar/iconComponents/ProductIcon";
import { CustomersIcon } from "../sidebar/iconComponents/CustomersIcon";
import { IncomeIcon } from "../sidebar/iconComponents/IncomeIcon";
import { PromoteIcon } from "../sidebar/iconComponents/PromoteIcon";
import { HelpIcon } from "../sidebar/iconComponents/HelpIcon";

import { DashboardIcon } from "../sidebar/iconComponents/DashboardIcon";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";


export const Menu = (props) => {

  const showBtn = props?.screen;
  const location = useLocation();
  return (
    <nav className="menu-wrapper">
      {!showBtn && (
        <button
          type="button"
          className="menu-btn close-menu-btn"
          onClick={props.closeMenu}
        >
          <CloseIcon />
        </button>
      )}

      <div className="menu-link-wrapper">
              <div className="sidebar_logo_wrap">
        {" "}
        {/* <div className="sidebar_logo-text-section"> */}
        <LogoIcon className="sidebar_logo" />{" "}
        <p className="sidebar_logo-text">Dashboard</p> {/* </div> */}
        <span className="sidebar_logo-version">v.01</span>
      </div>
        <SidebarMenuItem
          className="nav-link"
          path={"/"}
          closeMenu={props.closeMenu}
          icon={
            <DashboardIcon
              className="dashboard_icon menu_icon"
              color={location.pathname === "/" && "#FFF"}
            />
          }
          text={"Dashboard"}
        />

        <SidebarMenuItem
          className="nav-link"
          path={"/product"}
          closeMenu={props.closeMenu}
          icon={
            <ProductIcon
              className="product_icon menu_icon"
              color={location.pathname === "/product" && "#FFF"}
            />
          }
          text={"Product"}
        />

        <SidebarMenuItem
          className="nav-link"
          path={"/customers"}
          closeMenu={props.closeMenu}
          icon={
            <CustomersIcon
              className="customers_icon menu_icon"
              color={location.pathname === "/customers" && "#FFF"}
            />
          }
          text={"Customers"}
        />

        <SidebarMenuItem
          className="nav-link"
          path={"/income"}
          closeMenu={props.closeMenu}
          icon={
            <IncomeIcon
              className="income_icon menu_icon"
              color={location.pathname === "/income" && "#FFF"}
            />
          }
          text={"Income"}
        />

        <SidebarMenuItem
          className="nav-link"
          path={"/promote"}
          closeMenu={props.closeMenu}
          icon={
            <PromoteIcon
              className="promote_icon menu_icon"
              color={location.pathname === "/promote" && "#FFF"}
            />
          }
          text={"Promote"}
        />

        <SidebarMenuItem
          className="nav-link"
          path={"/help"}
          closeMenu={props.closeMenu}
          icon={
            <HelpIcon
              className="help_icon menu_icon"
              color={location.pathname === "/help" && "#FFF"}
            />
          }
          text={"Help"}
        />
      </div>
    </nav>
  );
};
