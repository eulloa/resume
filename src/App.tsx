import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './About';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { ParticlesComponent } from './Particles';
import { Skills } from './Skills';

export default function App() {
  return (
    <Router>
      <ParticlesComponent />
      <Nav />
      <Switch>
        <Route exact path="/resume" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
      </Switch>
      <Footer />
    </Router>
  );
}
