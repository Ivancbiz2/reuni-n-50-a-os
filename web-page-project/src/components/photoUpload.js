function initializePhotoUpload() {
    const fileInput = document.getElementById('file-input');
    const previewContainer = document.getElementById('preview-container');

    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        previewContainer.innerHTML = ''; // Clear previous previews

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                img.style.width = '100px'; // Set a fixed width for preview
                img.style.margin = '5px';
                previewContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
}

export { initializePhotoUpload };