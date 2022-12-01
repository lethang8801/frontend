import {Box, Stack, styled} from "@mui/material";
import logo from '../../images/logo.png'

export const Header = () => {
  return (
    <Wrapper>
      <BoxLogo>
        <ImageStyled src={logo} alt={"logo"}/>
      </BoxLogo>
      <MainMenu>
        <LiStyled><LinkStyled href="#">Home</LinkStyled></LiStyled>
        <LiStyled><LinkStyled href="#">Contract</LinkStyled>
          <SubMenu>
            <li><LinkStyled href="#">Contract list</LinkStyled></li>
            <li><LinkStyled href="#">Create new contract</LinkStyled></li>
            <li><LinkStyled href="#">Approve contract</LinkStyled></li>
            <li><LinkStyled href="#">Approve user</LinkStyled></li>
            <li><LinkStyled href="#">Unblock contract</LinkStyled></li>
            <li><LinkStyled href="#">Unblock user</LinkStyled></li>
            <li><LinkStyled href="#">Reset pin/ password</LinkStyled></li>
          </SubMenu>
        </LiStyled>
        <LiStyled><LinkStyled href="#">Fee management</LinkStyled>
          <SubMenu>
            <LiStyled><LinkStyled href="#">Set fee</LinkStyled></LiStyled>
            <LiStyledTwo><LinkStyled href="#">Transaction fee</LinkStyled>
              <SubMenuTwo>
                <LiStyled><LinkStyled href="#">Product fee</LinkStyled></LiStyled>
                <LiStyled><LinkStyled href="#">Contract fee</LinkStyled></LiStyled>
                <LiStyled><LinkStyled href="#">OTC fee</LinkStyled></LiStyled>
              </SubMenuTwo>
            </LiStyledTwo>
            <LiStyled><LinkStyled href="#">Set fee share</LinkStyled></LiStyled>
          </SubMenu>
        </LiStyled>
        <LiStyled><LinkStyled href="#">Limit management</LinkStyled>
          <SubMenu>
            <li><LinkStyled href="#">Product limit</LinkStyled></li>
            <li><LinkStyled href="#">Contract limit</LinkStyled></li>
            <li><LinkStyled href="#">Wallet balance limit</LinkStyled></li>
          </SubMenu>
        </LiStyled>
        <LiStyled><LinkStyled href="#">Transaction</LinkStyled>
          <SubMenu>
            <li><LinkStyled href="#">Transaction history</LinkStyled></li>
            <li><LinkStyled href="#">Top Up to E-wallet</LinkStyled></li>
            <li><LinkStyled href="#">Withdrawal from E-wallet</LinkStyled></li>
            <li><LinkStyled href="#">Cash back</LinkStyled></li>
            <li><LinkStyled href="#">Payroll</LinkStyled></li>
            <li><LinkStyled href="#">Admin transaction</LinkStyled></li>
            <li><LinkStyled href="#">Reversal transaction</LinkStyled></li>
          </SubMenu>
        </LiStyled>
        <LiStyled><LinkStyled href="#">System</LinkStyled>
          <SubMenu>
            <li><LinkStyled href="#">Group management</LinkStyled></li>
            <li><LinkStyled href="#">User management</LinkStyled></li>
            <li><LinkStyled href="#">System parameter</LinkStyled></li>
          </SubMenu>
        </LiStyled>
        <LiStyled><LinkStyled href="#">Report list</LinkStyled></LiStyled>
      </MainMenu>
    </Wrapper>)
}

const BoxLogo = styled(Box)(
  () => `
    height:100%;
    width:100;
  `
)
const Wrapper = styled(Stack)(
  () => `
    flex-direction: row;
    height: 60px;
    background-color: #26272b;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    z-index: 100;
    width: 100%;
}
  `
)
const ImageStyled = styled("img")(
  () => `
   width:100%;
   height:100%;
   object-fit: cover;
  `
)
const MainMenu = styled('ul')(
  () => `
    list-style-type: none;
    text-align: center;
    display: flex;
    margin: 0;
    padding-inline-start: 0;
    height: 100%;
    align-items: center;
  `
)
const LiStyled = styled('li')(
  () => `
    list-style:none;
    color: #ffffff;
    width: 200px;
    position: relative;
    font-size: 18px;
    &:hover > ul {
       display: block;
    }
  `
)
const LiStyledTwo = styled('li')(
  () => `
    color: #ffffff;
    width: 200px;
    position: relative;
    font-size: 18px;
    &:hover > ul {
       display: block;
    }
  `
)
const LinkStyled = styled('a')(
  () => `
    text-decoration: none;
    color: #ffffff;
    display: block;
    padding: 20px 0;
    &:hover {
      background: #F1F1F1;
      color: #333;
    }
  `
)
const SubMenu = styled('ul')(
  () => `
    display: none;
    position: absolute;
    padding: 0;
    top:60px;
    background: #26272b;
    width: 200px;
  `
)
const SubMenuTwo = styled('ul')(
  () => `
    display: none;
    position: absolute;
    padding: 0;
    background: #26272b;
    width: 200px;
    left: 200px;
    top:20px;
  `
)

