import './App.css';
import './styles/_styles.scss'
import 'normalize.css/normalize.css';

import DayDisplay from './components/Displays/DayDisplay/DayDisplay';
import DisplayMode from './components/Displays/DisplayMode/DisplayMode';
import Header from './components/Header/Header';
import StatsBar from './components/StatsBar/StatsBar';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="gradient-bar"></div>
      <StatsBar />
      <DisplayMode />
      <DayDisplay />
    </div>
  );
}

export default App;
