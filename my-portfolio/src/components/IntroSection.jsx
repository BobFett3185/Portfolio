function IntroSection({ text }) {
  return (

    <section className="intro">
      <h1 className="engraved" style={{ textAlign: 'center' }}> About </h1>

      <div className="intro-text" style={{ textAlign: 'center' }}>

        <p>----------------------------------------------------------------------------------------------------------</p>
        <h2 className="engraved">{text}</h2>
        <p>----------------------------------------------------------------------------------------------------------</p>
      </div>
    </section>
  );
}

export default IntroSection;
