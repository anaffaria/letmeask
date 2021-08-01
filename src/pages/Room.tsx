import { useParams } from "react-router-dom";
import { Buttom } from "../components/Buttom";
import logoImg from "../assets/images/logo.svg";

import "../styles/room.scss";
import { RoomCode } from "../components/RoomCode";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" className="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala react</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?"></textarea>
          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Buttom type="submit">Enviar pergunta</Buttom>
          </div>
        </form>
      </main>
    </div>
  );
}
