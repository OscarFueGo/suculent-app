import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Banner / Slider */}
      <section className="banner-section">
        <div className="banner-content">
          <img src="/banner_discounts.png" alt="Spring Sale" className="banner-image" />
          <div className="banner-text">
            <h2>Seasonal Discounts</h2>
            <p>Get up to 50% off on selected succulents!</p>
          </div>
        </div>
      </section>

      {/* RRSS Info */}
      <section className="rrss-section">
        <div className="container rrss-content">
          <p>Follow us on Instagram: <strong>@BuenJardin</strong> | Facebook: <strong>/BuenJardinStore</strong></p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="main-content container">
        <div className="images-column">
          <div className="store-image-wrapper">
            <img src="/store_interior_1.png" alt="Store Interior" className="store-image" />
          </div>
          <div className="store-image-wrapper">
            <img src="/store_succulent_detail.png" alt="Succulent Detail" className="store-image" />
          </div>
        </div>
        <div className="description-column">
          <div className="description-content">
            <h2>Welcome to BuenJardin</h2>
            <p>
              At BuenJardin, we believe that bringing nature into your home transforms your living space and your well-being. 
              Specializing in rare and beautiful succulents, we offer a curated selection of plants that are perfect for both beginners and collectors.
            </p>
            <p>
              Our journey began with a simple love for the resilience and variety of succulents. Today, we are proud to be your local 
              expert in all things green. Whether you are looking for a small desk companion or a centerpiece for your garden, 
              we have something for everyone.
            </p>
            <p>
              Visit us today and let us help you grow your own little oasis.
            </p>
            <button className="cta-button">Shop Collection</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
