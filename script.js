const form = document.getElementById("imc-form");
const result = document.getElementById("result");
const imcValue = document.getElementById("imc-value");
const imcStatus = document.getElementById("imc-status");
const imcAdvice = document.getElementById("imc-advice");

form.addEventListener("submit", e => {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    const imc = weight / (height * height / 10000);

    imcValue.textContent = imc.toFixed(2);

    if (imc < 18.5) {
        imcStatus.textContent = "Vous êtes en sous-poids";
        imcAdvice.textContent = "Essayez d'ajouter des calories saines à votre alimentation et de vous entraîner régulièrement pour prendre du poidsde manière saine.";
        result.classList.add("underweight");
    } else if (imc >= 18.5 && imc < 25) {
        imcStatus.textContent = "Vous êtes en poids normal";
        imcAdvice.textContent = "Félicitations ! Continuez à manger équilibré et à vous entraîner pour maintenir votre poids.";
        result.classList.add("normal");
    } else if (imc >= 25 && imc < 30) {
        imcStatus.textContent = "Vous êtes en surpoids";
        imcAdvice.textContent = "Essayez de réduire votre consommation de calories et de vous entraîner régulièrement pour perdre du poids de manière saine.";
        result.classList.add("overweight");
    } else if (imc >= 30) {
        imcStatus.textContent = "Vous êtes en obésité";
        imcAdvice.textContent = "Il est important de consulter un professionnel de la santé pour établir un plan d'alimentation et d'exercice adapté à vos besoins.";
        result.classList.add("obese");
    }

    result.style.display = "block";

});

form.addEventListener("input", e => {
    result.style.display = "none";
    imcValue.textContent = "";
    imcStatus.textContent = "";
    imcAdvice.textContent = "";
    result.classList.remove("underweight", "normal", "overweight", "obese");
});

// Ajout d'une animation d'effacement des résultats lorsque l'utilisateur entre de nouvelles valeurs
form.addEventListener("input", e => {
    result.style.opacity = 0;
    setTimeout(() => {
        result.style.display = "none";
        imcValue.textContent = "";
        imcStatus.textContent = "";
        imcAdvice.textContent = "";
        result.classList.remove("underweight", "normal", "overweight", "obese");
        result.style.opacity = 1;
    }, 300);
});

// Ajout d'une animation de slide-in lorsque les résultats sont affichés
result.addEventListener("transitionend", e => {
    if (e.propertyName === "display" && result.style.display === "block") {
        result.style.transform = "translateY(-20px)";
        setTimeout(() => {
            result.style.transform = "translateY(0)";
        }, 100);
    }
});

// Ajout d'un écouteur d'événement pour détecter les changements des préférences d'accessibilité
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (e.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});
