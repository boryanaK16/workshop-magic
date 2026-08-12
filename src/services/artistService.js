import artistRepositorie from "../repositories/artistRepository.js";

export function getAll() {
    return artistRepositorie.getAll()
}

export function create(artistData) {
    // artistData.rating = Number(artistData.rating);
    artistData.age = Number(artistData.age);
    return artistRepositorie.create(artistData);
}

const artistService = {
    create,
    getAll,
}

export default artistService;