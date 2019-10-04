import React, {Component} from 'react';


class Guitarras extends Component {
    render(){
      
        return(
            <section id="guitarras" className="guitarras contenedor"> 
      <h2>Nuestra guitarras</h2>
      {
         this.props.guitarras.map((guitarra, index)=>{
            return(
                <article className="guitarra" key={index}>
                <img className="guitarra-image " src={guitarra.image}  alt={guitarra.alt} width="350"/>
                <div className="contenedor-guitarra">
                  <h3 className="guitarra-title">{guitarra.name}</h3>
                  <ol>
                      {guitarra.features.map((feature, index)=>{
                            return(
                                <li key={index}>{feature}</li>
                            )
                   
                      })}
                  
                  </ol>
                </div>
              </article>
            )
          })
      }
      <div className="video-demo-contenedor">
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <video src="video/320x240.ogg"></video>

      <article className="guitarra b">
        <img className="izquierda" src={this.props.classic} alt="Guitarra Invie Classic" width="350"/>
        <div className="contenedor-guitarra-b">
          <h3 className="title-b">Invie Classic</h3>
          <ol>
            <li>Estilo vintage</li>
            <li>Liviana</li>
            <li>Inicia tu camino como Rockstar</li>
          </ol>
        </div>
      </article>
    </section>
        );
    }
}

export default Guitarras;