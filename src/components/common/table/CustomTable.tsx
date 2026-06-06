import {
  Flex,
  Stack,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';
import Paginate from '../Paginate';

import { ColumnDef } from '@/types/generic';

import '@/styles/components/table/__customTable.scss';

type TableProps<T extends Record<string, unknown>> = {
  columns: ColumnDef<T | null>[];
  rows: T[];
  totalPages: number;
};

const CustomTable = <T extends Record<string, unknown>>({
  columns,
  rows,
  totalPages,
}: TableProps<T>) => {
  return (
    <Stack gap={16}>
      <TableScrollContainer minWidth={500}>
        <Table highlightOnHover withRowBorders={false} className="custom-table">
          <TableThead>
            <TableTr>
              {columns.map((column) => (
                <TableTh key={column?.header}>{column.header}</TableTh>
              ))}
            </TableTr>
          </TableThead>

          <TableTbody>
            {rows.map((row, index) => (
              <TableTr key={index}>
                {columns.map((column, cellIndex) => (
                  <TableTd key={cellIndex}>
                    {column.cell
                      ? column.cell({ row })
                      : String(row[column.accessorKey])}
                  </TableTd>
                ))}
              </TableTr>
            ))}
          </TableTbody>
        </Table>
      </TableScrollContainer>

      {totalPages > 1 ? (
        <Flex justify={'center'} w={'100%'}>
          <Paginate total={totalPages} />
        </Flex>
      ) : null}
    </Stack>
  );
};

export default CustomTable;
