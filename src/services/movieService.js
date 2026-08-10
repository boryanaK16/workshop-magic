import movieRepositorie from "../repositories/movieRepository.js";

function getAll() {
    return movieRepositorie.getAll();
}

const movieService = {
    getAll,
}

export default movieService;