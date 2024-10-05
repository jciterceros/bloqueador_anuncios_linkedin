function blockAds() {
    // Seleciona todos os spans com o texto "Promovido"
    let promotedSpans = document.querySelectorAll('span');
    // console.log(promotedSpans);
  
    promotedSpans.forEach(span => {
      if (span.innerText.includes("Promovido")) {

        // Subindo na árvore DOM para encontrar a <div> principal
        let DivPrincipal = span.closest('.feed-shared-update-v2__control-menu-container');
        console.log(DivPrincipal);
  
        if (DivPrincipal) {
            // Finalmente, remove a div que contém o "Promovido"
            DivPrincipal.remove();
          }
      }
    });
  }
  
  // Bloqueia os anúncios a cada intervalo de tempo para garantir que os novos anúncios
  // sejam removidos, mesmo fazendo scroll na página
  setInterval(blockAds, 2000);