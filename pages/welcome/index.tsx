import * as C from "./stylerwelcome";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import backgroundimg from "../../Assets/background.png"
 function welcome() {
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
       <h1>Seja bem-vindo a nossa plataforma, é um prazer ter você aqui! estamos em fase de teste e logo logo será implementado as boas vindas formais! </h1>
        </C.FormLabel>
        <C.imgBackground>

      <Image src={backgroundimg} width={
350} height={600} />
        </C.imgBackground>
      </C.Container>

           
    </C.ContainerMain>
  );
}
export default welcome