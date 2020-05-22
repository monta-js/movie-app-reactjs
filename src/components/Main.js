import React, { useState } from 'react';
import Modal from 'react-modal';
import MoviesList from './MoviesList.js';
import './style/Style.css';


const movies = [
    {
        title: 'The Kingdom',
        poster: 'https://resizing.flixster.com/B9WUvYJ-ShR6Qso26XHum7LL_Z8=/206x305/v1.bTsxMTE3NjUyOTtqOzE4NDg5OzEyMDA7ODAwOzEyMDA',
        rating: 2,
        year: 2007
    },

    {
        title: 'Damage',
        poster: 'https://alchetron.com/cdn/Damage-2009-film-images-9d5c9ae0-2f15-400b-b757-10f4ded5eef.jpg',
        rating: 3,
        year: 2009
    },

    {
        title: 'The Expendables 3',
        poster: 'https://i.pinimg.com/236x/8c/1e/f4/8c1ef447f1aad5233d22a033b12d5ae5--movies--movies-free.jpg',
        rating: 4,
        year: 2014
    },

    {
        title: 'JOCKER',
        poster: 'https://upload.wikimedia.org/wikipedia/ar/8/82/Joker_2019_ME_poster.png',
        rating: 5,
        year: 2019
    },

];



const Main = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listOfMovies, setMovie] = useState(movies);

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');

    const openModal = () => { setIsOpen(true); }
    const closeModal = () => {
        setIsOpen(false);
        setTitle('');
        setPoster('');
        setRating('');
        setYear('');
    }
    const customStyles = {
        content: {
            width: '50%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const addMovie = (e) => {
        e.preventDefault();
        let newMovie = {
            title: { title }.title ? { title }.title :"Missing title",
            poster: { poster }.poster ? { poster }.poster  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPS91SXO_J_XCdlf8rbrOLyoh3HEAFyrCVzg8co1tuFf_Yb3e1&usqp=CAU',
            rating: { rating }.rating ?{ rating }.rating : 1,
            year: { year }.year
        };
        closeModal();
        return setMovie([...listOfMovies, ...[newMovie]]);

    }

    const handleChangeMovie = (event) => {
        setMovie(movies);
        const result = movies.filter(movie => movie.title == event.target.value);
        return setMovie(result);
    };

    const handleChangeRating = (event) => {
        setMovie(movies);
        const rating =  movies.filter(movie => movie.rating == event.target.value);
        return setMovie(rating);
     };

   const handleReset = (event) => {
    return setMovie(movies);
   };

    return (
        <div class="container">
  <div class="row">
    <div class="col-sm mt-30">
    <button className="btn btn-primary mr-5" onClick={openModal}>Add movie</button>
    <button className="btn btn-primary" onClick={handleReset}>Reset Filter</button>
    </div>
    <div class="col-sm">
    <label className="btn">Filter by name</label>
    <select onChange={handleChangeMovie}>{movies.map((movie) => <option key={movie.title}>{movie.title}</option>)}</select>    </div>
    <div class="col-sm">
    <label className="btn">Filter by rating <span className="star"></span></label>
                    <select value={null} onChange={handleChangeRating}>{movies.map((movie) => <option key={movie.rating}>{movie.rating}</option>)}</select>    </div>
  </div>
      <div >
      <MoviesList movies={listOfMovies} />
      </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modalHeader">
                    <strong>Add new movie</strong>
                    <button onClick={closeModal} className="btn">x</button>
                </div>
                <form  onSubmit={addMovie}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)}  required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="poster">Poster url</label>
                        <input type="url" name="poster" id="poster" value={poster} onChange={event => setPoster(event.target.value)} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" name="rating" id="rating" min="1" max="5" value={rating} onChange={event => setRating(event.target.value)} required/>
                        <small>Add a note between 1 and 5</small>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" id="year" maxLength="4" min="1950" max="2020" value={year} onChange={event => setYear(event.target.value)} />
                        <small>Add movies between 1950 and 2020</small>
                    </div>
                    <div className="formGroup">
                        <button type="submit " className="btn btn-danger">Add movie</button>
                    </div>


                </form>
            </Modal>
</div>

            
            



    );
}

export default Main;
