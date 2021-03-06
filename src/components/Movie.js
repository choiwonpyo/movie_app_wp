import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

const staticUrl = process.env.PUBLIC_URL

function Movies({ id, year, title, summary, poster, genres, history}) {
    return (
        <div className="movie" onClick={() => {history.push(`/movies/${id}`)}}>
            <img src={poster} onError={(ev) => {ev.target.src = staticUrl+ '/images/no_image.jpg'}} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {
                        genres.map((genre, index) =>
                            <li key={index} className="genres__genre">{genre}</li>)
                    }
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>)
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    history: PropTypes.object
}

export default Movies