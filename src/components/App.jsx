import { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { SearchBar } from './searchbar/SearchBar';
import { ImageGallery } from './gallery/ImageGallery';
import { Loader } from './loader/Loader';
import { LoadMoreBtn } from './loadmore/LoadMoreBtn';
import { ErrorMessage } from './error/ErrorMessage';
import { ImageModal } from './imagemodal/ImageModal';
import {fetch} from './api';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalPages = useRef(0);

  const searchImages = async (newQuery) => {
    const id = nanoid(5);
    const parsedQuery = `${id}-${newQuery}`;
    setQuery(parsedQuery);
    setPage(1);
    setImages([]);
    totalPages.current = 0;

    await fetchImages(parsedQuery, 1);
  };

  async function fetchImages(query, page) {
    try {
      setLoad(true);
      setError(false);

      const fetchedData = await fetch(query, page);
      setImages((prevPhotos) => [...prevPhotos, ...fetchedData.results]);
      totalPages.current = fetchedData.total_pages;

      if (totalPages.current === 0) {
        console.log('No results found');
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    fetchImages(query, page);
  }, [query, page]);
  

  const handleClick = () => {
    setPage(page + 1);
  };

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.body.style.overflow = 'scroll';
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery items={images} onClick={openModal} />}
      {load && <Loader />}
      {error && <ErrorMessage />}
      {selectedItem && 
        <ImageModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} selectedItem={selectedItem}/>
      }
      {images.length > 0 && !load && (<LoadMoreBtn onClick={handleClick} />)}
      <Toaster />
    </div>
  );
}

export default App;
