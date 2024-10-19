import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

const App = () => {
  const [mode, setMode] =useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  function modeChange() {
    if(mode===false){
        setMode(true);
    }
    else{
        setMode(false);
    }
}

  function toggleSidebar(){
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`${mode ? 'bg-slate-600' : 'bg-white'}`}>
      <Router>
        <Header toggleSidebar={toggleSidebar} mode={mode} modeChange={modeChange} />

        <Routes>
          <Route 
            path='/search/:searchTerm' 
            element={
              <div>
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <SearchPage />
              </div>
            } 
          />

          <Route 
            path='/' 
            element={
              <div className='flex'>
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <RecommendedVideos isSidebarVisible={isSidebarVisible}/>
              </div>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
