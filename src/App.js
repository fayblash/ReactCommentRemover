import { BrowserRouter as Router, Route } from 'react-router-dom';
import InputScreen from './screens/InputScreen';
import OutputScreen from './screens/OutputScreen';

function App(){
  return (
    <Router>
      <main>
        <Route path="/read-file" component={InputScreen}/>
        <Route path="/output" component={OutputScreen} />
      </main>
    </Router>
  );
};

export default App;
