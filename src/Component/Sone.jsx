import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sone.css";
import "@fontsource/dancing-script";
import A from '../assets/jone.jpg';
import B from '../assets/king.jpg';
import C from '../assets/card.jpg';

const services = [
  {
    title: "Complete Wedding Planning",
    subtitle: "Full Service Excellence",
    description:
      "Let Queenie handle every detail of your special day. From venue selection to the final toast, we manage vendor coordination, budget planning, design aesthetics, and complete day-of logistics. Our experienced team ensures your wedding is perfectly executed so you can focus on celebrating your love.",
  
    image: A,
    features: [
      "Venue Sourcing & Booking",
      "Vendor Management",
      "Design & Styling",
      "Budget Planning",
      "Timeline Coordination",
      "Day-of Management"
    ]
  },
  {
    title: "Partial Planning Services",
    subtitle: "Expert Guidance When You Need It",
    description:
      "Already started planning? Queenie fills in the gaps. Perfect for couples who have a vision but need professional expertise to refine details, manage vendors, and ensure nothing falls through the cracks. We work alongside you to bring your dream wedding to life.",
    tag: "",
    image: B,
    features: [
      "Design Consultation",
      "Vendor Coordination",
      "Budget Review",
      "Timeline Creation",
      "Detail Management",
      "Problem Solving"
    ]
  },
  {
    title: "Wedding Day Coordination",
    subtitle: "Be Present, We'll Handle the Rest",
    description:
      "Queenie's day-of coordination service is your peace of mind. We manage all timelines, vendor arrivals, setup, breakdowns, and logistics. Enjoy every moment of your wedding while our expert team ensures everything runs flawlessly behind the scenes.",
    tag: "",
    image: C,
    features: [
      "Day Timeline Management",
      "Vendor Coordination",
      "Guest Management",
      "Setup & Breakdown",
      "Problem Prevention",
      "Wedding Day Support"
    ]
  },
];

export default function Sone() {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Queenie's Wedding Planning Services</h2>
        <p className="header-subtitle">
          Every love story deserves a perfect celebration. At Queenie, we specialize in turning your wedding dreams into unforgettable memories.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
              {service.tag && (
                <span className="service-tag">{service.tag}</span>
              )}
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>

              <button
                className="service-button"
                onClick={() => setActiveService(service)}
              >
                Learn More About This Service
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeService && (
        <div
          className="modal-overlay"
          onClick={() => setActiveService(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveService(null)}
            >
              ✕
            </button>

            <div className="modal-image">
              <img src={activeService.image} alt={activeService.title} />
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{activeService.title}</h2>
              <h3 className="modal-subtitle">{activeService.subtitle}</h3>
              <p className="modal-description">{activeService.description}</p>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  {activeService.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <p className="footer-text">
                  Ready to start planning your perfect wedding with Queenie?
                </p>
                <button className="contact-button" onClick={() => {
                  setActiveService(null);
                  navigate('/contact');
                }}>Contact Queenie Today</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
