const {Book}= require('../../model/Book')
const router= require('express').Router();



router.post('/', async (req, res) => {
    try {
        const newBook= new Book(req.body);
        await newBook.save();
        res.status(201).send(newBook);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const books= await Book.find({});
        res.send(books);
    } catch (error) {
        res.status(500).send(error);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const book= await Book.findById(req.params.id);
        if(!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
})


router.put('/:id', async (req, res) => {
    try {
        const book= await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const book= await Book.findByIdAndDelete(req.params.id);
        if(!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=router