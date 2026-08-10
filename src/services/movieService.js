import movieRepositorie from "../repositories/movieRepository.js";

function getAll() {
    return movieRepositorie.getAll();
}

function create(movieData) {
    return movieRepositorie.create(movieData);
}

const movieService = {
    getAll,
    create,
}

export default movieService;