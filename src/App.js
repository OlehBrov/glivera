import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/layout/Layout";

import { Customers } from "./components/dashboard/Customers";
import { useEffect, useState } from "react";
import { breakpoints } from "./utils/mediaConstants";

import { Product } from "./components/product/Product";
import { Income } from "./components/income/Income";
import { Promote } from "./components/promote/Promote";
import { Help } from "./components/help/Help";

function App() {
  const [currentScreen, setCurrentScreen] = useState(breakpoints.wMobile);
  const screenMatcher = (data) => {
    if (data >= breakpoints.wMobile && data < breakpoints.wSemiMobile) {
      setCurrentScreen(breakpoints.wMobile);
    } else if (data >= breakpoints.wSemiMobile && data < breakpoints.wTablet) {
      setCurrentScreen(breakpoints.wSemiMobile);
    } else if (data >= breakpoints.wTablet && data < breakpoints.wLaptop) {
      setCurrentScreen(breakpoints.wTablet);
    } else if (data >= breakpoints.wLaptop && data < breakpoints.wDesktop) {
      setCurrentScreen(breakpoints.wLaptop);
    } else if (data >= breakpoints.wDesktop) {
      setCurrentScreen(breakpoints.wDesktop);
    }
  };
  window.addEventListener("resize", (e) =>
    screenMatcher(e.target.screen.width)
  );
  useEffect(() => {
    screenMatcher(window.screen.width);
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Layout currentScreen={currentScreen} />}>
        <Route path="product" element={<Product />} />
        <Route
          path="customers"
          element={<Customers currentScreen={currentScreen} />}
        />
        <Route path="income" element={<Income />} />
        <Route path="promote" element={<Promote />} />
        <Route path="help" element={<Help />} />

        {/* <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
