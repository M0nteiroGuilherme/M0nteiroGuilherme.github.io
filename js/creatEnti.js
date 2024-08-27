const imagemPreview = document.getElementById('imgEnti')
const imagemField = document.getElementById('imagemField')
const imgPerfilElements = document.querySelectorAll('.imgPerfil');

const loadImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const dataUrl = fileReader.result;
            imagemPreview.src = dataUrl;
            imgPerfilElements.forEach(img => {
                img.src = dataUrl;
            });
        };
        fileReader.readAsDataURL(file);
    }
};


imagemField.addEventListener('change', loadImagem);