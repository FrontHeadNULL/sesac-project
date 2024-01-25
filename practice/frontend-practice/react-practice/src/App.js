import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Button from './Button';

function Button(props) {
  return <button onClick={props.onTalk}>Click me!</button>;
}

export default Button;


function Talker(){
  function handleTalk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  return <Button onTalk={handleTalk} />;
}

export default Talker;

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

export default Header;


function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={"/read/" + t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

export default Nav;


function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}


export default Article;

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        alert('Header')
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id)
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
      <Talker></Talker>
    </div>
  );
}

export default App;
