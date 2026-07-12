import '../assets/styles/resume.css';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sudheer_resume.pdf';
    link.download = 'Sudheer_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <div className="section-title">
          <h2>My Resume</h2>
          <p>Education, skills, and achievements</p>
        </div>
        <div className="section-underline"></div>

        <div className="resume-content">
          <div className="resume-column">
            <div className="resume-section">
              <div className="resume-section-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3>Education</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>B.Tech – Computer Science & Engineering</h4>
                  <p className="duration">2024 – Present</p>
                  <p>Prathyusha Engineering College, Thiruvallur | CGPA: 8.0/10</p>
                </div>
                <div className="timeline-item">
                  <h4>Intermediate (MPC)</h4>
                  <p className="duration">2022 – 2024</p>
                  <p>Sri Chaitanya Junior College | Percentage: 94%</p>
                </div>
                <div className="timeline-item">
                  <h4>10th Standard (SSC)</h4>
                  <p className="duration">2021 – 2022</p>
                  <p>Sri Vidya Jyothi High School | CGPA: 10.0/10</p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3>Certifications</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Python Programming Certification</h4>
                  <p>Completed comprehensive training in Python programming fundamentals and applications.</p>
                </div>
                <div className="timeline-item">
                  <h4>Web Development Training</h4>
                  <p>Hands-on training in HTML, CSS, JavaScript, and building responsive web applications.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-column">
            <div className="resume-section">
              <div className="resume-section-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3>Skills Summary</h3>
              </div>
              <div className="skills-summary">
                <div className="skill-summary-item">
                  <h4>Frontend</h4>
                  <p>HTML5, CSS3, JavaScript</p>
                </div>
                <div className="skill-summary-item">
                  <h4>Programming</h4>
                  <p>Python, Java</p>
                </div>
                <div className="skill-summary-item">
                  <h4>Database</h4>
                  <p>MySQL, MongoDB</p>
                </div>
                <div className="skill-summary-item">
                  <h4>Tools</h4>
                  <p>Git, GitHub, VS Code</p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3>Achievements</h3>
              </div>
              <ul className="achievement-list">
                <li>Built a Student Management System using Python and MySQL</li>
                <li>Developed an AI Chatbot using Python and NLP libraries</li>
                <li>Completed Python Programming certification</li>
                <li>Completed Web Development training</li>
                <li>Consistent academic performance with CGPA of 8.0</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-download">
          <button onClick={handleDownload} className="download-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
