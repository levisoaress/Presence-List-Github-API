import React, { useState, useEffect } from 'react';
import './App.css';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import twitter from './twitter.png'
import Card from '../Card/card';

export default function App() {

  const [user, setUser] = useState({ name: '', avatar: '', bio: '', local: '' });
  const [name, setName] = useState();
  const [alunos, setAlunos] = useState([]);//Armazenar os alunos
  const tempo = {time: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})};
const [nota, setNota] = useState();

  function handleAddAluno(){
    const novoAluno = {
      name: name,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      nota: nota
  };
  setAlunos(prevState => [...prevState, novoAluno]);
  }


  useEffect(() => {
    fetch()
  })


  useEffect(() => {
    fetch("https://api.github.com/users/levisoaress").
      then((response) => response.json()).
      then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          local: data.location
        });
      });
  }, [])

  return (

    <div className='pai'>
      <div className="container-app">

        {/*===============PERFIL===========================*/}
        <div className='perfil'>

          <div className='description'>
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <p>{user.local}</p>
            <p>{tempo.time}</p>
          </div>

          <div className='more'>
            <img id='foto' src={user.avatar} alt='avatar'></img>
            <div className='redes'>
              <a href='https://www.linkedin.com/in/joão-levi-de-alencar-soares-49a864178/'><img id='linkedin' src={linkedin} alt='linkedin'></img></a>
              <a href='https://www.instagram.com/jlevialencar/'><img id='instagram' src={instagram} alt='instagram'></img></a>
              <a href='https://twitter.com/olevialencar'><img id='twitter' src={twitter} alt='twitter'></img></a>
            </div>

          </div>

        </div>
        {/*===============PERFIL===========================*/}

        {/*===============INPUT/BOTAO===========================*/}
        <div className='input-botao'>
          <div className='adiciona'>
            <input type='text' onChange={e => setName(e.target.value)} placeholder='Digite um nome'></input>
            <input type='nummber' onChange={e => setNota(e.target.value)} placeholder='Digite a nota do aluno'></input>
            <button onClick={handleAddAluno}>Adicionar</button>
          </div>
          
          <div className='nome-nota-horario'>
          <p>Nome</p>
          <p>Nota</p>
          <p>Horário</p>
          </div>

        </div>
        {/*===============INPUT/BOTAO===========================*/}

      </div>

      <div className='Components'>
        {
          alunos.map(aluno => <Card name={aluno.name} time={aluno.time} nota={aluno.nota}/>)
          
        }
      </div>

    </div>
  );
}


