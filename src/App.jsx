import { BrowserRouter as Router } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import { Link } from '@mui/material';

function App() {
  return (
    <Router>
    <Link path="/notes">
      <Notes />
     </Link>
        <Link path="/create">
          <Create />
        </Link>
    </Router>
    
  );
}

export default App;