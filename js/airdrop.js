const headers = document.querySelectorAll('.accordion-header');
let workLine = JSON.parse(localStorage.getItem('axionis'));

if (!workLine) {
    // Redirect to index.html if workLine does not exist
    window.location.href = "index.html";
}else{
    document.getElementById('name').innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${workLine.name}`;
    document.getElementById('textToCopy').innerHTML = workLine.id;
}
