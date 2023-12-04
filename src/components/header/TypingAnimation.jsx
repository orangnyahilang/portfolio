import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './typed.css';

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Saya Arya Satya Ibnu Sani',
        'Seorang Programmer',
        'Ini halaman Portfolio saya'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 3000, // Jeda 4 detik sebelum memulai loop lagi
      loop: true,
    };

    const typed = new Typed('.typing-animation-1', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing-animation-1"></span>;
};

export default TypingAnimation;
