import { Link } from "react-router-dom";

export default function TableRowProducts(props) {
  const { data, onEdit, onDelete } = props;
  return (
    <>
      {data?.map((item) => (
        <tr key={item.id}>
          <td align="center">
            <Link to={`/product/detail/${item.id}`}>{item.name}</Link>
          </td>
          <td align="center">{item.price}</td>
          <td align="center">{item.stock}</td>
          <td align="center">
            <button onClick={() => onEdit(item)}>edit</button>
          </td>
          <td align="center">
            <button onClick={() => onDelete(item.id)}>delete</button>
          </td>
        </tr>
      ))}
    </>
  );
}
