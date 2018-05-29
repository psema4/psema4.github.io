// app.js

window.addEventListener('load', function() {
    console.log('load');

    // read title & number of pages
    var el = document.querySelector('.pageControl');
    var title = el && el.dataset.title || '';
    var numPages = el && +el.dataset.count || 1;
    var bottom = 0;
    var els;

    // create relevant elements to generate css pages
    for (var i=0; i<numPages; i++) {
        var div = document.createElement('div');
        div.className = 'pageFooter';
        document.querySelector('.content').appendChild(div);
    }

    els = document.querySelectorAll(".pageFooter");

    els.forEach(function(el, idx) {
        el.innerText = title + ' | Page ' + (idx+1) + ' of ' + numPages;
        el.style.bottom = bottom + 'vh';
        bottom -= 100;
    });
});
