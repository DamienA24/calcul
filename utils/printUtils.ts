/**
 * Utilitaire pour l'impression de contenu
 */

/**
 * Imprime le contenu d'un élément HTML
 * @param element - L'élément HTML à imprimer
 * @param title - Le titre de la page d'impression
 */
export const printElement = (element: HTMLElement | null, title: string = "Impression"): void => {
  if (!element) {
    console.error("Aucun élément à imprimer");
    return;
  }

  // Créer une nouvelle fenêtre pour l'impression
  const printWindow = window.open("", "_blank");
  
  if (!printWindow) {
    alert("Veuillez autoriser les popups pour l'impression");
    return;
  }
  
  // Écrire le contenu HTML dans la nouvelle fenêtre
  printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page {
            size: auto;
            margin: 20mm;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          .print-container {
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          ${element.innerHTML}
        </div>
      </body>
    </html>
  `);
  
  // Fermer le document pour finaliser l'écriture
  printWindow.document.close();
  
  // Attendre que les images soient chargées avant d'imprimer
  const images = printWindow.document.querySelectorAll("img");
  let imagesLoaded = 0;
  const totalImages = images.length;
  
  // Fonction pour gérer l'impression
  function printReady() {
    if (printWindow) {
      printWindow.focus();
      setTimeout(() => {
        if (printWindow) {
          printWindow.print();
          printWindow.onafterprint = () => {
            if (printWindow) {
              printWindow.close();
            }
          };
        }
      }, 500);
    }
  }
  
  if (totalImages === 0) {
    // Pas d'images, imprimer directement
    printWindow.focus();
    setTimeout(() => {
      if (printWindow) {
        printWindow.print();
        printWindow.onafterprint = () => {
          if (printWindow) {
            printWindow.close();
          }
        };
      }
    }, 300);
  } else {
    // Attendre que toutes les images soient chargées
    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          printReady();
        }
      } else {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === totalImages) {
            printReady();
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === totalImages) {
            printReady();
          }
        };
      }
    });
  }
};

/**
 * Imprime une image directement à partir de son URL
 * @param imageUrl - L'URL de l'image à imprimer
 * @param title - Le titre de la page d'impression
 * @param altText - Le texte alternatif pour l'image
 */
export const printImage = (imageUrl: string, title: string = "Impression", altText: string = ""): void => {
  // Créer une nouvelle fenêtre pour l'impression
  const printWindow = window.open("", "_blank");
  
  if (!printWindow) {
    alert("Veuillez autoriser les popups pour l'impression");
    return;
  }
  
  // Écrire le contenu HTML dans la nouvelle fenêtre
  printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page {
            size: auto;
            margin: 20mm;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          .print-container {
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          <img src="${imageUrl}" alt="${altText}" />
        </div>
      </body>
    </html>
  `);
  
  // Fermer le document pour finaliser l'écriture
  printWindow.document.close();
  
  // Attendre que l'image soit chargée avant d'imprimer
  const img = printWindow.document.querySelector("img");
  if (img) {
    if (img.complete) {
      printWindow.focus();
      setTimeout(() => {
        if (printWindow) {
          printWindow.print();
          printWindow.onafterprint = () => {
            if (printWindow) {
              printWindow.close();
            }
          };
        }
      }, 300);
    } else {
      img.onload = () => {
        if (printWindow) {
          printWindow.focus();
          setTimeout(() => {
            if (printWindow) {
              printWindow.print();
              printWindow.onafterprint = () => {
                if (printWindow) {
                  printWindow.close();
                }
              };
            }
          }, 300);
        }
      };
      img.onerror = () => {
        console.error("Erreur lors du chargement de l'image");
        if (printWindow) {
          printWindow.focus();
          setTimeout(() => {
            if (printWindow) {
              printWindow.print();
              printWindow.onafterprint = () => {
                if (printWindow) {
                  printWindow.close();
                }
              };
            }
          }, 300);
        }
      };
    }
  } else {
    // Fallback si l'image n'est pas trouvée
    printWindow.focus();
    setTimeout(() => {
      if (printWindow) {
        printWindow.print();
        printWindow.onafterprint = () => {
          if (printWindow) {
            printWindow.close();
          }
        };
      }
    }, 500);
  }
};
