function ContactSection({contactInfo}) {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-info">
        <p> {contactInfo.email}</p>
        <p> <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <br />
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
