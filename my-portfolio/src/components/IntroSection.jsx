function IntroSection({ text }) {
  return (
    <section className="intro">
      <div className="intro-text" style={{ textAlign: 'center' }}>

        <p>----------------------------------------------------------------------------------------------------------</p>
        <h2 className="engraved">{text}</h2>
        <p>----------------------------------------------------------------------------------------------------------</p>
      </div>
    </section>
  );
}

export default IntroSection;
