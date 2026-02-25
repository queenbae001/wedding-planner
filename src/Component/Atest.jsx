import './Atest.css';


const testimonials = [
  {
    id: 1,
    name: "Amara & Daniel",
    text: "Our wedding was absolutely magical! Every detail was perfectly planned, from the décor to the coordination. We truly felt stress-free and able to enjoy every moment.",
  },
  {
    id: 2,
    name: "Sophia & Michael",
    text: "The team brought our dream wedding to life. They listened carefully, stayed within budget, and delivered an unforgettable celebration for us and our guests.",
  },
  {
    id: 3,
    name: "Olivia & James",
    text: "Professional, creative, and incredibly organized. From venue selection to the final dance, everything was seamless and beautifully executed.",
  },
];

const Atest = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Couples Say</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Atest;

