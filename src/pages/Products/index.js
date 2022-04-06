import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableRowProducts from "../../components/TableRowProducts";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../store/services/productsApi";

const initialState = {
  name: "",
  price: 0,
  stock: 0,
};

export default function Products() {
  const [form, setForm] = useState(initialState);
  const [productId, setProductId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const { data } = useGetProductsQuery();

  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    for (const data in form) {
      if (form[data] === "") {
        alert("Form tidak boleh kosong");
        return;
      }
    }

    await addProduct(form);

    setForm(initialState);
  };

  const setUpdates = (data) => {
    setProductId(data.id);
    setForm({
      ...form,
      name: data.name,
      price: data.price,
      stock: data.stock,
    });
    setIsUpdate(true);
  };

  const handleUpdate = async () => {
    const data = {
      id: productId,
      ...form,
    };

    await updateProduct(data);

    setForm(initialState);
    setIsUpdate(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Anda yakin ingin menghapus produk ini")) {
      await deleteProduct(id);
    }
  };

  return (
    <section style={{ maxWidth: 600, margin: "auto" }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ marginBottom: 16 }}>
          <Input
            label="Nama produk"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input
            label="Harga"
            name="price"
            value={form.price}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input
            label="Jumlah"
            name="stock"
            value={form.stock}
            type="number"
            onChange={handleChange}
          />
        </div>

        {isUpdate ? (
          <Button isUpdate onUpdate={handleUpdate} isUpdating={isUpdating} />
        ) : (
          <Button onAdd={handleSubmit} isAdding={isAdding} />
        )}
      </div>

      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRowProducts
            data={data}
            onEdit={setUpdates}
            onDelete={handleDelete}
          />
        </tbody>
      </table>
    </section>
  );
}
