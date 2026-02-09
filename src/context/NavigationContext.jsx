import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';

const NavigationContext = createContext();

export const useNavigationConfirm = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);

  const confirmNavigation = useCallback((url) => {
    setPendingPath(url);
    setIsOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    setIsOpen(false);
    if (pendingPath) {
      window.open(pendingPath, '_blank', 'noopener,noreferrer');
    }
    setPendingPath(null);
  }, [pendingPath]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
    setPendingPath(null);
  }, []);

  return (
    <NavigationContext.Provider value={{ confirmNavigation }}>
      {children}
      <ConfirmModal
        isOpen={isOpen}
        destination={pendingPath}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
