import yasser from '../../assets/yasser.jpg';

export default function About() {
  return (
    <section className="about">
      <div className="about-box">
        <div className="about-summary">
          <p className="text">
            Welcome! My name is Yasser, and I enjoy creating things that come to
            life on the internet. My interest in web development reignited in
            2019, marking the beginning of a journey I had always dreamed of
            continuing.😊
          </p>
          <p className="text">
            Fast-forward to today, and I&#39;ve had the privilege of working at
            a start-up and a huge corporation. My main focus these days is
            building accessible, inclusive products, and digital experiences for
            a variety of clients.
          </p>
          <div className="tech">
            <h4 className="tech-title">
              Here are a few technologies I’ve been working with recently:
            </h4>
            <ul className="tech-list fira">
              <li className="tech-list-item">JavaScript (ES6+)</li>
              <li className="tech-list-item">TypeScript</li>
              <li className="tech-list-item">React.js</li>
              <li className="tech-list-item">Next.js</li>
              <li className="tech-list-item">Angular (Still Learning)</li>
              <li className="tech-list-item">Sass</li>
            </ul>
          </div>
        </div>
        <div className="about-img">
          <img className="img-fluid" src={yasser} alt="Yasser" />
        </div>
      </div>
    </section>
  );
}
// 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace
