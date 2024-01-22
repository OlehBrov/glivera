export const StatusCell = ({ getValue, row, column, table }) => {
  const active = getValue();
  const mobileView = table.options.meta.currentScreen <= 480 ? false : true;

  return (
    <div
      className={`status_cell ${active ? `status_active` : `status_inactive`}`}
     
    >
      {mobileView && (
        <p className="status_text"> {`${active ? `Active` : `Inactive`}`}</p>
      )}
    </div>
  );
};
