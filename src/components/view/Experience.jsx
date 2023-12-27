/* eslint-disable react/prop-types */
function convertDate(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${year}`;
}

export default function Experience({ items, formName }) {
  return (
    <section className="experience-view">
      <h2>{formName}</h2>
      <ul className="experience-list-view">
        {items.map((item) => (
          <li key={item.id}>
            <h4>{item.organization}</h4>
            <p className="role-view">{item.role}</p>
            <p className="location-view">{item.location}</p>
            <p className="date-view">
              {convertDate(item.startDate)} - {convertDate(item.endDate)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
