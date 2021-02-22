import { Response, Request } from 'express';
import bookModel, { Book } from '../models/Book';

class BooksController {
    
    public async index(req: Request, res: Response) {
        const books = await bookModel.find({}).lean();
        res.render('books/index', { 
            title: 'Books',
            books
        });
    }
    public renderFormBook(req: Request, res: Response): void {
    
        res.render('books/add',{
            title: 'Add a Book'
        });
    }
    public async saveBook(req: Request, res: Response){
        const { title, author, isbn } = req.body;
        const book: Book = new bookModel({title, author, isbn});
        await book.save();
        res.redirect('/books');
    }
}

export const booksController = new BooksController();
