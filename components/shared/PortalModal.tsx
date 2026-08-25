import { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Optional extra classes for the centered panel (width/max-width etc.). */
  panelClassName?: string;
}

/**
 * Full-screen modal rendered through a portal into document.body, so it is
 * never confined to a positioned ancestor (fixes the "modal appears inside
 * a sub-element" bug on mobile). Handles ESC close, body scroll lock, and
 * basic focus management (focus-in on open, focus-restore on close).
 */
const PortalModal: FC<PortalModalProps> = ({ open, onClose, children, panelClassName = "" }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Basic focus trap: keep Tab cycling inside the panel
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    // Move focus into the panel
    const timer = setTimeout(() => {
      panelRef.current?.focus();
    }, 0);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(timer);
      // Restore focus to the element that opened the modal
      triggerRef.current?.focus();
    };
  }, [open, handleKeyDown]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-card bg-surface p-6 shadow-modal outline-none ${panelClassName}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default PortalModal;
