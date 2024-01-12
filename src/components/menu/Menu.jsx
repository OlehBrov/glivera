import { NavLink } from "react-router-dom";

export const Menu = (props) => {
  console.log('closeMenu', props)
  const showBtn = props?.screen
  console.log('showBtn', showBtn)
  return (
    <nav className="menu-wrapper">
     {!showBtn &&<button
        type="button"
        className="menu-btn close-menu-btn"
        onClick={props.closeMenu}
      >
        Close
      </button>}

      <div className="menu-link-wrapper">
        <NavLink className="nav-link" to="/">
          Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/product">
          Product
        </NavLink>
        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-link" to="/income">
          Income
        </NavLink>{" "}
        <NavLink className="nav-link" to="/promote">
          Promote
        </NavLink>{" "}
        <NavLink className="nav-link" to="/help">
          Help
        </NavLink>
      </div>
    </nav>
  );
};
