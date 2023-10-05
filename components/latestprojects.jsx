// styling
import "../styles/dashboard.css";
// data
import { projects } from "@/data/data";
const LatestProjects = () => {
  return (
    <>
      <div className="latest-projects">
        <div className="header">
          <span>Latest Projects</span>
          <span>...</span>
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
