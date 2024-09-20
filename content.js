// Função para reconhecer texto em uma imagem
function recognizeTextFromImage(imgElement) {
    Tesseract.recognize(
        imgElement.src,
        'por', // Idioma português
        {
            logger: (m) => console.log(m), // Opção para ver o progresso
        }
    ).then(({ data: { text } }) => {
        console.log('Texto reconhecido:', text);
        // Imprimir o texto extraído na div de saída
        const outputDiv = document.getElementById('output');
        outputDiv.textContent += 'Texto extraído: ' + text + '\n'; // Adiciona o texto à div
    }).catch((error) => {
        console.error('Erro ao processar a imagem:', error);
    });
}

// Procurar por imagens na página
const images = document.querySelectorAll('img');

// Aplicar OCR em cada imagem encontrada
images.forEach((img) => {
    recognizeTextFromImage(img);
});
