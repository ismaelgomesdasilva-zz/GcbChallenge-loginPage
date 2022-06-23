import * as C from "../../Styles/stylerwelcome";
import { useEffect, useState } from "react";
import Router from "next/router";
import Fade from "react-reveal/Fade";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import Flip from "react-reveal/Flip";
// components
import Button from "../../Components/Button";
import Description from "../../Components/Description";
import Form from "../../Components/FormLabel";
import BackgroundImg from "../../Components/LogoBackground";
interface User {
  nameCad: string;
  emailCad: string;
  passwordCad: string;
}

function welcome() {
  const [user, setUser] = useState<User>({} as User);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("listUser")));
    const token = localStorage.getItem("Token");
    if (!token) {
      Router.push("/");
    }
  }, []);
  function logout() {
    Router.push("/");
    localStorage.removeItem("Token");
  }

  return (
    <C.ContainerMain>
      <C.Container>
        <Fade left>
          <Description />
        </Fade>
        <Flip left>
          <Form>
            <div>
              <h1>Olá</h1>
              <h3>
                Seja bem-vindo a nossa plataforma, é um prazer ter você aqui!
                Ainda estamos em desenvolvimento, porém enquanto isso fique por
                dentro das nossas redes sociais!
              </h3>

              <C.aliginIcons>
                <AiOutlineInstagram size={50} color="#ed8530" />
                <AiFillFacebook size={50} color="#161c8f" />
                <AiFillYoutube size={50} color="#cf0000" />
              </C.aliginIcons>
            </div>
            <Button Onclick={logout} title="Sair" />
          </Form>
        </Flip>

        <BackgroundImg
          src="/backgroundlogo.svg"
          width={350}
          height={600}
          alt="touro da gcb"
        />
      </C.Container>
    </C.ContainerMain>
  );
}
export default welcome;
