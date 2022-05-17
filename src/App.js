import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TeamBlock from './components/TeamBlock';
import TargetQuestionSection from './components/TargetQuestionSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <TeamBlock/>
      <TargetQuestionSection/>
    </div>
  );
}

export default App;
