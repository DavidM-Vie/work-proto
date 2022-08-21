import './App.css';
import './styles/_styles.scss'
import 'normalize.css/normalize.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="gradient-bar"></div>
    </div>
  );
}

export default App;
