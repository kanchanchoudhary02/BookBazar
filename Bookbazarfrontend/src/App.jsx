import { useEffect } from 'react';
import AppRouter from '../src/routers/AppRouter';
import BackToTop from '../src/components/BackToTop';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppRouter />
      <BackToTop />
    </>
  );
}

export default App;