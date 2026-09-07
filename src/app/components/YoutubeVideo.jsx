export default function YoutubeVideo() {
  return (
    <section className="youtube-section" aria-labelledby="youtube-title">
      <div className="youtube-card">
        <button className="youtube-play" type="button" aria-label="Play YouTube video" data-aos="fade-up">
          <span aria-hidden="true" />
        </button>
        <div className="youtube-content">
          <h2 id="youtube-title">Discover Your Path to Harmony</h2>
          <p>
            See how Harmony &amp; Her can help you pause, reconnect and create
            meaningful change in every area of your life.
          </p>
        </div>
      </div>
    </section>
  );
}
