// import fs from 'fs/promises'
import { prisma } from '../lib/prisma.js'

export async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    })
    return artist;
}

const artistRepositorie = {
    create,
}

export default artistRepositorie