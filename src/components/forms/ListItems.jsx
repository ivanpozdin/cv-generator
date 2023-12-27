/* eslint-disable react/prop-types */
export default function ListItems({ items, setEditItemWithId, formName }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => setEditItemWithId(item.id)}>
              {item.organization}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (items.length === 0) {
            setEditItemWithId(1);
          } else {
            setEditItemWithId(items.at(-1).id + 1);
          }
        }}
      >
        + {formName}
      </button>
    </>
  );
}
