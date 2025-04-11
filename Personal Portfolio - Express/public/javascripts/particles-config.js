document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 90, density: { enable: true, value_area: 500 } },
            color: { value: "#00BCD4" }, // Blue particles
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: { value: 0.5, random: false, anim: { enable: false } },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00BCD4", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" },
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false, mode: "push" } },
            modes: { grab: { distance: 20, line_linked: { opacity: 1 } }, push: { particles_nb: 4 }, repulse: {
          "distance": 150,
        } },
        },
        retina_detect: false,
    });
});
