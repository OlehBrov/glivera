
import { CustomersTable } from "../table/CustomersTable";

export const Customers = ({ currentScreen }) => {
  return (
    <>
      <div className="customers_container">
        <CustomersTable currentScreen={currentScreen} />
      </div>
    </>
  );
};
