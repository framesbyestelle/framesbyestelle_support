(function () {
  'use strict';

  /* Highlight the active tab based on the current file */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar-tabs a').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop() || 'index.html';
    if (href === currentFile) link.classList.add('active');
  });

  /* Coffee amount picker (visual only — the actual charge happens on Buy Me a Coffee) */
  var picker = document.querySelector('.coffee-picker');
  if (picker) {
    var buttons = picker.querySelectorAll('button');
    var bmcLink = document.querySelector('.coffee-card [data-bmc-link]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        if (bmcLink) {
          var count = btn.dataset.count;
          bmcLink.textContent = '☕️  Buy ' + count + (count === '1' ? ' coffee' : ' coffees');
        }
      });
    });
  }
})();
