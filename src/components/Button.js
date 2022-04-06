import { func, bool } from "prop-types";

export default function Button(props) {
  const { onAdd, onUpdate, isUpdate, isUpdating, isAdding } = props;

  if (isUpdate) {
    return (
      <button type="button" onClick={onUpdate}>
        {isUpdating ? "Loading..." : "Update Product"}
      </button>
    );
  }

  return (
    <button type="button" onClick={onAdd}>
      {isAdding ? "Loading..." : "Add Product"}
    </button>
  );
}

Button.propTypes = {
  onAdd: func,
  onUpdate: func,
  isUpdate: bool,
  isUpdating: bool,
  isAdding: bool,
};
