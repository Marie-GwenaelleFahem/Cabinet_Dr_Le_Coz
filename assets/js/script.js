/**
 * Accessibility script for Dr. Jérôme Le Coz's website
 * Minimal JavaScript for contrast toggle and text size controls
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Contrast toggle button
  const contrastToggle = document.getElementById("contrast-toggle");
  // Text size buttons
  const textSmaller = document.getElementById("text-smaller");
  const textLarger = document.getElementById("text-larger");

  // Set initial font size from localStorage or default to 16px
  let currentFontSize = parseInt(localStorage.getItem("fontSize")) || 16;
  document.body.style.fontSize = currentFontSize + "px";

  // Handle high contrast toggle
  if (contrastToggle) {
    // Check if high contrast was previously enabled
    const highContrastEnabled = localStorage.getItem("highContrast") === "true";

    // Apply high contrast if it was previously enabled
    if (highContrastEnabled) {
      document.body.classList.add("high-contrast");
      contrastToggle.setAttribute("aria-pressed", "true");
    }

    contrastToggle.addEventListener("click", function () {
      const isPressed = this.getAttribute("aria-pressed") === "true";

      // Toggle high contrast
      document.body.classList.toggle("high-contrast");

      // Update aria-pressed state
      this.setAttribute("aria-pressed", !isPressed);

      // Announce change to screen readers
      announceChange(
        !isPressed
          ? "Mode contraste élevé activé"
          : "Mode contraste élevé désactivé"
      );

      // Save preference to localStorage
      localStorage.setItem("highContrast", !isPressed);
    });
  }

  // Text size controls
  if (textSmaller) {
    textSmaller.addEventListener("click", function () {
      if (currentFontSize > 12) {
        currentFontSize -= 2;
        updateFontSize();
        announceChange("Taille de texte diminuée");
      } else {
        announceChange("Taille minimum de texte atteinte");
      }
    });
  }

  if (textLarger) {
    textLarger.addEventListener("click", function () {
      if (currentFontSize < 24) {
        currentFontSize += 2;
        updateFontSize();
        announceChange("Taille de texte augmentée");
      } else {
        announceChange("Taille maximum de texte atteinte");
      }
    });
  }

  // Update font size and save to localStorage
  function updateFontSize() {
    document.body.style.fontSize = currentFontSize + "px";
    localStorage.setItem("fontSize", currentFontSize);
  }

  // Announce changes for screen readers
  function announceChange(message) {
    let announce = document.getElementById("a11y-announce");

    // Create the live region if it doesn't exist
    if (!announce) {
      announce = document.createElement("div");
      announce.id = "a11y-announce";
      announce.setAttribute("aria-live", "polite");
      announce.setAttribute("aria-atomic", "true");
      announce.className = "sr-only";
      document.body.appendChild(announce);
    }

    // Set the message
    announce.textContent = message;

    // Clear after a short delay
    setTimeout(() => {
      announce.textContent = "";
    }, 3000);
  }
});

// Disable animations if user prefers reduced motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("reduced-motion");
}
