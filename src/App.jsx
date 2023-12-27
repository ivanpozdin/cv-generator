import "./App.css";
import PersonalForm from "./components/forms/PersonalForm";
import Personal from "./components/view/Personal";

import ExperienceForm from "./components/forms/ExperienceForm";
import Experience from "./components/view/Experience";

import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Cecil J. Pierce",
    phone: "906-341-2606",
    email: "CecilJPierce@teleworm.us ",
    address: "3973 Wood Duck Drive Manistique, MI 49854 ",
  });

  const [educations, setEducations] = useState([
    {
      organization: "Wood Duck school #83",
      role: "high school",
      startDate: "1994-09-01",
      endDate: "1996-07-10",
      location: "Wood Duck",
      id: 1,
    },
    {
      organization: "Harvard",
      role: "Bachelor's",
      startDate: "1996-09-01",
      endDate: "2000-05-12",
      location: "Harvard",
      id: 2,
    },
  ]);

  const [works, setWorks] = useState([
    {
      organization: "Google",
      role: "Junior Frontend Developer",
      startDate: "205-09-01",
      endDate: "2010-07-10",
      location: "Seattle",
      id: 1,
    },
    {
      organization: "Facebook",
      role: "Middle Frontend Developer",
      startDate: "2010-09-01",
      endDate: "2017-07-10",
      location: "San-Francisco",
      id: 2,
    },
  ]);

  return (
    <>
      <div className="edit-cv-container">
        <h1>Edit CV:</h1>
        <PersonalForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />

        <ExperienceForm
          items={educations}
          setItems={setEducations}
          formName="Education"
          organizationType="institution"
          roleType="degree"
        ></ExperienceForm>

        <ExperienceForm
          items={works}
          setItems={setWorks}
          formName="Work experience"
          organizationType="company"
          roleType="position"
        ></ExperienceForm>
      </div>
      <div className="cv-view">
        <Personal personalInfo={personalInfo} />
        <Experience items={educations} formName={"Education"}></Experience>
        <Experience items={works} formName={"Work experience"}></Experience>
      </div>
    </>
  );
}

export default App;
