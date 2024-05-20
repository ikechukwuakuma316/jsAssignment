// Get the input elements
const fileInputElement = document.getElementById('fileInput');
const imageContainerElement = document.getElementById('imageContainer');
const previewButtonElement = document.getElementById('previewButton');

previewButtonElement.addEventListener('click', function() {
    // Clear any existing content in the image container
    imageContainerElement.innerHTML = '';

    const file = fileInputElement.files[0];
    if (file) {
        // Create an image element
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = 'Image Preview';

        // Create a download button
        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download Image';
        downloadButton.classList.add('download-button');

        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = img.src;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        // Add the image and download button to the image container
        imageContainerElement.appendChild(img);
        imageContainerElement.appendChild(downloadButton);
    } else {
        alert('Please select a file.');
    }
});