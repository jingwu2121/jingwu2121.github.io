import React, { useEffect } from 'react';

const ClustrMaps = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the script source to the ClustrMaps script URL
    script.src = 'https://clustrmaps.com/globe.js?d=w5GKewlMS81Z30508D4q2IkFOZgvzpY2QjmU5MglUB4';
    
    // Append the script to the body or a specific container
    script.async = true;
    
    // Append the script to the document body
    document.body.appendChild(script);
    
    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the ClustrMaps container div with the necessary attributes */}
      <div id="clstr_globe" className="clustrmaps-widget"></div>
    </div>
  );
};

export default ClustrMaps;
