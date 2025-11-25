import { Job } from '../data/jobs';

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <div className="job-company">{job.company}</div>
      </div>
      <div className="job-location">
        <span className="material-icons">location_on</span>
        {job.city}, {job.country}
      </div>
      <div className="job-details">
        <div className="job-detail-item">
          <span className="material-icons">euro</span>
          <strong>Salariu:</strong> {job.salary}
        </div>
        <div className="job-detail-item">
          <span className="material-icons">home</span>
          <strong>Cazare:</strong> {job.housing}
        </div>
        <div className="job-detail-item">
          <span className="material-icons">work</span>
          <strong>Sector:</strong> {job.sector}
        </div>
      </div>
      <p className="job-description">{job.description}</p>
      <div className="job-requirements">
        <strong>Cerințe:</strong>
        <ul>
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="job-benefits">
        <strong>Beneficii:</strong>
        <div className="benefits-tags">
          {job.benefits.map((benefit, idx) => (
            <span key={idx} className="benefit-tag">{benefit}</span>
          ))}
        </div>
      </div>
      <button className="apply-btn" onClick={() => onApply(job)}>
        Aplică acum
      </button>
    </div>
  );
}

