// Delete social field

var socialField = document.querySelectorAll('.social-link');

socialField.forEach(function (el) {
    var closeBtn = el.querySelectorAll(".delete-link")[0];

    el.addEventListener('mouseover', function () {
        closeBtn.style.opacity = 1;
    });
    el.addEventListener('mouseout', function () {
        closeBtn.style.opacity = 0;
    });

    closeBtn.addEventListener("click", function () {
        this.parentElement.parentElement.style.display = 'none';
        console.log('delete');
    })
});


$("#font-size, #image-size, #image-shape").slider();

let sourceCode = document.getElementById('signature-preview').outerHTML;
let sourceCodeField = document.getElementById('signature-source-code');
sourceCodeField.value = sourceCode;
