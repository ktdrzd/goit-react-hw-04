// import style from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

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
        <button type="submit">
          <FaSearch />
        </button>
        <input type="text" autoComplete="off" placeholder="Search images and photos" name="query"/>
      </form>
    </header>
  );
};
