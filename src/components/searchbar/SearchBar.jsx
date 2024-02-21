// import style from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    if (e.target.elements.query.value === '') {
      toast.error('This is an empty field. Please write something!', {
        duration: 2000,
        position: 'top-center',
      });
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <IconContext.Provider value={{ size: '2em'}}>
          <button type="submit">
            <FaSearch />
          </button>
        </IconContext.Provider>
        <input type="text" autoComplete="off" placeholder="Search images and photos" name="query" />
      </form>
    </header>
  );
};
