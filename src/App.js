import logo from './logo.svg';
import './App.css';



function ReactLogo(){
  return(
    <>
    <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}

 function ReactBenefits(){
  return(
    <>
    <h1>Benefits of using react</h1>
    <li>Component-based architecture</li>
      <li>Virtual DOM for efficient updates</li>
    <li>Rich ecosystem and community</li>
    <li>Cross-platform development</li>
    <li>Strong community support</li>
    
    </>
  )
}

function Button(){
  return(
    <button>Get Started...</button>
  )
}



function App() {
  return (
    <div className="App">
      
        
        <ReactLogo/>
        <ReactBenefits/>
        <Button/>
      
    </div>
  );
}

export default App;
