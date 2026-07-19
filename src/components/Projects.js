import React, { useState } from 'react';
import './Projects.css';

const Projects = (props) => {
  const [showPast, setShowPast] = useState(false);

  const latestItems = props.details.slice(0, 2);
  const pastItems = props.details.slice(2);
  const pastCount = pastItems.length;

  const togglePast = () => {
    setShowPast(prev => !prev);
  };

  return (
    <div className="project-shell">
      <div className="project-summary">
        <span>{latestItems.length} latest projects · {pastCount} past project{pastCount !== 1 ? 's' : ''}</span>
        <p className="project-summary-note">Keep the timeline compact, or expand the archive to review earlier deployments.</p>
      </div>

      <div className="project-list">
        {latestItems.map((value, index) => {
          const progress = index === 0 ? 100 : 88;
          const status = index === 0 ? 'Deploying' : 'In progress';
          const badge = index === 0 ? 'Active' : 'Staging';
          const isActive = index === 0;

          return (
            <div className={`project-item${isActive ? ' project-item--active' : ''}`} key={index}>
              <div className="project-pipeline">
                <div className="pipeline-line"></div>
                <div className={`pipeline-node${isActive ? ' pipeline-node--active' : ''}`}>
                  <span></span>
                </div>
              </div>

              <div className="project-details">
                <div className="project-row-top">
                  <div>
                    <p className="project-status-label">{status}</p>
                    <h3>{value.title}</h3>
                    <p className="project-meta">{value.company} • {value.duration}</p>
                  </div>
                  <div className={`project-badge${isActive ? ' project-badge--active' : ''}`}>
                    {badge}
                  </div>
                </div>

                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span>{progress}%</span>
                </div>

                <p className="project-description">{value.about}</p>
                <div className="project-footer">
                  <div className="project-tech">{value.tech}</div>
                  <div className="project-actions">
                    <a href={value.githublink} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={value.livelink} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {pastCount > 0 && (
          <div className="project-past-wrapper">
            <button
              className="project-past-toggle"
              onClick={togglePast}
              aria-expanded={showPast}
            >
              {showPast ? 'Collapse past project history' : `View ${pastCount} past project${pastCount !== 1 ? 's' : ''}`}
            </button>

            {showPast && (
              <div className="project-past-list">
                {pastItems.map((value, index) => {
                  const progress = 100;
                  return (
                    <div className="project-item project-item--past" key={index}>
                      <div className="project-pipeline project-pipeline--past">
                        <div className="pipeline-line"></div>
                        <div className="pipeline-node"></div>
                      </div>
                      <div className="project-details project-details--compact">
                        <div className="project-row-top project-row-top--compact">
                          <div>
                            <p className="project-status-label">Past</p>
                            <h3>{value.title}</h3>
                            <p className="project-meta">{value.company} • {value.duration}</p>
                          </div>
                          <div className="project-badge">Released</div>
                        </div>

                        <div className="project-progress">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                          </div>
                          <span>{progress}%</span>
                        </div>

                        <p className="project-description">{value.about}</p>
                        <div className="project-footer">
                          <div className="project-tech">{value.tech}</div>
                          <div className="project-actions">
                            <a href={value.githublink} target="_blank" rel="noreferrer">GitHub</a>
                            <a href={value.livelink} target="_blank" rel="noreferrer">Live Demo</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
