import { IconContext } from 'react-icons';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  selectedItem: { urls, alt_description, description }
}) => {
    return (
        <div>
            <Modal 
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            >
                <IconContext.Provider>
                    <button onClick={onRequestClose}>
                        <IoMdCloseCircleOutline/>
                    </button>
                </IconContext.Provider>

                <div>
                    <img src={urls.regular} alt={alt_description} width="600" />
                    <p>{description}</p>
                </div>
            </Modal>
        </div>
    )
};

// export default ImageModal;