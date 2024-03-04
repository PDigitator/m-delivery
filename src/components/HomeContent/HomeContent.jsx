import * as s from "./HomeContent.styled";

const HomeContent = () => {
  return (
    <>
      <s.TopWrap>
        {/* <s.IconWrap>
          <s.IconLogo />
        </s.IconWrap> */}
        <s.Title>ABC medicine</s.Title>
        <s.Slogan>Healing starts here: Your trusted pharmacy.</s.Slogan>
      </s.TopWrap>

      <s.StyledNavLink to="/shop">Welcome!</s.StyledNavLink>

      {/* <s.List>
        <s.Item>
          <s.Thumb>
            <s.IconOrder />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Registration online</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconCredit />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Сashless payment</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconTime />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Punctuality</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconApproved />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Additional insurance</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconSupport />
          </s.Thumb>
          <s.Info>
            <s.InfoText>24/7 support</s.InfoText>
          </s.Info>
        </s.Item>
      </s.List> */}
    </>
  );
};

export default HomeContent;
