import React from 'react';
import "../styles/Project.css";
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project({project}) {
  const pd = project;
  //{projectName, projectIcon, projectDesc, gitHubLink, appLink}
  return (
    <div className={"work-card " + pd.projectIcon} title={pd.projectDesc}>
      <div className="card-hover">
        <a target="_blank" rel="noreferrer" href={pd.appLink}>
          <h1>{pd.projectName}</h1>
        </a>
        <a target="_blank" rel="noreferrer"  href={pd.gitHubLink}> 
          <FontAwesomeIcon icon={faGithub} size='2x' /> 
        </a>        
      </div>
    </div>
  );
}

export default Project;
