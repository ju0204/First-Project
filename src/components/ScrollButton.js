import React, { useEffect, useState } from 'react';
import './ScrollButton.css';
import NorthIcon from '@mui/icons-material/North';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-top-button"
      onClick={moveToTop}
      aria-label="맨 위로 이동"
    >
      <NorthIcon className="scroll-top-arrow" />
    </button>
  );
}