import * as C from "./styleregister";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import backgroundimg from "../../Assets/background.png"
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
        <C.LabelText>Seu nome</C.LabelText>
          <C.InputLabel type="text" placeholder="Nome" name="text" id="" />
          <C.LabelText>Email</C.LabelText>
          <C.InputLabel type="email" placeholder="email" name="email" id="" />
          <C.LabelText>Senha</C.LabelText>
          <C.InputLabel
          className="input"
            type="password"
            placeholder="password"
            name="password"
            id=""
            />
            <C.CheckboxAling>


          <C.CheckboxButton type = "checkbox" className="checkbox"/>
          <p>
            Eu li e aceito os <Link href="/register">termos de condições</Link>
          </p>
            </C.CheckboxAling>
          <Link href="/register">
            <C.ButtonPage>Cadastrar</C.ButtonPage>
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
