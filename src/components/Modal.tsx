import React from "react";

type Props = {
  id: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

function Modal({ id, title, className, children }: Props) {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        {title && <h3 className="font-bold text-lg">Stats</h3>}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className={className}>{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
