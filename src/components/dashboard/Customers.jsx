import { useEffect, useState } from "react";

import customersData from "../../data/usersData.json";
import ReactPaginate from "react-paginate";
import { CustomersTable } from "../table/CustomersTable";


export const Customers = ({ currentScreen, closeMenu }) => {
  const [customers, setCustomers] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All customers");
  const [searchValue, setSearchValue] = useState("");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    setCustomers(customersData);
  }, []);
  useEffect(() => {
    if (customers) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(customers.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(customers.length / itemsPerPage));
    }
  }, [customers, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % customers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="customers_container">
    
        <CustomersTable currentScreen={currentScreen} />
        {/* <div className="customers_table">
          <div className="customers_table-head">
            <div className="table_cell customers_table-head-cell">Name</div>
            <div className="table_cell customers_table-head-cell">Company</div>
            <div className="table_cell customers_table-head-cell">Phone</div>
            <div className="table_cell customers_table-head-cell">Email</div>
            <div className="table_cell customers_table-head-cell">Country</div>
            <div className="table_cell customers_table-head-cell">Status</div>
          </div>
          {currentItems &&
            currentItems.map((item) => (
              <div className="customer_wrap">
                <div className="table_cell">
                  <p className="customer_data customer_name">
                    {item.first_name + " " + item.last_name}
                  </p>
                </div>
                <div className="table_cell">
                  <p className="customer_data customer_company">
                    {item.company}
                  </p>{" "}
                </div>
                <div className="table_cell">
                  <p className="customer_data customer_phone">{item.phone}</p>{" "}
                </div>
                <div className="table_cell">
                  <p className="customer_data customer_email">{item.email}</p>{" "}
                </div>
                <div className="table_cell">
                  <p className="customer_data customer_country">
                    {item.country}
                  </p>{" "}
                </div>
                <div className="table_cell">
                  <p
                    className={`customer_data customer_status status_${
                      item.active ? "active" : "inactive"
                    }`}
                  >
                    {item.active ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            ))}
        </div> */}
      </div>
      {/* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
      /> */}
    </>
  );
};
