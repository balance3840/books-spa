export interface BookInterface {
  author: string;
  cover: string;
  rating: string;
  slug: string;
  synopsis: string;
  title: string;
  upvoted: boolean;
  upvotes: number;
}

export class BookDTO implements BookInterface {
  author = "";
  cover = "";
  rating = "";
  slug = "";
  synopsis = "";
  title = "";
  upvoted = false;
  upvotes = 0;
}

export default class Book extends BookDTO {
  constructor(dto: BookDTO) {
    super();
    Object.assign(this, dto);
  }
}
