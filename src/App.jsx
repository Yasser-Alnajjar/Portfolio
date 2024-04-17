import { Toaster } from 'react-hot-toast';
import { useLocation, useRoutes } from 'react-router-dom';
import { cloneElement } from 'react';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import routes from './routes/index';

function App() {
  const router = useRoutes(routes);
  const location = useLocation();
  const isPresent = useIsPresent();
  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(router, { key: location.pathname })}
      <Toaster reverseOrder={false} position="top-right" />
      <motion.div
        initial={{ scaleX: 1 }}
        key="modal"
        animate={{ scaleX: 0, transition: { duration: 1, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="privacy-screen"
      />
    </AnimatePresence>
  );
}

export default App;
