import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Page
            id={'pageId1'} />
      <Page
            id={'pageId2'} />
      <Page
            id={'pageId3'} />
           

    </div>
  );
}

export default App;
