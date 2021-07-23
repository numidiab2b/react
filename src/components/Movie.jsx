import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movie extends Component {
    state = {
        movies: getMovies(),
    }
    render() {
        const {movies} = this.state;

        if (movies.length === 0)
        return <p>there is no movies</p>

        return (
            <div>
                <p>showing {movies.length} movies in the database</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">genre</th>
                        <th scope="col">stock</th>
                        <th scope="col">rate</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map( movie =>
                        <tr key={movie._id}>
                            <th>{movie.title}</th>
                            <th>{movie.genre.name}</th>
                            <th>{movie.numberInStock}</th>
                            <th>{movie.dailyRentalRate}</th>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => this.handleDelete(movie)}
                                >delete</button>
                            </td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
            </div>
        );
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id )
        this.setState({movies})
    }
}


export default Movie;