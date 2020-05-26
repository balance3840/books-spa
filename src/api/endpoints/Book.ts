import Axios from "axios";
import Book, { BookDTO } from "@/models/Book";

export abstract class BookEndpoints {
  private static api = Axios.create();

  static async getAllBooks(): Promise<Book[]> {
    const response = await this.api.get("http://localhost:3000/books");
    return response.data.books.map((bookDto: BookDTO) => new Book(bookDto));
  }

  static async getBook(slug: string): Promise<Book> {
    const response = await this.api.get(`http://localhost:3000/books/${slug}`);
    const bookDto: BookDTO = response.data;
    const book = new Book(bookDto);
    return book;
  }
}
