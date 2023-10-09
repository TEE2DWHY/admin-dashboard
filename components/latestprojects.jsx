"use client";
import { useEffect, useState } from "react";

// styling
import "../styles/dashboard.css";
// data
import { projects } from "@/data/data";
//  components
import Modal from "./modal/modal";

const LatestProjects = () => {
  const [showProjectModal, setProjectModal] = useState(false);
  // useEffect(() => {
  //   const projectModal = document.querySelector(".project-modal");
  //   projectModal.addEventListener("click", () => {
  //     setProjectModal(!showProjectModal);
  //   });

  //   return () => {
  //     projectModal.removeEventListener("click", () => {
  //       setProjectModal(!showProjectModal);
  //     });
  //   };
  // }, [showProjectModal]);

  return (
    <>
      <div className="latest-projects">
        <div className="header">
          <span>Latest Projects</span>
          <div className="project-modal-container">
            <div className="project-modal"> ...</div>
            <div>{showProjectModal && <Modal />}</div>
          </div>
        </div>
        <div className="project-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody className="project-details">
              {projects.map((project, index) => (
                <tr className={project.className} key={index}>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>
                    <button className={project.statusClass}>
                      {project.status}
                    </button>
                  </td>
                  <td>{project.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
