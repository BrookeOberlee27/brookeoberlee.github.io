(() => {
  const data = window.PORTFOLIO;
  const { esc, url, figure, thumb } = window.UI;
  const $ = (selector) => document.querySelector(selector);
  const person = data.person;

  // Hero / about
  $("#hero-name").textContent = person.name;
  $("#hero-tagline").textContent = person.tagline;
  $("#hero-lines").innerHTML = person.intro.map((line) => `<p>${esc(line)}</p>`).join("");
  const photo = $("#hero-photo");
  photo.src = url(person.headshot);
  photo.alt = person.headshotAlt;
  $("#hero-email").href = `mailto:${person.email}`;
  $("#hero-email").textContent = "Email me";

  // Project groups follow the table of contents slide
  const projectsById = Object.fromEntries(data.projects.map((project) => [project.id, project]));

  const row = (project) => `
    <a class="project-row" href="project.html?id=${encodeURIComponent(project.id)}">
      <figure class="project-thumb">${thumb(project.hero, project.heroAlt)}</figure>
      <div class="project-text">
        <h3>${esc(project.title)}</h3>
        <p class="project-meta">${esc(project.role)}</p>
        <p class="project-summary">${esc(project.summary)}</p>
        <ul class="tags">${project.tags.slice(0, 4).map((tag) => `<li>${esc(tag)}</li>`).join("")}</ul>
      </div>
    </a>`;

  $("#groups").innerHTML = data.groups.map((group) => `
    <section class="band theme-${esc(group.theme)}" id="${esc(group.id)}" aria-labelledby="${esc(group.id)}-title">
      <div class="shell">
        <h2 id="${esc(group.id)}-title">${esc(group.title)}</h2>
        <div class="project-list">${group.projects.map((id) => row(projectsById[id])).join("")}</div>
      </div>
    </section>`).join("");

  // Interests
  $("#interest-grid").innerHTML = data.interests.map(figure).join("");

  // Skills and contact
  $("#skills").innerHTML = data.skills.map((group) => `
    <dt>${esc(group.title)}</dt>
    <dd>${esc(group.items)}</dd>`).join("");
  const email = $("#email-link");
  email.href = `mailto:${person.email}`;
  email.textContent = person.email;
  $("#linkedin-link").href = person.linkedin;
  $("#location-line").textContent = person.location;

  $("#year").textContent = new Date().getFullYear();
})();
