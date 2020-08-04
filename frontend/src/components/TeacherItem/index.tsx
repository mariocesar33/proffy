import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeachertItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/24758286?s=460&u=d3b6fcc00916078ae870fd88b802b006b7c3ac72&v=4" alt="Mário César"/>
            <div>
              <strong>Mário César Silva</strong>
              <span>Quimica</span>
            </div>
          </header>
          <p>Entusiasta das melhores tecnologias de química avançada. 
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preco/hora
              <strong>500$00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeachertItem;