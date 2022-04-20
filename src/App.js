import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
<Router>
   <Header/>
  <main className = "py-3">
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </main>
</Router>
   
    
  );
}

export default App;
