import '../assets/styles/about.css';

const About = () => {
  const aboutCards = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Career Objective',
      description: 'Motivated Computer Science student looking for an opportunity to gain practical experience, improve my skills, and build a successful career in software development.'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: 'Education',
      description: 'B.Tech in Computer Science & Engineering at Prathyusha Engineering College (2024 – pursuing), CGPA: 8.0/10',
      list: ['B.Tech CSE – Prathyusha Engineering College', 'Intermediate (MPC) – Sri Chaitanya Junior College', '10th – Sri Vidya Jyothi High School']
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Interests',
      list: ['Web Development', 'Python Programming', 'Java Development', 'AI & Chatbots', 'Database Design', 'Software Engineering']
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Learning Goals',
      list: ['Full Stack Development', 'Advanced Python', 'Cloud Technologies', 'AI & Machine Learning', 'System Design']
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about me and my journey</p>
        </div>
        <div className="section-underline"></div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science and Engineering student at Prathyusha Engineering College, Thiruvallur,
              passionate about building software solutions and learning new technologies. With hands-on experience
              in web development and Python programming, I have built real-world projects including a Student
              Management System and an AI Chatbot. I am driven to gain practical experience and grow as a
              software developer.
            </p>
          </div>
        </div>

        <div className="about-cards">
          {aboutCards.map(card => (
            <div key={card.id} className="about-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.list && (
                <ul className="card-list">
                  {card.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
