function HomePage({ onOpenCalculators }) {
  return (
    <>
      <header className="hero-panel home-hero">
        <p className="eyebrow">Programmer&apos;s Picnic React</p>
        <h1>Welcome to the React Components Lab</h1>
        <p className="hero-text">
          This home page is separate from the calculator page. Use it as the
          landing page for your React lessons, project introduction, and student
          navigation.
        </p>

        <div className="hero-actions">
          <button onClick={onOpenCalculators}>Open Calculator Components</button>
          <a className="ghost-button" href="https://react.learnwithchampak.live/" target="_blank" rel="noreferrer">
            Visit Live Site
          </a>
        </div>
      </header>

      <section className="concept-panel">
        <h2>What this React project now demonstrates</h2>
        <div className="feature-grid">
          <article>
            <h3>Separate Pages</h3>
            <p>
              The home page and calculator page are now different screens inside
              the same React app.
            </p>
          </article>

          <article>
            <h3>Separate Components</h3>
            <p>
              Each calculator is a separate component, making the code easier to
              read, teach, test, and improve.
            </p>
          </article>

          <article>
            <h3>Simple Navigation</h3>
            <p>
              The app uses React state to switch between pages without adding a
              routing library yet.
            </p>
          </article>
        </div>
      </section>

      <section className="concept-panel lesson-note">
        <h2>Student task</h2>
        <p>
          Open the calculator page, enter three numbers, and test addition,
          subtraction, multiplication, and division using buttons, radio buttons,
          select dropdown, and checkboxes.
        </p>
      </section>
    </>
  )
}

export default HomePage
