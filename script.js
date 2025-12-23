const navlinks = document.querySelectorAll(".nav-links a")
const sections = document.querySelectorAll(".section")

navlinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = link.dataset.section;

        navlinks.forEach(l => l.classList.remove("active"));

        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        link.classList.add("active");

        document.getElementById(target).classList.add("active-section")
    })
})