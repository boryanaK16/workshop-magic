// import fs from 'fs/promises'
import { prisma } from '../lib/prisma.js'

export async function getAll(artistData) {
    const artists = await prisma.artist.findMany();

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