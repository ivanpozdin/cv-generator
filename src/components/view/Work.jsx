/* eslint-disable react/prop-types */
function convertDate(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${year}`;
}

export default function Work({ works }) {
  return (
    <section className="work-view">
      <h2>Work</h2>
      <ul className="work-list-view">
        {works.map((work) => (
          <li key={work.id}>
            <h4>{work.company}</h4>
            <p className="position-view">{work.position}</p>
            <p className="location-view">{work.location}</p>
            <p className="date-view">
              {convertDate(work.startDate)} - {convertDate(work.endDate)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
