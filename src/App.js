

import './App.css';
import Navbar from './components/Navbar';
import Changer from './components/Changer';
import CaseifyFooter from './components/CaseifyFooter';
import ContactFeedback from './components/ContactFeedback';
import Security from './components/Security';



function App() {
  return (
 <>
 

<div class="navbar">
{/* <img src={myLogo} alt="logo" /> */}
  
 <Navbar/>
</div>
 <div className='container my-5'>
  <Changer/>
 </div>
<div
  className="container"
  style={{
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    borderRadius: "25px",
    overflow: "hidden"
  }}
>
  <div className="card">
    <ContactFeedback />
  </div>
</div>
<div class="container my-5"
  style={{
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    borderRadius: "25px",
    overflow: "hidden"
  }}
>
  <Security/>
</div>
  
  
 <CaseifyFooter/>
 
 </>
  );
}

export default App;
