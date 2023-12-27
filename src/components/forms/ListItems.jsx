import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

/* eslint-disable react/prop-types */
export default function ListItems({
  items,
  setItems,
  setEditItemWithId,
  formName,
}) {
  const handleDragAndDrop = (results) => {
    const { source, destination } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const reorderedItems = [...items];

    const [removedStore] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removedStore);

    return setItems(reorderedItems);
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Droppable droppableId={formName}>
          {(provided) => (
            <ul
              className="experience-form"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable
                  draggableId={`${item.id}`}
                  index={index}
                  key={item.id}
                >
                  {(provided) => (
                    <li
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <p>{item.organization}</p>
                      <button
                        className="edit-btn"
                        onClick={() => setEditItemWithId(item.id)}
                      >
                        edit
                        <span class="material-symbols-outlined">
                          edit_square
                        </span>
                      </button>
                      <span class="material-symbols-outlined">
                        drag_indicator
                      </span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button
        onClick={() => {
          if (items.length === 0) {
            setEditItemWithId(1);
          } else {
            let maxId = 1;
            for (const item of items) {
              if (item.id > maxId) {
                maxId = item.id;
              }
            }
            setEditItemWithId(maxId + 1);
          }
        }}
      >
        + {formName}
      </button>
    </>
  );
}
