function ajoutPanier(nom, prix) {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push({ nom, prix });
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier !");
}

function afficherPanier() {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let zonePanier = document.getElementById("panier");
    let total = 0;

    zonePanier.innerHTML = "";

    panier.forEach(item => {
        zonePanier.innerHTML += `<p>${item.nom} - ${item.prix}€</p>`;
        total += item.prix;
    });

    document.getElementById("total").innerText = "Total : " + total + "€";
}

if (window.location.pathname.includes("panier.html")) {
    afficherPanier();
}
