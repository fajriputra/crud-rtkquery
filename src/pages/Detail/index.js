import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../store/services/productsApi";

export default function Detail() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return "Loadinggggggg";
  }

  return (
    <div>
      <h2>Detail Product</h2>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: 30 }}>Id Prouk</p>
          <p>{data.id}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: 30 }}>Produk</p>
          <p>{data.name}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: 30 }}>Harga</p>
          <p>{data.price}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: 30 }}>Stok</p>
          <p>{data.stock}</p>
        </div>
      </div>
    </div>
  );
}
