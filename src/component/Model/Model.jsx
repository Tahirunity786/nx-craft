import React from 'react';
import PropTypes from 'prop-types';
import './model.css'
const Modal = ({ id, title, modelSize = '', modelType = '', modelBody }) => {
    return (
        <div 
            className="modal fade" 
            id={id} 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby={`${id}Label`} 
            aria-hidden="true"
        >
            <div className={`modal-dialog ${modelSize} ${modelType}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {modelBody}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

// Define PropTypes for better validation
Modal.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    modelSize: PropTypes.string,
    modelType: PropTypes.string,
    modelBody: PropTypes.node.isRequired,
};

export default Modal;
