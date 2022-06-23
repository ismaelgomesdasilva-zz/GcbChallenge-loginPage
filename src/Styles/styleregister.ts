import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LabelText = styled.label`
  font-weight: 500;
  font-size: 1.6rem;
  color: #8b6b4a;
  margin-left: 3.1rem;
  @media (max-width: 1000px) {
    margin: 1.5rem auto;
    color: #e8ac5a;
  }
`;

export const CheckboxButton = styled.input`
  margin-right: 0.3rem;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-right: 0.8rem;
    margin-left: 0;
  }
`;
export const CheckboxAling = styled.div`
  display: flex;
  margin: 0.2rem;
`;
export const ContainerMain = styled.section`
  background: linear-gradient(to right, #ffebd6 0, #ffebd6 63%, #423b32 42%);
  @media (max-width: 1000px) {
    background: none;
    background-color: #423b32;
  }
`;

export const imgBackground = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;
`;
