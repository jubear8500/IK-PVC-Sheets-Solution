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

  // View More Videos Button
  const viewMoreVideosBtn = document.getElementById("viewMoreVideosBtn");
  const expandedVideos = document.getElementById("expanded-videos");

  if (viewMoreVideosBtn && expandedVideos) {
    viewMoreVideosBtn.addEventListener("click", function () {
      tabsSection.style.display = "none";
      expandedVideos.style.display = "block";

      // Smooth scroll to the expanded videos section
      window.scrollTo({
        top: expandedVideos.offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  // View More Portfolio Button
  const viewMorePortfolioBtn = document.getElementById("viewMorePortfolioBtn");
  const expandedPortfolio = document.getElementById("expanded-portfolio");

  if (viewMorePortfolioBtn && expandedPortfolio) {
    viewMorePortfolioBtn.addEventListener("click", function () {
      tabsSection.style.display = "none";
      expandedPortfolio.style.display = "block";

      // Smooth scroll to the expanded portfolio section
      window.scrollTo({
        top: expandedPortfolio.offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  // Back to Tabs Buttons
  const backToTabsBtn = document.getElementById("backToTabsBtn");
  const backToVideosTabBtn = document.getElementById("backToVideosTabBtn");
  const backToPortfolioTabBtn = document.getElementById("backToPortfolioTabBtn");

  if (backToTabsBtn && expandedGallery) {
    backToTabsBtn.addEventListener("click", function () {
      expandedGallery.style.display = "none";
      tabsSection.style.display = "block";

      // Switch to images tab
      tabBtns.forEach((b) => b.classList.remove("active"));
      document.querySelector('[data-tab="images"]').classList.add("active");
      tabPanes.forEach((p) => p.classList.remove("active"));
      document.getElementById("images-tab").classList.add("active");

      // Smooth scroll back to the tabs section
      window.scrollTo({
        top: tabsSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  if (backToVideosTabBtn && expandedVideos) {
    backToVideosTabBtn.addEventListener("click", function () {
      expandedVideos.style.display = "none";
      tabsSection.style.display = "block";

      // Switch to videos tab
      tabBtns.forEach((b) => b.classList.remove("active"));
      document.querySelector('[data-tab="videos"]').classList.add("active");
      tabPanes.forEach((p) => p.classList.remove("active"));
      document.getElementById("videos-tab").classList.add("active");

      // Smooth scroll back to the tabs section
      window.scrollTo({
        top: tabsSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  if (backToPortfolioTabBtn && expandedPortfolio) {
    backToPortfolioTabBtn.addEventListener("click", function () {
      expandedPortfolio.style.display = "none";
      tabsSection.style.display = "block";

      // Switch to portfolio tab
      tabBtns.forEach((b) => b.classList.remove("active"));
      document.querySelector('[data-tab="portfolio"]').classList.add("active");
      tabPanes.forEach((p) => p.classList.remove("active"));
      document.getElementById("portfolio-tab").classList.add("active");

      // Smooth scroll back to the tabs section
      window.scrollTo({
        top: tabsSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  // Image Modal functionality
  const imageModal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeModal = document.getElementById("closeModal");

  // Get all gallery images
  const galleryImages = document.querySelectorAll(
    ".expanded-image-item img, .expanded-portfolio-item img"
  );

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      imageModal.style.display = "block";
      modalImg.src = this.getAttribute("data-highres") || this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Close modal when clicking on X
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      imageModal.style.display = "none";
    });
  }

  // Close modal when clicking outside the image
  window.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      imageModal.style.display = "none";
    }
  });

  // Video Modal functionality
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const videoCaption = document.getElementById("videoModalCaption");
  const closeVideoModal = document.getElementById("closeVideoModal");

  // Get all video items
  const videoItems = document.querySelectorAll(".expanded-video-item");

  videoItems.forEach((item) => {
    item.addEventListener("click", function () {
      const videoSrc = this.getAttribute("data-video");
      const title = this.querySelector("h3").textContent;
      const description = this.querySelector("p").textContent;
      
      videoModal.style.display = "block";
      modalVideo.src = videoSrc;
      videoCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
      
      // Play the video
      setTimeout(() => {
        modalVideo.play();
      }, 300);
    });
  });

  // Close video modal when clicking on X
  if (closeVideoModal) {
    closeVideoModal.addEventListener("click", function () {
      videoModal.style.display = "none";
      modalVideo.pause();
      modalVideo.currentTime = 0;
    });
  }

  // Close video modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });

  // Gallery filtering for images
  const imageFilterBtns = document.querySelectorAll("#expanded-gallery .filter-btn");
  const imageItems = document.querySelectorAll("#expanded-gallery .expanded-image-item");

  imageFilterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      imageFilterBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Show or hide image items based on filter
      imageItems.forEach((item) => {
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

  // Gallery filtering for videos
  const videoFilterBtns = document.querySelectorAll("#expanded-videos .filter-btn");
  const videoItemsAll = document.querySelectorAll("#expanded-videos .expanded-video-item");

  videoFilterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      videoFilterBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Show or hide video items based on filter
      videoItemsAll.forEach((item) => {
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

  // Gallery filtering for portfolio
  const portfolioFilterBtns = document.querySelectorAll("#expanded-portfolio .filter-btn");
  const portfolioItemsAll = document.querySelectorAll("#expanded-portfolio .expanded-portfolio-item");

  portfolioFilterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      portfolioFilterBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Show or hide portfolio items based on filter
      portfolioItemsAll.forEach((item) => {
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

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      // Hide any expanded sections
      document.querySelectorAll(".expanded-gallery, .expanded-section").forEach(section => {
        section.style.display = "none";
      });

      // Show the tabs section
      tabsSection.style.display = "block";

      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

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