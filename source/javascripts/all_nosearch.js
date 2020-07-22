//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $(".dark-box > .lang-selector");
  elem.width(elem.parent().width());
}

$(function () {
  loadToc($("#toc"), ".toc-link", ".toc-list-h2", 10);
  setupLanguages($("body").data("languages"));
  $(".content").imagesLoaded(function () {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function () {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();

  // Try Button
  var matches = document.querySelectorAll(".content blockquote > p");
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (match.innerText === "Code samples") {
      match.parentNode.insertAdjacentHTML(
        "afterbegin",
        '<div style="display: flex;justify-content: space-between;padding: 13px 2em;">'+match.innerHTML+'<button style="background: green;border: none;padding: 5px;border-radius: 4px;class="try-it-out-button">Try it out!</button></div>'
      );

      match.remove();
    }
  }
});

window.onpopstate = function () {
  activateLanguage(getLanguageFromQueryString());
};
