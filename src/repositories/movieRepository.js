import fs from 'fs/promises'
// import { v4 as uuid } from 'uuid'
import { prisma } from '../lib/prisma.js'

// async function readDb(collection) {
//     const content = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
//     const db = JSON.parse(content);

//     if (collection && !db.hasOwnProperty(collection)) {
//         throw new Error("No collection");
//     }

//     return collection ? db[collection] : db;
// }

// async function writeDb(db) {
//     const content = JSON.stringify(db, null, 2)
//     await fs.writeFile('./src/db.json', content, { encoding: 'utf-8' });
// }

async function getAll(filter = {}) {
    // let movies = await readDb('movies');
    let movies = await prisma.movie.findMany({
        where: {
            year: filter.year || undefined,
            genre: {
                equals: filter.genre || undefined, 
                mode: 'insensitive'
            },
            title: {
                contains: filter.search,
                mode: 'insensitive'
            }, 
        }
    });

    //TODO: Implement filtering by title, year and genre
    //Partial case insentive search
    // if (filter.search) {
    //     movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
    // }

    //Exact search
    // if (filter.year) {
    //     movies = movies.filter(movie => movie.year === filter.year)
    // }

    //Exaxt case insensitive
    // if (filter.genre) {
    //     movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase())
    // }

    return movies;
}

async function getById(movieId) {
    const movie = await prisma.movie.findUnique({
        where: { id: movieId },
        include: {
            artists: true
        }
    })

    if (!movie) {
        throw new Error("No movie found!");
    }

    return movie;
}

async function create(movieData) {
    // movieData.id = uuid();
    // const db = await readDb();
    // db.movies.push(movieData);
    // await writeDb(db);
    const movie = await prisma.movie.create({
        data: movieData
    })
    return movie;
}

async function attachArtist(movieId, artistId) {
    const movId = Number(movieId);
    const artId = Number(artistId)

    const result = await prisma.movie.update({
        where: { id: movId },
        data: {
            artists: {
                connect: { id: artId }
            }
        }
    });
    return result;
}

const movieRepositorie = {
    getAll,
    getById,
    create,
    attachArtist,
}

export default movieRepositorie
