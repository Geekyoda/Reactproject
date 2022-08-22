import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="SatyamBlog"/>
    <div className="container my-3">
     <TextForm heading="Enter the Text to analyse below" /> 
    </div>
    </>
   
  );
}

export default App;
