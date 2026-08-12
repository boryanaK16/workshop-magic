import { Router } from 'express'

const artistController = Router();

artistController.get('/create', (req, res) => {
    res.render('artists/create', {pageTitle: 'Create Movie'})
})

artistController.post('/create', async (req, res) => {
    const artistData = req.body;
    console.log(artistData);
    
    // await movieService.create(newMovie);
    res.redirect('/')
})

export default artistController;
