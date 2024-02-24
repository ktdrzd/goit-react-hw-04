import style from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.query.value === '') {
      toast.error('This is an empty field. Please write something!', {
        duration: 2000,
        position: 'top-center',
      });
      return;
    }

    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <header className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <IconContext.Provider value={{ size: '1em' }}>
          <button type="submit" className={style.button}>
            <div className={style.center}>
              <FaSearch className={style.icon} />
            </div>
          </button>
        </IconContext.Provider>
        <input className={style.input} type="text" autoComplete="off" placeholder="Search images and photos" name="query" />
      </form>
    </header>
  );
};

// export default SearchBar;
