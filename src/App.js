import React, {Component} from 'react';
import './style.css';
//http://www.sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

      constructor(props){
          super(props);
          this.state = {
            nutri:[]
          };
      }
      componentDidMount(){
        let url = 'http://www.sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((r)=> r.json())
        .then((json)=> {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            console.log(json);
        })
      }
      render(){
        return(
          <div className="container">
              {this.state.nutri.map((item)=>{
                    return(
                      <article>
                          <strong className="titulo">{item.titulo}</strong>
                          <img className="imagem" src={item.capa}/>
                          <p className="subtitulo">{item.subtitulo}</p>
                          <a className="botao" href="#">Acessar</a>
                      </article>
                    );
              })}
          </div>
        );
      }
}


export default App;
