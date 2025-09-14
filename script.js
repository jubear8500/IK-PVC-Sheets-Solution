// Tab functionality
      document.addEventListener("DOMContentLoaded", function () {
        const tabBtns = document.querySelectorAll(".tab-btn");
        const tabPanes = document.querySelectorAll(".tab-pane");

        tabBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach((b) => b.classList.remove("active"));
            tabPanes.forEach((p) => p.classList.remove("active"));

            // Add active class to clicked button
            btn.classList.add("active");

            // Show corresponding tab pane
            const tabId = btn.getAttribute("data-tab");
            document.getElementById(`${tabId}-tab`).classList.add("active");
          });
        });

        // Form submission
        const contactForm = document.getElementById("contactForm");
        if (contactForm) {
          contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We will contact you soon.");
            contactForm.reset();
          });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll("nav a").forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          });
        });
      });