function clique(clickedImage, articleId) {
    // 1. Encontra o elemento 'article' usando o ID fornecido.
    const elementoArticle = document.getElementById(articleId);

    // 2. Verifica se o elemento existe antes de prosseguir (boa prática).
    if (elementoArticle) {
        elementoArticle.classList.toggle('hidden');
        clickedImage.classList.toggle('rotated');
        
        const path = 'assets/images/';

        if (elementoArticle.classList.contains('hidden')) {
            // Conteúdo escondido -> mostrar ícone de MAIS (para abrir)
            clickedImage.src = path + 'icon-plus.svg';
        } else {
            // Conteúdo visível -> mostrar ícone de MENOS (para fechar)
            clickedImage.src = path + 'icon-minus.svg';
        }

    } else {
        // Log de erro caso o ID esteja incorreto
        console.error('Elemento article com o ID "' + articleId + '" não encontrado.');
    }
}