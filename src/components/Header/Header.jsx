// import Button from "components/Button";
// import { ReactComponent as IconBurger } from "../../icons/burger-menu.svg";

import { NavLink } from "react-router-dom";
import { StyledNavLink } from "../HomeContent/HomeContent.styled";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.HeaderWrap>
      <s.HeaderContainer>
        <s.Wrap>
          {/* <Button name="burger" type="button" onClick={() => onOpen()}>
            <IconWrap>
              <IconBurger />
            </IconWrap>
          </Button> */}
          <nav>
            <s.List>
              <li>
                <NavLink to="/">
                  <s.IconWrap>
                    <s.IconLogo />
                  </s.IconWrap>
                </NavLink>
              </li>
              <li>
                <StyledNavLink to="/shop">Shop</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/shop-cart">Shop Cart</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/history">History</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/favorites">Favorites</StyledNavLink>
              </li>
            </s.List>
          </nav>
        </s.Wrap>
      </s.HeaderContainer>
    </s.HeaderWrap>
  );
};

export default Header;
