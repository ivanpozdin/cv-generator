/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditItemForm({
  items,
  setEditItemWithId,
  setItems,
  editItemWithId,
  organizationType,
  roleType,
}) {
  let itemToEdit = null;

  for (const item of items) {
    if (item.id === editItemWithId) {
      itemToEdit = item;
      break;
    }
  }

  const [itemName, setItemName] = useState(itemToEdit?.organization || "");
  const [itemRole, setItemRole] = useState(itemToEdit?.role || "");
  const [startDate, setStartDate] = useState(itemToEdit?.startDate || "");
  const [endDate, setEndDate] = useState(itemToEdit?.endDate || "");
  const [location, setLocation] = useState(itemToEdit?.location || "");

  function handleOrganizationChange(e) {
    setItemName(e.target.value);
  }
  function handleRoleChange(e) {
    setItemRole(e.target.value);
  }
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function saveItems(e) {
    e.preventDefault();
    const newItems = [];
    const editedItems = {
      organization: itemName,
      role: itemRole,
      startDate,
      endDate,
      location,
      editItemWithId,
    };
    for (const item of items) {
      if (item.id === editItemWithId) {
        newItems.push(editedItems);
        continue;
      }
      newItems.push({ ...item });
    }
    if (!itemToEdit) {
      newItems.push(editedItems);
    }
    setItems(newItems);
    setEditItemWithId(-1);
  }

  function deleteItem(e) {
    e.preventDefault();
    const newItems = [];
    for (const item of items) {
      if (item.id === editItemWithId) {
        continue;
      }
      newItems.push({ ...item });
    }
    setItems(newItems);
    setEditItemWithId(-1);
  }

  return (
    <form className="experience-form" action="" onSubmit={saveItems}>
      <label htmlFor="organization">Name of {organizationType}: </label>
      <input
        type="text"
        placeholder={`Enter name of ${organizationType}`}
        id="organization"
        value={itemName}
        onChange={handleOrganizationChange}
      />

      <label htmlFor="role">{roleType.toUpperCase()}: </label>
      <input
        type="text"
        placeholder={`Enter ${roleType}`}
        id="role"
        value={itemRole}
        onChange={handleRoleChange}
      />

      <label htmlFor="start-date-input">Start date:</label>
      <input
        type="date"
        name="startDate"
        id="start-date-input"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="end-date-input">End date:</label>
      <input
        type="date"
        name="endDate"
        id="end-date-input"
        value={endDate}
        onChange={handleEndDateChange}
      />

      <label htmlFor="location-input">Location: </label>
      <input
        type="text"
        placeholder="Enter the location"
        id="location-input"
        value={location}
        onChange={handleLocationChange}
      />
      <div className="edit-btns">
        <button className="delete-btn" onClick={deleteItem}>
          DELETE
        </button>
        <button
          type="button"
          onClick={() => {
            setEditItemWithId(-1);
          }}
        >
          CANCEL
        </button>
        <button className="save-btn" type="submit">
          SAVE
        </button>
      </div>
    </form>
  );
}
