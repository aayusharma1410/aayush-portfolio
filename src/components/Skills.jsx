import React, { useState } from 'react';
import skillsData from '../data/skillsData';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCardClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="page-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            onClick={() => handleCardClick(skill)}
          >
            {skill.name}
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            <h2>{selectedSkill.name}</h2>
            <p><strong>History:</strong></p>
            <p>{selectedSkill.history}</p>
            <p><strong>About:</strong></p>
            <p>{selectedSkill.about}</p>
            <p><strong>Uses:</strong></p>
            <p>{selectedSkill.uses}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
