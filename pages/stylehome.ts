import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 350px;
  background-image: url("background.png");
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
`;
export const FormLabel = styled.div`
  width: 550px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #423b32;
    margin-left: 50px;
    margin-top: -20px;
  }
  a {
    cursor: pointer;
    color: #423b32;
  }







`;

export const InputLabel = styled.input`
  width: 75%;
  border: none;
  border-bottom: 2px solid #423b32;
  margin-left: 50px;
  margin-bottom: 50px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  color: #423b32;
  
`;
export const LabelText = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  text-align: center;
  color: #8b6b4a;
  margin-left: 50px;
`;

export const Description = styled.div`
  width: 600px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    color: #423b32;

    width: 600px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;

    color: #423b32;
    width: 490px;
  }
`;
export const backgroundimg = styled.div`
  position: absolute;

  left: 1450px;
`;
export const ButtonPage = styled.button`
width: 200px;
height: 65px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24.1584px;
line-height: 36px;
/* identical to box height */
background: #423B32;
border-radius: 10px;
text-align: center;
margin-left: 50px;
margin-top: 80px;
color: #F5CA9C;
`