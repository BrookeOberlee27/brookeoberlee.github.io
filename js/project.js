(() => {
  const data = window.PORTFOLIO;
  const { esc, figure, bullets } = window.UI;
  const $ = (selector) => document.querySelector(selector);

  $("#year").textContent = new Date().getFullYear();

  const id = new URLSearchParams(window.location.search).get("id");
  const project = data.projects.find((item) => item.id === id);

  if (!project) {
    $("#project-error").hidden = false;
    return;
  }

  // Order used for the "next project" link matches the table of contents
  const order = data.groups.flatMap((group) => group.projects);
  const nextId = order[(order.indexOf(project.id) + 1) % order.length];
  const next = data.projects.find((item) => item.id === nextId);
  const group = data.groups.find((item) => item.projects.includes(project.id));

  document.title = `${project.title} | ${data.person.name}`;
  $("#project-title").textContent = project.title;
  $("#project-role").textContent = project.role;
  $("#project-summary").textContent = project.summary;
  if (group) $("#back-link").href = `index.html#${group.id}`;

  $("#project-sections").innerHTML = project.sections.map((section) => `
    <section class="slide">
      <div class="slide-text">
        <h2>${esc(section.title)}</h2>
        ${section.intro ? `<p class="intro">${esc(section.intro)}</p>` : ""}
        ${bullets(section.bullets)}
      </div>
      <div class="media-grid">${(section.media || []).map(figure).join("")}</div>
    </section>`).join("");

  const nextLink = $("#next-link");
  nextLink.href = `project.html?id=${encodeURIComponent(next.id)}`;
  nextLink.textContent = next.title;

  $("#project-page").hidden = false;
})();
