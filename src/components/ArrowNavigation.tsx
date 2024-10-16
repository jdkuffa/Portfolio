import React from 'react';

interface ArrowNavigationProps {
  targetSection: string;
}

const ArrowNavigation: React.FC<ArrowNavigationProps> = ({ targetSection }) => {
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <img 
      src="/arrow.png" 
      alt="Arrow icon" 
      className="icon arrow" 
      onClick={handleClick}
      width={24}
      height={24}
    />
  );
};

export default ArrowNavigation;