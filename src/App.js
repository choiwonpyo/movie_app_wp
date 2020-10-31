import React from 'react';
import axios from 'axios'
import Movie from './Movie'
import './App.css';

const url = 'https://yts-proxy.now.sh/list_movies.json?sortBy=ranking'
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get(url)
    this.setState({ movies: movies, isLoading: false })
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ?
          (<div className="loader">
            <span className="laoder__text">Loading...</span>
          </div>)
          : (
            <div className="movies">
              {movies.map(movie => {
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
              })}
            </div>
          )}
      </section>
    )
  }
}

export default App;
