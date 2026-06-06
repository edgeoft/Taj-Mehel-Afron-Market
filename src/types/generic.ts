export type ListOption = {
  label: string;
  value: string;
};

export type TBreadCrumbContent = {
  id: string;
  title: string;
  href?: string;
};

export type TBreadCrumb = TBreadCrumbContent[];

export type Params = { slug: string };
export type SearchParams = { [key: string]: string | string[] | undefined };

export type ColumnDef<T> = {
  accessorKey: string;
  header: string;
  cell?: ({ row }: { row: T }) => React.ReactNode;
};
