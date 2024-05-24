// src/components/EmbeddedWebsite.js hoặc src/components/EmbeddedWebsite.tsx
import React from 'react';

const EmbeddedWebsite = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Embedded Website"
      />
    </div>
  );
};

export default EmbeddedWebsite;
