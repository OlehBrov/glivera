import React from "react";

import {  useLocation } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../images/logo.svg";

import { DashboardIcon } from "./iconComponents/DashboardIcon";
import { ProductIcon } from "./iconComponents/ProductIcon";
import { CustomersIcon } from "./iconComponents/CustomersIcon";
import { IncomeIcon } from "./iconComponents/IncomeIcon";
import { PromoteIcon } from "./iconComponents/PromoteIcon";
import { HelpIcon } from "./iconComponents/HelpIcon";
import { SidebarMenuItem } from "./SidebarMenuItem";
import UserImg from "../../images/userImg.jpg";

export const Sidebar = ({ userAccount }) => {
  let location = useLocation();

  return (
    <div className="sidebar_container">
      <div className="sidebar_logo_wrap">
        {" "}
       
        <LogoIcon className="sidebar_logo" />{" "}
        <p className="sidebar_logo-text">Dashboard</p> 
        <span className="sidebar_logo-version">v.01</span>
      </div>
      <nav className="menu-wrapper">
        <div className="menu-link-wrapper">
          <SidebarMenuItem
            className="nav-link"
            path={"/"}
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
      <div className="sidebar_user-wrap">
        <div className="sidebar_user-image-wrap">
          <img className="sidebar_user-image" src={UserImg} alt="" />
        </div>

        <div className="sidebar_user-info">
          <p className="user_name">{userAccount.account.name}</p>
          <p className="user_pos">{userAccount.account.position}</p>
        </div>
      </div>
    </div>
  );
};
