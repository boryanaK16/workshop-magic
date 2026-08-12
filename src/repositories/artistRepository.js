// import fs from 'fs/promises'
import { prisma } from '../lib/prisma.js'

export async function getAll(filter = {}) {
    const artists = await prisma.artist.findMany({
        where: {
            id: {
                notIn: Array.isArray(filter.exclude) ? filter.exclude : [],
            }
        }
    });

    return artists;
}

export async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    })
    return artist;
}

const artistRepositorie = {
    create,
    getAll,
}

export default artistRepositorie