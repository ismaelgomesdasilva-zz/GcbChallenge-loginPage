import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 350px;

`;
export const FormLabel = styled.div`
  width: 460px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: -400px;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 22px;
    text-align: center;
    color: #423b32;
    margin-left: 50px;
    margin-top: -10px;
  }
  a {
    cursor: pointer;
    color: #423b32;
    transition: all 0.3s ease-in-out;
    :hover{
     color: #e8ac5a
    }
  }







`;

export const InputLabel = styled.input`
  width: 75%;
  border: none;
  border-bottom: 2px solid #423b32;
  margin-left: 50px;
  margin-bottom: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 36px;
  color: #423b32;
  transition: all 0.3s ease-in-out;
  :focus{
    outline: none;
    border: none;
  border-bottom: 2px solid #e8ac5a;
  }
  
`;
export const LabelText = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #8b6b4a;
  margin-left: 50px;
`;

export const Description = styled.div`
  width: 600px;
  margin-left: 50px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #423b32;
    margin-bottom: 50px;
    width: 500px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;

    color: #423b32;
    width: 400px;
    margin-bottom: 50px;
  }
`;
export const backgroundimg = styled.div`
  position: absolute;

  left: 1450px;
`;
export const ButtonPage = styled.button`
width: 150px;
height: 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 36px;
/* identical to box height */
background: #423B32;
border-radius: 10px;
text-align: center;
margin-left: 50px;
margin-top: 40px;
color: #F5CA9C;
`
export const imgBackground = styled.div`
position: absolute;
right: 0;
`
export const  ContainerMain = styled.section`
background: linear-gradient(to right, #FFEBD6 0, #FFEBD6  63%, #423B32 42%);
 
`