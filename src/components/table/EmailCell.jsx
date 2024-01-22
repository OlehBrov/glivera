
export const EmailCell = ({ getValue, row, column, table }) => {
  const email = getValue() || {};

  return <a className="email-cell" href={`mailto:${email}`}>{email}</a>;
};
