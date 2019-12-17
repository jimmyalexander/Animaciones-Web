import React from 'react';
import { Link } from "react-router-dom";
import './Styles/Pagina.css';
class Principal extends React.Component {

  state = {
    loading: true,
    error: null, 
    data: []
  };

componentDidMount(){
  this.apifetch();
}
apifetch = () => {
  fetch("https://randomuser.me/api/")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data.results[0].email);
      this.setState({
        loading: false,
        data: data.results
      });
    })
    .catch(error => {
      console.log(error);
      this.setState({
        loading: false,
        error: error
      });
    });
};


render(){
  console.log('hola')
console.log(this.state.data)
  return(

  <div>
          {
            this.state.data.map((item, index)=>{
              return(
               


                <div key={index}>
                <div>
                  <img className="foto-perfil" src={item.picture.large}></img>
                  <h1>{item.name.title} {item.name.first} {item.name.last}</h1>
                </div>
                <React.Fragment>
                <div>
                  <button>Seguir</button>
                  <button>Agregar a amigos</button>
                  <Link className="btn btn-info" to="/informacion" >
                    Información
                  </Link>
                </div>
                </React.Fragment>
                </div>
              
              )
            })
          }
  </div> 
 
  )
}
}
export default Principal;
