import React from 'react'
import {useParams} from 'react-router-dom'

function MovieDetail(props) {
    const {id} = useParams()
    return (
        <p1>{id} Movie 입니다.</p1>
    )
}

export default MovieDetail