(() => {
  const data = window.PORTFOLIO;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const projectIndex = data.projects.findIndex(project => project.id === id);
  const project = data.projects[projectIndex];
  const page = document.querySelector("#project-page");
  const error = document.querySelector("#project-error");

  if (!project) {
    error.hidden = false;
    return;
  }

  document.title = `${project.title} — ${data.person.name}`;
  document.querySelector("#project-label").textContent = project.label;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#project-deck").textContent = project.deck;

  const hero = document.querySelector("#project-hero-image");
  hero.src = project.hero;
  hero.alt = project.heroAlt;
  document.querySelector("#project-hero-caption").textContent = project.heroCaption;

  document.querySelector("#project-facts").innerHTML = Object.entries(project.facts).map(([key, value]) => `
    <div class="fact"><dt>${key}</dt><dd>${value}</dd></div>
  `).join("");

  document.querySelector("#case-study").innerHTML = project.sections.map(section => `
    <section class="case-section">
      <h2>${section.title}</h2>
      <p>${section.body}</p>
    </section>
  `).join("");

  document.querySelector("#project-gallery").innerHTML = project.gallery.map(image => `
    <figure>
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      <figcaption>${image.caption}</figcaption>
    </figure>
  `).join("");

  const next = data.projects[(projectIndex + 1) % data.projects.length];
  document.querySelector("#next-project-link").href = `project.html?id=${encodeURIComponent(next.id)}`;
  document.querySelector("#next-project-title").textContent = next.title;

  page.hidden = false;
})();
