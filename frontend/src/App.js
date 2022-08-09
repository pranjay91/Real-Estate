import { BrowserRouter,Routes,Route } from 'react-router-dom';
import List from './components/list/list';

function App() {
  return (
  <>
     <BrowserRouter>
      <Routes>
       <Route path="/list" element={<List/>}></Route>
      </Routes>
      
     </BrowserRouter>
  </>
     
  );
}

export default App;