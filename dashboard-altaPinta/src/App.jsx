import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

import './App.css'
import logo from "/images/logo.png";

function App() {
  return (

    <div id="wrapper">
      <header>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </header>
      {/* <!-- Sidebar --> */}
      <SideBar />
      
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <ContentWrapper />
      {/* <!-- End of Content Wrapper --> */}


    </div>
  )
}

export default App
