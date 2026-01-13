import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <div className="container" style={{ padding: '2rem', maxWidth: '800px' }}>
        <h1 style={{ color: 'var(--primary-color)' }}>About BuenJardin</h1>
        <p style={{ lineHeight: '1.8' }}>
          BuenJardin was founded in 2023 with a mission to bring green spaces into urban homes. 
          We source the healthiest, most vibrant succulents from sustainable growers.
        </p>
        <p style={{ lineHeight: '1.8' }}>
            Our team is passionate about plants and dedicated to helping you find the perfect match for your space.
        </p>
      </div>
    </div>
  );
};

export default About;
