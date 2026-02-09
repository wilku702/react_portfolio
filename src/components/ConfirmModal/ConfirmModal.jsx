import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './ConfirmModal.css';

const getHostname = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const ConfirmModal = ({ isOpen, destination, onConfirm, onCancel }) => {
  const confirmRef = useRef(null);
  const cancelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    confirmRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = [confirmRef.current, cancelRef.current].filter(Boolean);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="confirm-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onCancel}
          role="dialog"
          aria-modal="true"
          aria-label="Confirm external link"
        >
          <motion.div
            className="confirm-modal-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p>Open external link?</p>
            <p className="confirm-modal-dest">{getHostname(destination)}</p>
            <div className="confirm-modal-actions">
              <button
                ref={confirmRef}
                className="confirm-modal-confirm"
                onClick={onConfirm}
              >
                Confirm
              </button>
              <button
                ref={cancelRef}
                className="confirm-modal-cancel"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  destination: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ConfirmModal;
