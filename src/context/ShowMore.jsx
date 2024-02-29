import React, { createContext, useContext, useState } from 'react';

const ShowMore = createContext();

export const useShowMore = () => useContext(ShowMore);

export const ShowMoreProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <ShowMore.Provider value={{ isExpanded, toggleExpanded }}>
      {children}
    </ShowMore.Provider>
  );
};