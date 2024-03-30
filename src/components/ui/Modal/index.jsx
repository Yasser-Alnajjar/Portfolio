import { cva } from 'class-variance-authority';
import mergeClass from '../../../utils';
import variantData from '../../../data';

const ModalVariants = cva('modal', {
  variants: {
    variant: {
      ...variantData,
    },
  },
  defaultVariants: {
    variant: 'white',
  },
});

export default function Modal({ variant, open, close, children }) {
  return (
    <div
      className={`${open ? 'open-modal' : ''} ${mergeClass(
        ModalVariants({ variant }),
      )}`}
    >
      <div className="modal-overlay" onClick={() => close(false)}></div>
      <div className="modal-content w-6">
        <div className="modal-header">
          <h4>Modal</h4>
          <button className="close-btn" onClick={() => close(false)}>
            x
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
