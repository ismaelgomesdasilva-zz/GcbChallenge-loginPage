import * as C from "../../Styles/stylerwelcome";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import backgroundimg from "../../Assets/background.png";
import { useEffect, useState } from "react";
import Router from "next/router";
import Fade from 'react-reveal/Fade';
import {AiOutlineInstagram, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import Flip from 'react-reveal/Flip'
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
  function logout(){
    Router.push('/')
    localStorage.removeItem('Token')
  }

  return (
    <C.ContainerMain>
      <C.Container>
        <Fade left>

        <C.Description>
          <h1>Até onde conseguimos chegar?</h1>
          <p>
            A <strong>Curiosidade</strong> de descobrir essa resposta é a que
            <strong>nos move</strong> no dia-a-dia.
          </p>
          <Image src={logo} width="400px" height="120px" />
        </C.Description>
        </Fade>
      <Flip left>

        <C.FormLabel>
          <h1>Olá <br/>{user.nameCad}</h1>
          <h3>
            Seja bem-vindo a nossa plataforma, é um prazer ter você aqui!
            Ainda estamos em desenvolvimento, porém enquanto isso fique por dentro das nossas redes sociais! 
          </h3>
          <C.aliginIcons>

        <AiOutlineInstagram size={50} color="#ed8530"/>
        <AiFillFacebook size={50} color="#161c8f"/>
        <AiFillYoutube size={50} color='#cf0000'/>
          </C.aliginIcons>
        <C.ButtonPage onClick={logout}>Sair</C.ButtonPage>
        </C.FormLabel>
      </Flip>
        <C.imgBackground>
          <Image src={backgroundimg} width={350} height={600} />
        </C.imgBackground>
      </C.Container>
    </C.ContainerMain>
  );
}
export default welcome;
