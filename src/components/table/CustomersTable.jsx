import { useMemo, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import mData from "../../data/usersData.json";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import { EmailCell } from "./EmailCell";
import { StatusCell } from "./StatusCell";
import ReactPaginate from "react-paginate";

export const CustomersTable = ({ currentScreen }) => {
  const data = useMemo(() => mData, []);

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [pageIndex, setPageIndex] = useState(0);
  const [filter, setFilter] = useState("");
  const [columnFilter, setColumnFilter] = useState([]);
  const columns = [
   
    {
      header: "Customer Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
      size: 125,
    },
    {
      header: "Company",
      accessorKey: "company",
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
      size: 120,
    },
   
    {
      header: "Email",
      accessorKey: "email",
      cell: EmailCell,
   
    },

    {
      header: "Country",
      accessorKey: "country",
    },

    {
      header: "Status",
      accessorKey: "active",
      cell: StatusCell,
      className: "status-td",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: false,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    defaultColumn: {
      size: 125, 
      minSize: 100, 
      maxSize: 200, 
    },
    initialState: {
      pagination: {
        pageIndex: pageIndex,
        pageSize: itemsPerPage,
        pageCount: undefined,
      },
    },
    state: {
      globalFilter: filter,
      columnFilters: columnFilter,
    },
    onGlobalFilterChange: setFilter,
    onColumnFiltersChange: setColumnFilter,
    meta: {
      currentScreen,
    },
  });
  const handlePageClick = (event) => {
    table.setPageIndex(event.selected);
  };
  let resultAvailable = table.getFilteredRowModel().rows.length !== 0;
  console.log("resultAvailable", resultAvailable);
  return (
    <div className="table-wrapper">
      {" "}
      <div className="table_filters-wrapper">
        <div className="table_filters_btns-wrapper">
          <button
            onClick={() => setColumnFilter([])}
            className={`table_filter-btn ${
              columnFilter.length ? "inactive" : ""
            }`}
          >
            All Customers
          </button>
          <button
            onClick={() =>
              setColumnFilter([
                {
                  id: "active",
                  value: true,
                },
              ])
            }
            className={`table_filter-btn ${
              !columnFilter.length ? "inactive" : ""
            }`}
          >
            Active Members
          </button>
        </div>

        <div className="input-wrapper">
          <SearchIcon className="search_icon" />
          <input
            className="table_filter-input"
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                
                <th className={`table_header column_${header.column.id}`} key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`${cell.column.columnDef.header.toLocaleLowerCase()}`}
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table_controls">
        {resultAvailable && (
          <p>
            Showing data{" "}
            {Math.ceil(
              table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1
            )}{" "}
            to{" "}
            {Math.ceil(
              table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                table.getState().pagination.pageSize
            )}{" "}
            of {table.getPrePaginationRowModel().rows.length} entries
          </p>
        )}
        {!resultAvailable && <p>No results available</p>}
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={table.getPageCount()}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
