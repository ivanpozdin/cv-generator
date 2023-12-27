import "./App.css";
import PersonalForm from "./components/forms/PersonalForm";
import Personal from "./components/view/Personal";

import ExperienceForm from "./components/forms/ExperienceForm";
import Experience from "./components/view/Experience";

import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Ivan Pozdin",
    phone: "+995 59550543",
    email: "ivanllpozdin@gmail.com",
    address: "38 Ana Politkovsakya St, Tbilisi, Georgia",
  });

  const [educations, setEducations] = useState([
    {
      organization: "Lyceum #8",
      role: "high school",
      startDate: "2019-09-01",
      endDate: "2021-07-10",
      location: "Sosnovy Bor",
      id: 1,
    },
    {
      organization: "SPSU",
      role: "Bachelor's",
      startDate: "2021-09-01",
      endDate: "2023-05-12",
      location: "Peterhof",
      id: 2,
    },
  ]);

  const [works, setWorks] = useState([
    {
      organization: "Google",
      role: "Junior Frontend Developer",
      startDate: "2019-09-01",
      endDate: "2021-07-10",
      location: "Sosnovy Bor",
      id: 1,
    },
    {
      organization: "Yandex",
      role: "Middle Frontend Developer",
      startDate: "2021-09-01",
      endDate: "2023-07-10",
      location: "Saint-Petersburg",
      id: 2,
    },
  ]);

  return (
    <>
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

      <div className="cv-view">
        <Personal personalInfo={personalInfo} />
        <Experience items={educations} formName={"Education"}></Experience>
        <Experience items={works} formName={"Work experience"}></Experience>
      </div>
    </>
  );
}

export default App;
