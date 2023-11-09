import React from 'react';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#f5f5f5',
  padding: '10px',
  textAlign: 'center',
};

function FooterComponent() {
  return (
    <div>
      <footer style={footerStyle}>
        <span className="text-muted">All Rights Reserved 2023 @Aza</span>
      </footer>
    </div>
  );
}

export default FooterComponent;
