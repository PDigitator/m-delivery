import styled from "styled-components";
import Logo from "../../assets/logo.svg?react";
import { staticTheme } from "../../theme";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
  position: sticky;
  z-index: 999;
  top: 0;
  margin: 0 auto;
  background-color: ${staticTheme.colors.accent};
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  padding: 60px 128px 0;
  margin: 0 auto;
  background-color: ${staticTheme.colors.txtTertiary};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
`;

export const ListItem = styled.li`
  padding-right: 40px;

  &:not(:last-child) {
    border-right: 1px solid ${staticTheme.colors.txtSecondary};
  }
`;

export const IconWrap = styled.span`
  display: flex;
  justify-content: center;
`;

export const IconLogo = styled(Logo)`
  width: 40px;
  height: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  min-width: 150px;
  max-width: 274px;
  margin: 0 auto;
  padding: 12px 0;

  border-radius: 12px;

  color: ${staticTheme.colors.txtPrimary};

  text-align: center;
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;

  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};

  &:hover,
  &:focus,
  &.active {
    scale: 1.2;
    color: ${staticTheme.colors.accentHover};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
