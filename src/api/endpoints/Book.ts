import Axios from "axios";
import Book, { BookDTO } from "@/models/Book";

export abstract class BookEndpoints {
  private static api = Axios.create();

  static async getAllBooks(): Promise<Book[]> {
    const response = await this.api.get("http://localhost:3000/books");
    return response.data.books.map((bookDto: BookDTO) => new Book(bookDto));
  }
}
