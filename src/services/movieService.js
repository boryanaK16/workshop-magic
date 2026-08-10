import movieRepositorie from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return movieRepositorie.getAll(filter);
}

function getById(movieId) {
    return movieRepositorie.getById(movieId);
}

function create(movieData) {
    return movieRepositorie.create(movieData);
}

const movieService = {
    getAll,
    getById,
    create,
}

export default movieService;