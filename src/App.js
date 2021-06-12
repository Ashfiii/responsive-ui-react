import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import SideBar from './components/SideBar/SideBar';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="section">
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
