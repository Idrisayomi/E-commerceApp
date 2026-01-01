document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const iconPath = document.getElementById("iconPath");

  // Moon and sun paths
  const moonPath = "M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z";
  const sunPath  = "M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-5.64l1.42-1.42M4.22 19.78l1.42-1.42M19.78 19.78l-1.42-1.42M4.22 4.22l1.42 1.42M12 6a6 6 0 100 12 6 6 0 000-12z";

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    iconPath.setAttribute("d", sunPath);
  } else {
    iconPath.setAttribute("d", moonPath);
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      iconPath.setAttribute("d", sunPath); // show sun in dark mode
    } else {
      localStorage.setItem("theme", "light");
      iconPath.setAttribute("d", moonPath); // show moon in light mode
    }
  });
});
