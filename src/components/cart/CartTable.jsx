import TableComponent from "../table/TableComponent";

export default function CartTable({ cartItems }) {
  const columns = [
    {
      key: "index",
      header: "S.No",
      render: (_, index) => index + 1,
    },
    {
      key: "brand",
      header: "Brand",
    },
    {
      key: "name",
      header: "Product Name",
    },
    {
      key: "price",
      header: "Price",
      render: (item) => `${item.price} ${item.currency}`,
    },
  ];

  return (
    <div className="container-fluid">
      <TableComponent items={cartItems} columns={columns} />
    </div>
  );
}
