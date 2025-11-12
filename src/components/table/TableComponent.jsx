import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux-toolkit/store/cartSlice";

export default function TableComponent({ items, columns }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOrderNow = () => {
    navigate("/personalDetails");
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} scope="col">
              {column.header}
            </th>
          ))}
          <th>Buy Products</th>
          <th>Remove Items</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <>
                <td key={column.key}>
                  {column.render
                    ? column.render(item, index)
                    : item[column.key]}
                </td>
              </>
            ))}
            <td>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleOrderNow()}
              >
                Order Now
              </button>
            </td>
            <td>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleRemoveItem(item)}
              >
                Remove from Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
};
