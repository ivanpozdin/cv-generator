/* eslint-disable react/prop-types */
function convertDate(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${year}`;
}

export default function Education({ educations }) {
  return (
    <section className="education-view">
      <h2>Education</h2>
      <ul className="education-list-view">
        {educations.map((education) => (
          <li key={education.id}>
            <h4>{education.institution}</h4>
            <p className="degree-edu-view">{education.degree}</p>
            <p className="location-edu-view">{education.location}</p>
            <p className="date-edu-view">
              {convertDate(education.startDate)} -{" "}
              {convertDate(education.endDate)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
