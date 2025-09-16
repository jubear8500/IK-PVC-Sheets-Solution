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

        // View More Images Button
        const viewMoreBtn = document.getElementById("viewMoreBtn");
        const expandedGallery = document.getElementById("expanded-gallery");
        const tabsSection = document.getElementById("gallery");

        if (viewMoreBtn && expandedGallery) {
          viewMoreBtn.addEventListener("click", function () {
            tabsSection.style.display = "none";
            expandedGallery.style.display = "block";

            // Smooth scroll to the expanded gallery
            window.scrollTo({
              top: expandedGallery.offsetTop - 80,
              behavior: "smooth",
            });
          });
        }

        // Back to Tabs Button
        const backToTabsBtn = document.getElementById("backToTabsBtn");

        if (backToTabsBtn && expandedGallery) {
          backToTabsBtn.addEventListener("click", function () {
            expandedGallery.style.display = "none";
            tabsSection.style.display = "block";

            // Smooth scroll back to the tabs section
            window.scrollTo({
              top: tabsSection.offsetTop - 80,
              behavior: "smooth",
            });
          });
        }

        // Image Modal functionality
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("modalCaption");
        const closeModal = document.getElementById("closeModal");

        // Get all gallery images
        const galleryImages = document.querySelectorAll(
          ".expanded-image-item img"
        );

        galleryImages.forEach((img) => {
          img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-highres");
            captionText.innerHTML = this.alt;
          });
        });

        // Close modal when clicking on X
        if (closeModal) {
          closeModal.addEventListener("click", function () {
            modal.style.display = "none";
          });
        }

        // Close modal when clicking outside the image
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });

        // Gallery filtering
        const filterBtns = document.querySelectorAll(".filter-btn");
        const galleryItems = document.querySelectorAll(".expanded-image-item");

        filterBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            // Remove active class from all buttons
            filterBtns.forEach((b) => b.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Get filter value
            const filterValue = this.getAttribute("data-filter");

            // Show or hide gallery items based on filter
            galleryItems.forEach((item) => {
              if (
                filterValue === "all" ||
                item.getAttribute("data-category") === filterValue
              ) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
            });
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

            if (targetId === "#gallery") {
              // Special handling for gallery link
              expandedGallery.style.display = "none";
              tabsSection.style.display = "block";
            }

            const targetElement = document.querySelector(targetId);

            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            const mainNav = document.getElementById("mainNav");
            if (mainNav.classList.contains("active")) {
              mainNav.classList.remove("active");
            }
          });
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById("menuToggle");
        const mainNav = document.getElementById("mainNav");

        if (menuToggle && mainNav) {
          menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
          });
        }

        // Back to top button
        const backToTopBtn = document.getElementById("backToTop");

        window.addEventListener("scroll", function () {
          if (window.pageYOffset > 300) {
            backToTopBtn.classList.add("visible");
          } else {
            backToTopBtn.classList.remove("visible");
          }
        });

        if (backToTopBtn) {
          backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          });
        }
      });