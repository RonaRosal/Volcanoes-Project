import React from "react";
import { Link } from "react-router-dom";


export default function Home()
{
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

// hero content
const Hero = () =>
(
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__content">
      <h1 className="hero__title">Volcanoes</h1>
      <p className="hero__subtitle">around the world</p>

            <Link to="./pages/VolcanoListPage">Volcano List</Link>
            <Link to="./pages/RegisterPage">Register</Link>
            <Link to="./pages/LogInPage">Log In</Link>

    </div>
  </section>
);

// features section
function Features() {
  /* The information for our features in JSON
  so we can reduce the amount of repetitive JSX and reuse one component instead */
  const featuresData = [
    {
      heading:"Volcano Images",
      text:
        "Volcano images for a closer look.",
      img: { src: "img/imageicon.png", alt: "Image icon" }
    },
    {
      heading: "Volcano Information",
      text:
        "Access to volcano informations such as name, region, and subregions.",
      img: { src: "img/info.png", alt: "Info icon" }
    },
    {
      heading: "Account Perks",
      text:
        "Register for authorized access of restricted volcano information such as population density.",
      img: { src: "img/account.png", alt: "Account icon" }
    }
  ];

  return (
    <article className="features">
      <div className="features__header">
        <h2>What to expect </h2>
      </div>

      <div className="features__box-wrapper">
        {
          // display the information for each of our features in their own Box
          featuresData.map((feature) => (
            <FeatureBox feature={feature} />
          ))
        }
      </div>
    </article>
  );
}

// Display a Feature box when passed in the information for the feature
const FeatureBox = ({ feature }) => (
  <div className="features__box">
    <img src={feature.img.src} alt={feature.img.alt} />
    <h5>{feature.title}</h5>
    <p>{feature.text}</p>
  </div>
);
