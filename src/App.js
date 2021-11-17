import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.acumulador = this.acumulador.bind(this)
    this.state = {
      contador : 0
    }
  }

  acumulador = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }
  render () {

    // let persona = { nombre: 'Luis', apellido: 'Gonzalez'}
    // const { nombre, apellido } = persona

    return (
      <header class="container justify-content-around contenedor">
        <h1 className = 'text-danger'>Paisajes Argentinos</h1>
        <button onClick = {this.acumulador} className="btn btn-danger">Haz click aqui</button>
        <h2>{this.state.contador}</h2>
      </header>
    )
  }
}

// function App() {
//   return (
//         <div>
//           <h1>Hola Mundo</h1>
//           <p>ddfdgdg</p>
//         </div>
//         )
        
// }

export default App;
