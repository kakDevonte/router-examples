interface Todo {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PageRequest<T> {
  _page: number;
  _limit: number;
  sort?: { column: string; dir: 'asc' | 'desc' };
  filter?: T;
}

interface PageResponse<T> {
  results: T[];
  _link: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}
