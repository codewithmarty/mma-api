document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.querySelector('.result').textContent = `Results for ${document.getElementById('search').value.replace('-', ' ')}`