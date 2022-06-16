import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
 

  
  h3 {
    width: 25rem;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 10px auto;
    text-align: center;
    color: #423b32;
    
  }
  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    
    background: transparent;
    width: 100vw;
    height: 100vh;
  
  }
h1{

    font-weight: 600;
    font-size: 2rem;
    margin: 10px auto;
    
    color: #e8ac5a;
    text-align: center;
}

@media (max-width: 1100px) {
  h3{

    color:#ffffff;
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
  
`;
export const LabelText = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #8b6b4a;
  margin-left: 50px;
  @media (max-width: 1000px){
    margin: 1.5rem auto;
    color:#e8ac5a;
    
  }
`;

export const Description = styled.div`
  width: 600px;
  margin-left: 100px;
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
    margin-bottom: 80px;
  }
  @media (max-width: 1100px) {
    display: none;
  
  }
`;

export const ButtonPage = styled.button`
  width: 9.3rem;
  height: 3.1rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.2rem;
  background: #423b32;
  border-radius: 0.6rem;
  text-align: center;

 margin: 1rem auto;
  color: #f5ca9c;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  :hover {
    background-color: #f5ca9c;
    color: #423b32;
    border: none;
  }
  @media (max-width: 1000px){
    margin:1rem auto;
    background-color: #fff;
    color: #423b32;
  }
`;

export const CheckboxButton = styled.input`
 background-color: #423b32;
`
export const  ContainerMain = styled.section`
background: linear-gradient(to right, #FFEBD6 0, #FFEBD6  63%, #423B32 42%);
@media (max-width: 1100px) {
  background: none;
    background-color: #423B32;
  
  }
`

export const imgBackground = styled.div`
position: absolute;
right: 0;
`
export const aliginIcons = styled.div`
display: flex;
gap: 1rem;
margin: 10px auto;
cursor: pointer;
`