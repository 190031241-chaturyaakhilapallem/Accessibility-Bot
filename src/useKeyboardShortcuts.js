import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useKeyboardShortcuts = (toggleNightMode) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { ctrlKey, altKey, key } = event;

      // External website shortcuts
      if (ctrlKey && key === 'g') {
        window.open('https://www.google.com', '_blank'); // Opens Google
      } else if (ctrlKey && key === 't') {
        window.open('https://www.twitter.com', '_blank'); // Opens Twitter
      } else if (ctrlKey && key === 'i') {
        window.open('https://www.instagram.com', '_blank'); // Opens Instagram
      } else if (ctrlKey && key === 'y') {
        window.open('https://www.twitter.com', '_blank'); // Opens Twitter (Ctrl + Y as alternate shortcut)
      } else if (ctrlKey && key === 'l') {
        window.open('https://www.linkedin.com', '_blank'); // Opens LinkedIn
      } else if (ctrlKey && key === 'f') {
        window.open('https://www.facebook.com', '_blank'); // Opens Facebook

      // Internal navigation shortcuts
      } else if (altKey && key === 'n') {
        navigate('/text-to-speech'); // Navigate to Text to Speech page
      } else if (altKey && key === 's') {
        navigate('/speech-to-text'); // Navigate to Speech to Text page
      } else if (altKey && key === 'h') {
        navigate('/help'); // Navigate to Help page
      } else if (altKey && key === 'd') {
        navigate('/dashboard'); // Navigate to Dashboard
      } else if (altKey && key === 'f') {
        navigate('/image-to-text'); // Navigate to Image to Text page
      // Toggle Night Mode
      } else if (ctrlKey && key === 'm') {
        toggleNightMode(); // Toggle Night Mode
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate, toggleNightMode]);
};

export default useKeyboardShortcuts;