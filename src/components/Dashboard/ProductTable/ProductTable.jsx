import "./styles.scss";

const rows = [
  { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

const ProductsTable = () => {
  return (
    <div className="products-table">
      <h3>Top Selling Products</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.price}</td>
              <td>{r.qty}</td>
              <td>{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
