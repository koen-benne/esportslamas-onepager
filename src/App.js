import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TeamBlock from './components/TeamBlock';
import Insights from './components/Insights';
import TargetQuestionSection from './components/TargetQuestionSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <TeamBlock/>
      <Insights/>
      <TargetQuestionSection/>
    </div>
  );
}

export default App;
