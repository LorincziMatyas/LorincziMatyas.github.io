/** @format */

// Animation for scroll reveal
document.addEventListener("DOMContentLoaded", function () {
	// Create particles
	createParticles();

	createPageParticles();

	const menuToggle = document.querySelector(".menu-toggle");
	const navList = document.querySelector(".nav-list");

	// Toggle mobile menu
	menuToggle.addEventListener("click", function () {
		navList.classList.toggle("active");
		menuToggle.classList.toggle("active");
	});

	// Close menu when clicking on a link
	const navLinks = document.querySelectorAll(".nav-list a");
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			navList.classList.remove("active");
			menuToggle.classList.remove("active");
		});
	});

	// Close menu when clicking outside
	document.addEventListener("click", function (event) {
		if (
			!event.target.closest("nav") &&
			navList.classList.contains("active")
		) {
			navList.classList.remove("active");
			menuToggle.classList.remove("active");
		}
	});

	// Add scroll reveal animation
	const sections = document.querySelectorAll("section");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	sections.forEach((section) => {
		observer.observe(section);
	});

	// Animate timeline items
	const timelineItems = document.querySelectorAll(".timeline-item");
	const timelineObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.classList.contains("left")) {
						entry.target.style.animation =
							"revealFromLeft 0.8s forwards";
					} else {
						entry.target.style.animation =
							"revealFromRight 0.8s forwards";
					}
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	timelineItems.forEach((item) => {
		timelineObserver.observe(item);
	});

	// Progress bars animation
	const languageCards = document.querySelectorAll(".language-card");
	const progressObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const progressBars =
						entry.target.querySelectorAll(".level-progress");
					progressBars.forEach((bar) => {
						const finalWidth = bar.getAttribute("data-width");
						bar.style.width = "0";
						setTimeout(() => {
							bar.style.width = finalWidth;
						}, 300);
					});
				}
			});
		},
		{
			threshold: 0.5,
		}
	);

	languageCards.forEach((card) => {
		progressObserver.observe(card);
	});

	// Setup smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			document.querySelector(targetId).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
});

// Create particles for header background
function createParticles() {
	const particlesContainer = document.querySelector(".particles");
	const numberOfParticles = 50;

	for (let i = 0; i < numberOfParticles; i++) {
		const particle = document.createElement("div");
		particle.classList.add("particle");

		// Random positions
		const posX = Math.random() * 100;
		const posY = Math.random() * 100;
		const size = Math.random() * 5 + 2;
		const duration = Math.random() * 20 + 10;
		const delay = Math.random() * 10;

		particle.style.left = `${posX}%`;
		particle.style.top = `${posY}%`;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.animationDuration = `${duration}s`;
		particle.style.animationDelay = `${delay}s`;

		particlesContainer.appendChild(particle);
	}
}

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function () {
	const themeToggle = document.querySelector(".theme-toggle");

	themeToggle.addEventListener("click", function () {
		document.body.classList.toggle("light-theme");
		const icon = this.querySelector("i");

		if (document.body.classList.contains("light-theme")) {
			icon.className = "fas fa-moon";
			document.documentElement.style.setProperty("--primary", "#f5f5f5");
			document.documentElement.style.setProperty(
				"--secondary",
				"#7b1fa2"
			);
			document.documentElement.style.setProperty("--accent", "#009688");
			document.documentElement.style.setProperty("--light", "#ffffff");
			document.documentElement.style.setProperty("--dark", "#e0e0e0");
			document.documentElement.style.setProperty(
				"--text-dark",
				"#333333"
			);
			document.documentElement.style.setProperty(
				"--text-light",
				"#121212"
			);
			document.documentElement.style.setProperty("--card-bg", "#f0f0f0");
			document.documentElement.style.setProperty(
				"--timeline-bg",
				"#f0f0f0"
			);
			document.documentElement.style.setProperty("--nav-bg", "#e0e0e0");
		} else {
			icon.className = "fas fa-sun";
			document.documentElement.style.setProperty("--primary", "#121212");
			document.documentElement.style.setProperty(
				"--secondary",
				"#bb86fc"
			);
			document.documentElement.style.setProperty("--accent", "#03dac6");
			document.documentElement.style.setProperty("--light", "#1e1e1e");
			document.documentElement.style.setProperty("--dark", "#121212");
			document.documentElement.style.setProperty(
				"--text-dark",
				"#e1e1e1"
			);
			document.documentElement.style.setProperty(
				"--text-light",
				"#f5f5f5"
			);
			document.documentElement.style.setProperty("--card-bg", "#2d2d2d");
			document.documentElement.style.setProperty(
				"--timeline-bg",
				"#2d2d2d"
			);
			document.documentElement.style.setProperty("--nav-bg", "#1a1a1a");
		}
	});
});

// Add this function to your index.js file

// Create particles for the entire page
function createPageParticles() {
	const particlesContainer = document.querySelector(".page-particles");
	const numberOfParticles = 100; // More particles for the full page

	for (let i = 0; i < numberOfParticles; i++) {
		const particle = document.createElement("div");
		particle.classList.add("page-particle");

		// Random positions
		const posX = Math.random() * 100;
		const posY = Math.random() * 100;
		const size = Math.random() * 12 + 1;
		const duration = Math.random() * 20 + 10; // Longer animation duration
		const delay = Math.random() * 10;

		// Random movement direction and distance
		const moveX = (Math.random() - 0.5) * 1500;
		const moveY = (Math.random() - 0.5) * 1500;

		particle.style.left = `${posX}%`;
		particle.style.top = `${posY}%`;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.animationDuration = `${duration}s`;
		particle.style.animationDelay = `${delay}s`;
		particle.style.setProperty("--move-x", `${moveX}px`);
		particle.style.setProperty("--move-y", `${moveY}px`);

		// Add some variety to colors
		if (Math.random() > 0.7) {
			particle.style.backgroundColor = "var(--accent)";
		}

		particlesContainer.appendChild(particle);
	}
}
