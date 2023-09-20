import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <button className="jumbotron" ><img src={logo} className="logo" alt="Vite logo" /></button>
      </div>
      <h3>Categories Management</h3>
      <p><code>Isto é uma avaliação</code></p>
      <div>
      </div>
      <p className="read-the-docs">
        Click on the Killwangy logo to see the Categories Management
      </p>
    </>
  )
}

export default App;