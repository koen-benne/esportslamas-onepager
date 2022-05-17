import './App.css';
import Header from './components/Header';
import TeamBlock from './components/TeamBlock';
import Insights from './components/Insights';
import TargetQuestionSection from './components/TargetQuestion/TargetQuestionSection';
import Persona from './components/Persona';

function App() {
  return (
    <div className="App">
      <Header/>
      <TeamBlock/>
      <Persona/>
      <Insights/>
      <TargetQuestionSection/>
    </div>
  );
}

export default App;
