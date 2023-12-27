/* eslint-disable react/prop-types */
export default function Personal({ personalInfo }) {
  return (
    <section className="personal-view">
      <h1>{personalInfo.name}</h1>
      <div className="personal-details-container">
        <div className="phone-container">
          <span className="material-symbols-outlined">call</span>
          <p>{personalInfo.phone}</p>
        </div>

        <div className="email-container">
          <span className="material-symbols-outlined">mail</span>
          <p>{personalInfo.email}</p>
        </div>
        <div className="address-container">
          <span className="material-symbols-outlined">my_location</span>
          <p>{personalInfo.address}</p>
        </div>
      </div>
    </section>
  );
}
