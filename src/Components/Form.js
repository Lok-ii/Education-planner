import "./form.css";
import Subject from "./Subject";
import { useState, useEffect } from "react";

export default function Form() {
  let [subjectInput, setSubject] = useState("");
  let [hourInput, setHours] = useState("");
  let [subjectList, setSubjectList] = useState([]);

  // Load subjects from local storage on component mount
  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("subjectList")) || [];
    setSubjectList(storedSubjects);
  }, []);

  const addCard = () => {
    if (subjectInput !== "" && hourInput !== 0) {
      setSubjectList((prevSubjectList) => {
        const updatedList = [...prevSubjectList, { subjectInput, hourInput }];
  
        // Save to local storage
        localStorage.setItem("subjectList", JSON.stringify(updatedList));
  
        return updatedList;
      });
    }

    setHours("");
    setSubject("");
  };

  return (
    <>
      <h1>Education Planner</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Subject"
          className="subjectInput"
          value={subjectInput}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          value={hourInput}
          name="hour"
          id="hour"
          placeholder="Hours"
          className="hour"
          onChange={(e) => setHours(e.target.value)}
        />
        <button onClick={addCard}>ADD</button>
      </div>
      <div className="subjectContainer">
        {subjectList.map((ele, idx) => {
          return (
            <Subject
              key={idx}
              subject={ele.subjectInput}
              hour={ele.hourInput}
            />
          );
        })}
      </div>
    </>
  );
}
