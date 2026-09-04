export default function YoutubeVideo() {
  return (
    <section className="youtube-section" aria-labelledby="youtube-title">
      <div className="youtube-card">
        <button className="youtube-play" type="button" aria-label="Play YouTube video">
          <span aria-hidden="true" />
        </button>
        <h2 id="youtube-title">YOUTUBE VIDEO</h2>
      </div>
    </section>
  );
}
