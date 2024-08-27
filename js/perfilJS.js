document.addEventListener('DOMContentLoaded', () => {
    const imagemField = document.getElementById('imagemField');
    const imagemPreview = document.getElementById('imagemPreview');
    const imgPerfilElements = document.querySelectorAll('.imgPerfil');
    const saveButton = document.getElementById('saveButton');


    const usuario = document.getElementById('usuario')
    const savedValue = localStorage.getItem("inputValue")
    if (savedValue) {
        usuario.value = savedValue
    }
    usuario.addEventListener("input", function() {
        localStorage.setItem("inputValue", usuario.value)
    })

    const sobre = document.getElementById('sobre')
    const savedValue2 = localStorage.getItem("textAreaValue")
    if (savedValue2) {
        sobre.value = savedValue2
    }
    sobre.addEventListener("input", function() {
        localStorage.setItem("textAreaValue", sobre.value)
    })

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

    const savedImage = localStorage.getItem('editPerfil');
    if (savedImage) {
        imagemPreview.src = savedImage;
        imgPerfilElements.forEach(img => {
            img.src = savedImage;
        });
    }

    saveButton.addEventListener('click', () => {
        const contentPerfil = imagemPreview.src;
        localStorage.setItem('editPerfil', contentPerfil);
    });
});

let minhaConta = document.getElementById('minhaConta')
let divMinhaConta = document.getElementById('divMinhaConta')

let Privacidade = document.getElementById('Privacidade')
let divPrivacidade = document.getElementById('divPrivacidade')

minhaConta.addEventListener('click', ()=> {
    divMinhaConta.classList.add('divMinhaContaTrue')
    divPrivacidade.classList.remove('divPrivacidadeTrue')
})


Privacidade.addEventListener('click', ()=> {
    divPrivacidade.classList.add('divPrivacidadeTrue')
    divMinhaConta.classList.remove('divMinhaContaTrue')
})