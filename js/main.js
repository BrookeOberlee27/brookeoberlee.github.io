(() => {
  const data = window.PORTFOLIO;
  const $ = (selector) => document.querySelector(selector);

  $("#hero-kicker").textContent = data.person.heroKicker;
  $("#hero-title").textContent = data.person.heroTitle;
  $("#hero-copy").textContent = data.person.heroCopy;
  $("#linkedin-link").href = data.person.linkedin;
  $("#email-link").href = `mailto:${data.person.email}`;
  $("#about-title").textContent = data.person.aboutTitle;
  $("#about-copy").textContent = data.person.aboutCopy;
  $("#year").textContent = new Date().getFullYear();

  const meta = [data.person.role, data.person.school, `Graduating ${data.person.graduation}`];
  $("#hero-meta").innerHTML = meta.map(item => `<span>${item}</span>`).join("");

  $("#project-grid").innerHTML = data.projects.map(project => `
    <a class="project-card" href="project.html?id=${encodeURIComponent(project.id)}" aria-label="View ${project.title} case study">
      <div class="project-media">
        <img src="${project.hero}" alt="${project.heroAlt}" loading="lazy" />
      </div>
      <div class="project-info">
        <div>
          <h3>${project.title}</h3>
          <p>${project.cardDescription}</p>
          <div class="tag-row">${project.tags.slice(0,4).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  `).join("");

  $("#experience-list").innerHTML = data.experience.map(item => `
    <article class="timeline-item">
      <div>
        <h3>${item.role}</h3>
        <p>${item.company}</p>
      </div>
      <p>${item.summary}</p>
      <p class="period">${item.period}</p>
    </article>
  `).join("");

  $("#skill-groups").innerHTML = data.skills.map(group => `
    <section class="skill-group">
      <h3>${group.title}</h3>
      <p>${group.items}</p>
    </section>
  `).join("");
})();
