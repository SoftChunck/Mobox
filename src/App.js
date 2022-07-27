import './App.css';
import {Footer,Games,Metafund,Milstones,MomoboxChain,MomoboxDag,Momoverse,Navbar,News,Vision} from './Containers';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='header'></div>
      <Milstones></Milstones>
      <Vision></Vision>
      <Momoverse></Momoverse>      
      <MomoboxDag></MomoboxDag>
      <MomoboxChain></MomoboxChain>
      <Metafund></Metafund>
      <Games></Games>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
