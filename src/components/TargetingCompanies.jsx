import React, { useState } from 'react';
import companiesData from '../data/companiesData';

function TargetingCompanies() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="page-container">
      <h1>Targeting Companies</h1>
      <div className="companies-grid">
        {companiesData.map((company) => (
          <div
            key={company.name}
            className="company-card"
            onClick={() => handleCardClick(company)}
          >
            {company.name}
          </div>
        ))}
      </div>

      {selectedCompany && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            <h2>{selectedCompany.name}</h2>
            <p><strong>About:</strong> {selectedCompany.about}</p>
            <p><strong>History:</strong> {selectedCompany.history}</p>
            <p><strong>Recruitment Process:</strong> {selectedCompany.recruitmentProcess}</p>
            <p>
              <strong>Official Website:</strong>
              <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">
                {selectedCompany.website}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TargetingCompanies;
