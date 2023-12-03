if (window.location.pathname.endsWith('.html')) {
    var newURL = window.location.pathname.replace(/\.html$/, '');
    window.history.replaceState({}, document.title, newURL);
}
