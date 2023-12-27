import { useState } from "react";
import ListItems from "./ListItems";
import EditItemForm from "./EditItemForm";
/* eslint-disable react/prop-types */
export default function ExperienceForm({
  items,
  setItems,
  formName,
  organizationType,
  roleType,
}) {
  const [editItemWithId, setEditItemWithId] = useState(-1);

  return (
    <div className="editor">
      <h3>{formName}</h3>
      {editItemWithId === -1 ? (
        <ListItems
          items={items}
          setItems={setItems}
          setEditItemWithId={setEditItemWithId}
          formName={formName}
        ></ListItems>
      ) : (
        <EditItemForm
          items={items}
          setEditItemWithId={setEditItemWithId}
          setItems={setItems}
          editItemWithId={editItemWithId}
          organizationType={organizationType}
          roleType={roleType}
        ></EditItemForm>
      )}
    </div>
  );
}
