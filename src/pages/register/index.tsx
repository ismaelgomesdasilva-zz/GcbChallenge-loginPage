import * as C from "../../Styles/styleregister";
import Fade from 'react-reveal/Fade';
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
//Components
import Button from "../../Components/Button";
import Description from "../../Components/Description";
import Input from "../../Components/Input";
import Form from "../../Components/FormLabel";
import LogoImageSecundary from "../../Components/LogoSecundary";
import BackgroundImg from "../../Components/LogoBackground";


function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

  

  function submitForm() {
    let allUser = JSON.parse(localStorage.getItem('listUser' ) || '[]')
    allUser.push({
      nameCad: name,
      emailCad: email,
      passwordCad: password,
   }) 
    localStorage.setItem("listUser", JSON.stringify(allUser));
    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      
      toast.error('Informe um email valido')
    }
    if (!PASSWORD_REGEX.test(String(password))) {
      toast.error("Senha deve possuir letra maiscula, minuscula, caracteres especiais e numeros.");
    }
    if (!checkbox) {
      toast.error("Verifique e aceite os termos de condições");
    } 
    else {
      Router.push("/");
    }
  }

  return (
    
    
    <C.ContainerMain>
      <C.Container>
      <Fade left>
        <Description/>
        </Fade>
        <Fade right>
        <Form>
          <LogoImageSecundary src='/gcb-mobile.svg' width={400} height={120} alt="imagem da gcbola"/>
          <C.LabelText>Seu nome</C.LabelText>
          <Input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            
            Onchange={(e) => setName(e.target.value)}
          />
          <C.LabelText>Email</C.LabelText>
          <Input
            type="email"
            placeholder="Digite seu email"
            name="email"
            
            Onchange={(e) => setEmail(e.target.value)}
          />
          <C.LabelText>Senha</C.LabelText>
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            Onchange={(e) => setPassword(e.target.value)}
          />
          <C.CheckboxAling>
            <C.CheckboxButton
              type="checkbox"
              className="checkbox"
              onChange={(e) => setCheckbox(e.target.value)}
            />
            <p>
              Eu li e aceito os <Link href="/">termos de condições</Link>
            </p>
          </C.CheckboxAling>
          <Button title='Cadastrar'Onclick={submitForm}/>
        </Form>
        </Fade>
        <BackgroundImg src='/backgroundlogo.svg' width={350} height={600} alt='Background gcb'/>
      </C.Container>
    </C.ContainerMain>
  );
}
export default register;
