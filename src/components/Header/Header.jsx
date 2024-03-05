// import Button from "components/Button";
// import { ReactComponent as IconBurger } from "../../icons/burger-menu.svg";

import { NavLink } from "react-router-dom";
// import { StyledNavLink } from "../HomeContent/HomeContent.styled";
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
              <s.ListItem>
                <NavLink to="/">
                  <s.IconWrap>
                    <s.IconLogo />
                  </s.IconWrap>
                </NavLink>
              </s.ListItem>
              <s.ListItem>
                <s.StyledNavLink to="/shop">Shop</s.StyledNavLink>
              </s.ListItem>
              <s.ListItem>
                <s.StyledNavLink to="/shop-cart">Shop Cart</s.StyledNavLink>
              </s.ListItem>
              <s.ListItem>
                <s.StyledNavLink to="/history">History</s.StyledNavLink>
              </s.ListItem>
              <s.ListItem>
                <s.StyledNavLink to="/favorites">Favorites</s.StyledNavLink>
              </s.ListItem>
            </s.List>
          </nav>
        </s.Wrap>
      </s.HeaderContainer>
    </s.HeaderWrap>
  );
};

export default Header;
