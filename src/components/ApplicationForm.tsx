import { useState } from 'react';
import { Job } from '../data/jobs';

interface ApplicationFormProps {
  job: Job | null;
  onClose: () => void;
  onSubmit: (data: ApplicationData) => void;
}

export interface ApplicationData {
  jobId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  experience: string;
  languages: string[];
  cv: File | null;
  coverLetter: string;
}

export default function ApplicationForm({ job, onClose, onSubmit }: ApplicationFormProps) {
  const [formData, setFormData] = useState<ApplicationData>({
    jobId: job?.id || '',
    jobTitle: job?.title || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    experience: '',
    languages: [],
    cv: null,
    coverLetter: ''
  });

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, languages: selectedLanguages });
    alert('Aplicația ta a fost trimisă cu succes! Te vom contacta în curând.');
    onClose();
  };

  const handleLanguageToggle = (lang: string) => {
    setSelectedLanguages(prev =>
      prev.includes(lang)
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  if (!job) return null;

  return (
    <div className="form-overlay" onClick={onClose}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <button className="form-close" onClick={onClose}>
          <span className="material-icons">close</span>
        </button>
        <h2>Formular de Aplicare</h2>
        <div className="form-job-info">
          <strong>Post:</strong> {job.title} - {job.company}
          <br />
          <strong>Locație:</strong> {job.city}, {job.country}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Prenume *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Nume *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Telefon *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Țara de reședință *</label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Oraș *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Experiență profesională *</label>
            <textarea
              required
              rows={4}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="Descrie experiența ta profesională relevantă..."
            />
          </div>

          <div className="form-group">
            <label>Limbi străine cunoscute *</label>
            <div className="language-checkboxes">
              {['Română', 'Engleză', 'Germană', 'Franceză', 'Spaniolă', 'Olandeză', 'Poloneză'].map(lang => (
                <label key={lang} className="language-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(lang)}
                    onChange={() => handleLanguageToggle(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>CV (PDF, DOC, DOCX) *</label>
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            {formData.cv && <div className="file-name">{formData.cv.name}</div>}
          </div>

          <div className="form-group">
            <label>Scrisoare de intenție (opțional)</label>
            <textarea
              rows={4}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              placeholder="De ce vrei să lucrezi la acest post?"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Anulează
            </button>
            <button type="submit" className="btn-submit">
              Trimite aplicația
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

