import { useSuspenseQuery } from '@tanstack/react-query';

import { todoListQueryOptions } from '@/utils/api/requests/todo/list';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

import { TodoListRoute } from '../../routes/todos';
import { cn } from '@/lib/utils';
import { SpinnerIcon } from '@/components/icons';

export const TodosPage = () => {
  const search = TodoListRoute.useSearch();
  const state = TodoListRoute.useRouteContext();
  console.log(state);

  const todosQuery = useSuspenseQuery(todoListQueryOptions(search));

  const changeSearchParams = TodoListRoute.useNavigate();

  const changePage = (page: number) => {
    changeSearchParams({ search: (prev) => ({ ...prev, _page: page }) });
  };

  return (
    <div className='w-full sm:w-[550px]'>
      <ScrollArea className='h-[600px] rounded-md border p-4'>
        <Table>
          <TableHeader className='sticky top-0 bg-background z-2'>
            <TableRow>
              <TableHead className='w-[100px]'>Avatar</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todosQuery.data?.results.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={item.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={cn(
                search._page === 1 && 'pointer-events-none',
                search._page !== 1 && 'cursor-pointer'
              )}
              isActive={search._page !== 1}
              onClick={() => changePage(search._page - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{search._page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={cn(
                !todosQuery.data._link.next && 'pointer-events-none',
                todosQuery.data._link.next && 'cursor-pointer'
              )}
              isActive={!!todosQuery.data._link.next}
              onClick={() => changePage(search._page + 1)}
            />
          </PaginationItem>
          {todosQuery.isFetching && (
            <PaginationItem>
              <SpinnerIcon className='mr-2 h-4 w-4 animate-spin' />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
