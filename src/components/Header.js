import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from "@material-ui/icons";

const Header = () => {
 
  const [burgerStatus,setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="https://www.tesla.com/">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu className="menu">
        <a href="https://www.tesla.com/">Model S</a>
        <a href="https://www.tesla.com/">Model 3</a>
        <a href="https://www.tesla.com/">Model X</a>
        <a href="https://www.tesla.com/">Model Y</a>
        <a href="https://www.tesla.com/">Solar Panels</a>
        <a href="https://www.tesla.com/">Solar Roof</a>
      </Menu>

      <RightMenu>
        <InsideRightMenu>
          <a href="https://www.tesla.com/">Shop</a>
          <a href="https://www.tesla.com/">Account</a>
        </InsideRightMenu>
      
        {/* <CustomMenu onClick={()=> setBurgerStatus(true)}/> */}
        <CustomMenu >
          <a onClick={()=> setBurgerStatus(true)}>Menu</a>
        </CustomMenu>

      </RightMenu>

        <BurgerNav show={burgerStatus} >

          <CloseWrapper>

            <CustomClose onClick={()=> setBurgerStatus(false)} />

          </CloseWrapper>
          
          <li><a href="https://www.tesla.com/">Model S</a></li>
          <li><a href="https://www.tesla.com/">Model 3</a></li>
          <li><a href="https://www.tesla.com/">Model X</a></li>
          <li><a href="https://www.tesla.com/">Model Y</a></li>
          <li><a href="https://www.tesla.com/">Solar Roof</a></li>
          <li><a href="https://www.tesla.com/">Solar Panels</a></li>
          <li><a href="https://www.tesla.com/">Existing inventory</a></li>
          <li><a href="https://www.tesla.com/">Used inventory</a></li>
          <li><a href="https://www.tesla.com/">Trad-In</a></li>
          <li><a href="https://www.tesla.com/">Test Drive</a></li>
          <li><a href="https://www.tesla.com/">Insurance</a></li>
          <li><a href="https://www.tesla.com/">Powerwall</a></li>
          <li><a href="https://www.tesla.com/">Powerwall</a></li>
        </BurgerNav>




    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index:1;
`;

const Menu = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
const RightMenu = styled.div`

  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    // padding: 0 10px;
    margin: 0 20px ;
    text-decoration: none;
  }
 

`;

const InsideRightMenu = styled.div`
  @media (max-width: 900px) {
    a {
      display: none;
    }
  }
`;

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;
// `;
const CustomMenu = styled.div`

  cursor: pointer;
  @media (max-width: 900px) {
    
    align-items: flex-end;
   
   a{ 
     background:rgba(4,35, 103,0.1);
    // background: #8888;
    border-radius:3px;
     padding:7px;
    
    opacity:0.9;
  }
}
`;

const BurgerNav = styled.div`

position: fixed;
right: 0;
top: 0;
bottom: 0;
background-color: #fff;
width: 300px;
z-index:100;
list-style: none;
padding:20px;
display: flex;
justify-content:flex-start;
flex-direction: column;
align-items: flex-start;

 transform: ${props => props.show ? 'TranslateX(0)': 'TranslateX(100%)'};

 transition: transform 0.4s ease-in-out ;


li{
  padding:15px;
  border-bottom: 1px solid #888;
  // width: 100%;
}

a{
  text-decoration: none;
  font-weight: 600;
}


`

const CustomClose = styled(CloseIcon)`
cursor: pointer;

`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
width:100%;



`
const burgerStatus = styled.div`

`