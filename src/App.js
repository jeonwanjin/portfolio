import { Routes, Route} from 'react-router-dom';
import Main from './components/main';
import Header from './components/header';
import './css/App.css'
import './css/reset.css'

function App() {

  return (
    <div className="App">

        <Header/>
        <Routes>
          <Route exact path='/*' element={<Main/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
