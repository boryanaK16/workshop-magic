import movieRepositorie from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return movieRepositorie.getAll(filter);
}

function getById(movieId) {
    const id = Number(movieId);
    return movieRepositorie.getById(id);
}

function create(movieData) {
    movieData.rating = Number(movieData.rating);
    movieData.year = Number(movieData.year);
    return movieRepositorie.create(movieData);
}

const movieService = {
    getAll,
    getById,
    create,
}

export default movieService;