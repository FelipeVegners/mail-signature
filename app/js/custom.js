$("#font-size, #image-size, #image-shape").slider();

let sourceCode = document.getElementById('signature-preview').outerHTML;
let sourceCodeField = document.getElementById('signature-source-code');
sourceCodeField.value = sourceCode;
