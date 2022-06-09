import * as C from "./stylehome";
import logo from "../Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import backgroundimg from "../Assets/background.png"
export default function Home() {
  return (
    <C.ContainerMain>
      <C.Container>
        <C.Description>
          <h1>Até onde conseguimos chegar?</h1>
          <p>
            A <strong>Curiosidade</strong> de descobrir essa resposta é a que{" "}
            <strong>nos move</strong> no dia-a-dia.
          </p>
          <Image src={logo} width="400px" height="120px" />
        </C.Description>
        

        <C.FormLabel>
        
          <C.LabelText>Email</C.LabelText>
          <C.InputLabel type="email" placeholder="Digite seu email" name="email" id="" />
          <C.LabelText>Senha</C.LabelText>
          <C.InputLabel
          className="input"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            id=""
            />
          <p>
            Não tem cadastro? <Link href="/register">Cadastre-se agora!</Link>
          </p>
          <Link href="/">
            <C.ButtonPage>Entrar</C.ButtonPage>
          </Link>
        </C.FormLabel>
        <C.imgBackground>

<Image src={backgroundimg} width={
350} height={600} />
  </C.imgBackground>
      </C.Container>

           
      
    </C.ContainerMain>
  );
}
