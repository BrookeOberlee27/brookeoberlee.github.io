/*
  Shared helpers used by main.js and project.js.
  You should not need to edit this file to change content.
*/
window.UI = (() => {
  const esc = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  // Folder names and file names contain spaces, so encode paths before using them.
  const url = (path) => encodeURI(path);

  const isVideo = (path) => /\.(mp4|mov)$/i.test(path);
  const isMov = (path) => /\.mov$/i.test(path);

  /*
    Video sources. For .mov files the browser first tries a .mp4 with the same
    name (browsers other than Safari often cannot play iPhone .mov files),
    then falls back to the original .mov. To fix playback, convert a clip to
    .mp4 and put it next to the .mov; no code change is needed.
  */
  const videoSources = (path, fragment = "") => {
    const mp4 = isMov(path) ? path.replace(/\.mov$/i, ".mp4") : path;
    const first = `<source src="${esc(url(mp4) + fragment)}" type="video/mp4">`;
    const second = isMov(path) ? `<source src="${esc(url(path) + fragment)}">` : "";
    return first + second;
  };

  const figure = (item) => {
    const caption = item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : "";
    if (item.type === "video") {
      return `<figure class="media media-video">
        <video controls playsinline preload="metadata" aria-label="${esc(item.alt)}">${videoSources(item.src)}</video>${caption}
      </figure>`;
    }
    return `<figure class="media">
      <img src="${esc(url(item.src))}" alt="${esc(item.alt)}" loading="lazy" decoding="async">${caption}
    </figure>`;
  };

  // Card thumbnails can be a still image or the first frame of a video.
  const thumb = (path, alt) => {
    if (isVideo(path)) {
      return `<video muted playsinline preload="metadata" aria-label="${esc(alt)}">${videoSources(path, "#t=0.1")}</video>`;
    }
    return `<img src="${esc(url(path))}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  };

  function bullets(items) {
    if (!items || !items.length) return "";
    return `<ul>${items.map((item) => {
      if (typeof item === "string") return `<li>${esc(item)}</li>`;
      return `<li>${esc(item.text)}${bullets(item.sub)}</li>`;
    }).join("")}</ul>`;
  }

  // Click an image to see it larger (useful for engineering drawings).
  const enableLightbox = () => {
    const box = document.createElement("dialog");
    box.className = "lightbox";
    box.setAttribute("aria-label", "Enlarged image");
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
    box.addEventListener("click", () => box.close());
    document.addEventListener("click", (event) => {
      const img = event.target.closest && event.target.closest(".media img");
      if (!img || typeof box.showModal !== "function") return;
      const big = box.querySelector("img");
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      box.showModal();
    });
  };

  enableLightbox();

  return { esc, url, figure, thumb, bullets };
})();
