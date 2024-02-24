import { IconContext } from 'react-icons';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Modal from 'react-modal';
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

export const ImageModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  selectedItem: { urls, alt_description, description },
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        className={style.modal}
        overlayClassName={style.backdrop}
      >
        <IconContext.Provider value={{ size: '3em', color: 'rgba(253, 45, 126, 0.5)' }}>
          <button className={style.button} onClick={onRequestClose}>
            <IoMdCloseCircleOutline />
          </button>
        </IconContext.Provider>

        <div className={style.container}>
          <img className={style.image} src={urls.regular} alt={alt_description} width="600" />
          <p className={style.desc}>{description}</p>
        </div>
      </Modal>
    </div>
  );
};

// export default ImageModal;
