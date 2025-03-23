import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export const TodosLoading = () => {
  return (
    <div className='w-full h-[600px] sm:w-[550px] rounded-md border p-4 overflow-hidden'>
      <Table>
        <TableHeader className='sticky top-0 bg-background z-2'>
          <TableRow>
            <TableHead className='w-[100px]'>Avatar</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10).keys()].map((item) => (
            <TableRow key={item}>
              <TableCell>
                <Skeleton className='h-12 w-12 rounded-full' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-2' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-2' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
