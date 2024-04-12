const Testimonials = () => {
  const testimonialsData = [
    {
      id: 4,
      speaker: "Prakash Chandwani",
      role: "Vice President,Technology Services",
      company: "ScribeEMR Systems Private Limited",
      content:
        "Thilak Ramanie is an exceptional front-end developer who consistently delivered outstanding results while working on our healthcare products. He has solid expertise in React and Angular, and an impressive ability to turn designs into captivating user experiences. Within a short span of time, Thilak became an invaluable asset to our team. Thilak is proactive, collaborative, and always eager to take on new challenges. I highly recommend him for any front-end development role and wish him all the luck for his future endeavors.",
    },
    {
      id: 1,
      speaker: "Padmanaban V",
      role: "Plant Head - Operations and R&D",
      company: "Excel Foods",
      content:
        "I had the privilege of collaborating with Mr. Thilak as a freelancer on our company's website project launch, and I couldn't be more impressed. His work is consistently top-notch, and he welcomes feedback and improvements with open arms. Mr. Thilak's technical expertise, problem-solving skills, and unwavering dedication make him an invaluable asset to any web development team. I highly recommend him for web development projects.",
    },
    {
      id: 2,
      speaker: "Karthiga Shankar",
      role: "Assistant Professor",
      company: "TCE, Madurai",
      content:
        "Thilak Ramanie is a standout front-end developer student! He exhibits a strong grasp of various javascript frameworks, and his enthusiasm for learning is impressive. Always eager to take on new challenges, he shows great potential for a successful career in web development. I wish him all the very best for his bright future.",
    },
    {
      id: 3,
      speaker: "Vignesh Rajan",
      role: "Project Lead",
      company: "Armax Automation",
      content:
        "I highly recommend Thilak as an excellent resource. His command over React and JavaScript and his problem-solving and computer skills are commendable. Additionally, his enthusiasm and commitment to a startup environment are admirable. Thilak's ability to implement ideas from scratch and quickly learn new technologies makes him a valuable asset to any team.",
    },
  ];
  return (
    <section id="testimonials" className="testimonials">
      <p style={{ textAlign: "center" }}>Hear what they say!</p>
      <h1 className="title">Testimonials</h1>
      <div className="testimonials-container">
        {testimonialsData.map((data) => {
          return (
            <figure className="snip1533" key={data.id}>
              <figcaption>
                <blockquote>
                  <p>{data.content}</p>
                </blockquote>
                <div>
                  <h3>{data.speaker}</h3>
                  <h3 className="role">{data.role}</h3>
                  <h4>{data.company}</h4>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
