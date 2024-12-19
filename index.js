//get location
function getLocation() {
            const x = document.getElementById("demo");
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            const x = document.getElementById("demo");
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }

        // Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Function to delete a cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Example usage:
// Set a cookie
setCookie("user", "John Doe", 7); // Set cookie "user" with value "John Doe" for 7 days

// Get a cookie
const user = getCookie("user");
console.log(user); // Output: "John Doe"

// Delete a cookie
deleteCookie("user");

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');
  
    menuToggle.addEventListener('click', function() {
      navBar.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navBar.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navBar.classList.contains('active')) {
        navBar.classList.remove('active');
      }
    });
  
    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navBar.classList.remove('active');
      }
    });
  });
