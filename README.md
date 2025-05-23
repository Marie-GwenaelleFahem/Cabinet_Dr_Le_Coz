# ♿ Cabinet du docteur Jérôme Le Coz

## 🎯 Objectif
Développement d’une application web **ultra-légère** (HTML/CSS/JS minimal), respectant les normes **WCAG 2.1 AAA**, pensée pour fonctionner :
- Sans frameworks modernes
- Sur des machines anciennes
- Avec des connexions lentes (modem 56k)

---

## Équipe
- **Lead dev** : Marie-Gwenaëlle
- Mehdi – Page d'accueil 
- Julie – Page “Urgences & numéros utiles” 
- Jonathan – Page "Info Pratiques"
- Rosine – Tests / optimisation

---

## Stack utilisée
- HTML5 (sémantique)
- CSS3 (minimal, responsive)
- JavaScript (optionnel, non bloquant)
- GitHub Pages (hébergement)
- GitHub Actions (CI/CD)

---

## Accessibilité
Normes respectées :
- 🔹 Balises sémantiques
- 🔹 Lecture linéaire au clavier
- 🔹 Contraste AAA
- 🔹 Navigation clavier à 100%
- 🔹 Support lecteur d’écran (NVDA, VoiceOver)
- 🔹 ARIA uniquement si nécessaire
- 🔹 Message d’alerte pour navigateurs sans JS (`<noscript>`)

---

## Déploiement
Application accessible ici :  
🔗 **[https://marie-gwenaellefahem.github.io/Cabinet_Dr_Le_Coz/]**
Déploiement automatique via **GitHub Actions** à chaque `push` sur la branche `main`.

---

## Audit qualité
Outils utilisés :
- [x] Lighthouse
- [x] PageSpeed Insights
- [x] DevTools (simulateur 56k)
- [x] WAVE Tool (accessibilité)
- [x] W3C HTML Validator

---

## Structure du code
```plaintext
/index.html
/infos-pratiques.html
/urgences.html
/assets/css/styles.css
/assets/js/app.js
/assets/images/
/.github/workflows/deploy.yml
README.md
