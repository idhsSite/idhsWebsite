import React, { createContext, useContext, useState } from 'react';

const ShowMore = createContext();

export const useShowMore = () => useContext(ShowMore);

export const ShowMoreProvider = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({
    introExpanded: false,
    intro1Expanded: false,
    missionExpanded: false,
    visionExpanded: false,
    chooseUsExpanded: false,
    patientExpanded: false,
    hospitalExpanded: false,
    doctorExpanded: false
  });

  const toggleExpanded = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <ShowMore.Provider value={{ expandedSections, toggleExpanded }}>
      {children}
    </ShowMore.Provider>
  );
};


// import React, { createContext, useContext, useState } from 'react';

// const ShowMore = createContext();

// export const useShowMore = () => useContext(ShowMore);

// export const ShowMoreProvider = ({ children }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpanded = () => setIsExpanded(!isExpanded);

//   return (
//     <ShowMore.Provider value={{ isExpanded, toggleExpanded }}>
//       {children}
//     </ShowMore.Provider>
//   );
// };