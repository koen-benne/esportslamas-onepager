import './App.css';
import Header from './components/Header';
import Insights from './components/Insights';
import TargetQuestionSection from './components/TargetQuestion/TargetQuestionSection';
import Persona from './components/Persona';
import Hero from './components/Hero/Hero'
import Concepts from './components/concepts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
      <TargetQuestionSection/>
      <Persona/>
      <Insights/>
      <Concepts/>
      <Footer/>
    </div>
  );
}

export default App;
