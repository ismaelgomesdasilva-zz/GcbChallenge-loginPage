import * as C from "../Styles/stylehome";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";
import backgroundimg from "../Assets/background.png";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

// Components
import Button from "../Components/Button";
import Description from "../Components/Description";
import Input from "../Components/Input";
import Form from "../Components/FormLabel";
import LogoImageSecundary from "../Components/LogoSecundary";
import BackgroundImg from "../Components/LogoBackground";


function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginCheck() {
    const users = JSON.parse(localStorage.getItem("listUser"));
    if (userEmail === "") {
      toast.info("Preencha os campos");
      return;
    }
    if (password === "") {
      toast.info("Preencha os campos");
      return;
    }
    const { emailCad } = users.find((user) => user.emailCad === userEmail);
    const { passwordCad } = users.find((user) => user.passwordCad === password);
    console.log(userEmail, password);

    if (userEmail != emailCad) {
      toast.error("email nao cadastrado");
    }

    if (password != passwordCad) {
      toast.error("senha incorreta");
    }
    if (userEmail === emailCad && password === passwordCad) {
      toast.success("Usuario logado");
      localStorage.setItem("Token", "1320897");
      Router.push("/welcome");
    }
  }
  return (
    <C.ContainerMain>
      <C.Container>
        <Fade left>
          <Description />
        </Fade>
        <Fade right>
          <Form>
            <LogoImageSecundary src='/gcb-mobile.svg' width={400} height={120} alt="imagem da gcbola"/>
            <C.LabelText>Email</C.LabelText>
            <Input
              type="email"
              placeholder="Digite seu email"
              name="email"
              Onchange={(e) => setUserEmail(e.target.value)}
            />
            <C.LabelText>Senha</C.LabelText>
            <Input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              Onchange={(e) => setPassword(e.target.value)}
            />
            <p>
              Não tem cadastro? <Link href="/register">Cadastre-se agora!</Link>
            </p>
            <Button
              BgColor="#423b32"
              Color="#f5ca9c"
              Onclick={loginCheck}
              title="Entrar"
            />
          </Form>
        </Fade>
        <BackgroundImg src='/backgroundlogo.svg' width={350} height={600} alt='Background gcb'/>
      </C.Container>
    </C.ContainerMain>
  );
}
export default Home;
