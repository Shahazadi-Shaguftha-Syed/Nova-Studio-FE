import Landing from './components/Landing';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main>
      <Landing />
      <Services />
      <Portfolio />
      <Stats/>
      <Contact/>
    </main>
  );
}