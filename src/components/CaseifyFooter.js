
import React, { useState } from 'react';
import whatsappIcon from "../Images/whatsapp.jpeg";
// import Security from './Security';
// import './CaseifyFooter.css'; // Optional: for additional custom styles

const CaseifyFooter = () => {
  // State for dropdown toggle (mobile friendly)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Inline styles object for footer (as requested: inline CSS in React)
  const footerStyles = {
    background: 'linear-gradient(105deg, #0f172a 0%, #111827 100%)',
    color: '#e2e8f0',
    padding: '1.5rem 1.5rem 1rem 1.5rem',
    marginTop: '0',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    fontFamily: "'Inter', sans-serif",
    boxShadow: '0 -10px 25px -10px rgba(0,0,0,0.2)'
  };

  const linkHoverStyle = {
    textDecoration: 'none',
    color: '#f1f5f9',
    fontWeight: 500,
    transition: '0.2s',
    fontSize: '1rem',
    padding: '0.4rem 0',
    display: 'inline-block',
    cursor: 'pointer'
  };

  const dropdownButtonStyle = {
    background: 'rgba(255,255,255,0.08)',
    color: '#f1f5f9',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '40px',
    padding: '0.45rem 1.2rem',
    fontWeight: 500,
    fontSize: '0.95rem',
    backdropFilter: 'blur(2px)',
    transition: 'all 0.2s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    bottom: '100%',
    right: 0,
    marginBottom: '0.5rem',
    background: '#1e293b',
    borderRadius: '1rem',
    border: 'none',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    minWidth: '200px',
    zIndex: 1000,
    overflow: 'hidden'
  };

  const dropdownItemStyle = {
    padding: '0.6rem 1.2rem',
    color: '#e2e8f0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: '0.2s',
    cursor: 'pointer'
  };

  // Handlers for interactive feedback (JS k liye)
  const handleHomeClick = () => {
    alert('🏠 Welcome to Caseify Home! Explore our premium collection.');
    // You can replace with actual navigation: window.location.href = '/home'
  };

  const handleAboutClick = () => {
    alert('📖 About Caseify: Crafting elegance and protection since 2020.');
  };

  const handleDropdownItemClick = (itemName) => {
    alert(`✨ ${itemName} - Coming soon! Stay tuned.`);
    setDropdownOpen(false);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside (optional)
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <footer style={footerStyles} className="footer mt-5 p-5 ">
      
  <div className="container-fluid px-0 px-md-3">
  <div className="row justify-content-between align-items-start g-3">

    {/* Left side: Brand */}
    <div className="col-md-4 col-sm-12">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{
          margin: 0,
          fontWeight: 800,
          fontSize: '2rem',
          letterSpacing: '-0.3px',
          background: 'linear-gradient(120deg, #ffffff, #cbd5e6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Caseify
        </h1>

        <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: 0, maxWidth: '260px' }}>
          <i className="bi bi-shield-check"></i> artisan cases, modern elegance.
        </p>
      </div>
    </div>


    {/* Right side */}
    <div className="col-md-8 col-sm-12">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        gap: '2rem',
        alignItems: 'center'
      }}>

      
      

        {/* About */}
      
   <div>
                <div 
                  style={linkHoverStyle}
                  onClick={handleHomeClick}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5c9ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#f1f5f9'}
                >
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </div>
              </div>
              
              {/* About link with JS */}
              <div>
                <div 
                  style={linkHoverStyle}
                  onClick={handleAboutClick}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5c9ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#f1f5f9'}
                >
                  <i className="bi bi-info-circle me-1"></i> About
                </div>
              </div>
        {/* Quick Menu */}
        {/* <div>Quick menu</div> */}
        <div className="dropdown-container" style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  style={dropdownButtonStyle}
                  onClick={toggleDropdown}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  <i className="bi bi-three-dots-vertical"></i> Quick menu
                  <i className={`bi ${dropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} style={{ fontSize: '0.8rem' }}></i>
                </button>
                
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div style={dropdownMenuStyle}>
                    <div 
                      style={dropdownItemStyle}
                      onClick={() => handleDropdownItemClick('Shop Cases')}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#334155'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <i className="bi bi-bag-check me-2"></i> Shop Cases
                    </div>
                    <div 
                      style={dropdownItemStyle}
                      onClick={() => handleDropdownItemClick('New Arrivals')}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#334155'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <i className="bi bi-star me-2"></i> New Arrivals
                    </div>
                    <div 
                      style={dropdownItemStyle}
                      onClick={() => handleDropdownItemClick('Support')}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#334155'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <i className="bi bi-headset me-2"></i> Support
                    </div>
                    <div style={{ height: '1px', background: '#334155', margin: '0.3rem 0' }}></div>
                    <div 
                      style={dropdownItemStyle}
                      onClick={() => handleDropdownItemClick('Offers')}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#334155'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <i className="bi bi-gift me-2"></i> Offers
                    </div>
                  </div>
                )}
              </div>

      </div>

    
      <div
  style={{
    marginTop: "1.2rem",
    paddingTop: "1rem",
    borderTop: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
  }}
>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "2px solid #38bdf8",
    }}
  />

  <h3 style={{ margin: 0, color: "#38bdf8" }}>Muhammad Asad</h3>

  <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
    Frontend Developer (React)
  </p>

  {/* Contact Info */}
  <div style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "1.6" }}>
      <p style={{ margin: 0 }}>📧: m.asadkhan515145@gmail.com</p>
    <p style={{ margin: 0 }}>📞 +92 345 8383374</p>
    <p style={{ margin: 0 }}>📱: +92 345 8383374</p>
  
  </div>
</div>
 


   
</div>
          
          
      
          <div className="col-md-7 col-sm-12">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '2rem', alignItems: 'center' }}>
            </div>



{/* devaloper section end */}

            {/* copyright line */}
            { <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.8rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#7e8aa2', letterSpacing: '0.3px' }}>
                <i className="bi bi-c-circle"></i> 2026 caseify — crafted with purpose.
              </div>
            </div> }
         

          </div>
        </div>
        {/* </div> */}
        </div>
      {/* //  </div> */}
    </footer>
  );
};

export default CaseifyFooter;
