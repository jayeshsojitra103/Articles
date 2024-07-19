import React, { ReactNode } from "react";

interface ModelPopupProps{
  children:ReactNode 
}

export const ModelPopup: React.FC<ModelPopupProps> = ({children}) => {
  return (
    <div
      className="modal fade"
      id="filterModal"
      aria-labelledby="filterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="filterModalLabel">
              Filter
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
