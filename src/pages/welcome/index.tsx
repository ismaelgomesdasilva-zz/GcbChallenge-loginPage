import * as C from "../../Styles/stylerwelcome";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import backgroundimg from "../../Assets/background.png";
import { useEffect, useState } from "react";
import Router from "next/router";

interface User {
  nameCad: string;
  emailCad: string;
  passwordCad: string;
}

function welcome() {
  const [user, setUser] = useState<User>({} as User);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("listUser")));
    const token = localStorage.getItem('Token')
    if(!token){
      Router.push('/')
    }
  }, []);

  return (
    <C.ContainerMain>
      <C.Container>
        <C.Description>
          <h1>Até onde conseguimos chegar?</h1>
          <p>
            A <strong>Curiosidade</strong> de descobrir essa resposta é a que
            <strong>nos move</strong> no dia-a-dia.
          </p>
          <Image src={logo} width="400px" height="120px" />
        </C.Description>

        <C.FormLabel>
          <h1>Olá {user.nameCad}</h1>
          <h2>
            Seja bem-vindo a nossa plataforma, é um prazer ter você aqui!
            estamos em fase de teste e logo logo será implementado as boas
            vindas formais!
          </h2>
        </C.FormLabel>
        <C.imgBackground>
          <Image src={backgroundimg} width={350} height={600} />
        </C.imgBackground>
      </C.Container>
    </C.ContainerMain>
  );
}
export default welcome;
