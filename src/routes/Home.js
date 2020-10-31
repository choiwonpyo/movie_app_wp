import React from 'react';
import axios from 'axios'
import Movie from '../components/Movie'
import './Home.css';

const url = 'https://yts-proxy.now.sh/list_movies.json?sortBy=ranking'
class Home extends React.Component {
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
    const { isLoading, movies} = this.state;

    const {history} = this.props;

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
                  history={history}
                  />
              })}
            </div>
          )}
      </section>
    )
  }
}

export default Home
