import styled from 'styled-components'
export const InputLabel = styled.input`
width: 75%;
border: none;
border-bottom: 0.15rem solid #423b32;
margin-left: 3.2rem;
margin-bottom: 1.5rem;
font-weight: 500;
font-size: 1rem;
line-height: 2.2rem;
color: #423b32;
transition: all 0.3s ease-in-out;
:focus {
  outline: none;
  border: none;
  border-bottom: 0.15rem solid #e8ac5a;
}
@media (max-width: 1000px){
  margin: 0;
  width: 75%;
  background-color: transparent;
  border-bottom: 0.15rem solid #b3b3b3;
  color: #b3b3b3;
  
  :focus{
    outline: none;
  border: none;
  border-bottom: 0.15rem solid #e8ac5a;
  }
}
`;