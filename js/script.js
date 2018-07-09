var link = document.querySelector(".feedback");

   	  var popup = document.querySelector(".modal");

   	  var close = popup.querySelector(".modal-content-close");

   	  var form = popup.querySelector("form");

   	  var login = popup.querySelector("[name=name]");

   	  var email = popup.querySelector("[name=email]");

   	  var storage = {
   	  	login:"",
   	  	email:""
   	  };

   	  storage.login=localStorage.getItem("login");
   	  storage.email=localStorage.getItem("email");
   	  var feedback = popup.querySelector("[name=comment]")

   	  link.addEventListener("click", function(event) {
   	  	event.preventDefault();
   	  	popup.classList.add("modal-content-show");
   	  	if (storage.login && storage.email) {
          login.value = storage.login;
          email.value = storage.email;
          feedback.focus();
        } else {
          login.focus();
        }
      });
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!login.value || !email.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
          } else {
          localStorage.setItem("login", login.value);
          localStorage.setItem("email", email.value);
        }
      });
       window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });

      var mapOpen = document.querySelector(".map-cover");

      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");

        mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("map-active");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("map-active");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("map-active")) {
            mapPopup.classList.remove("map-active");
          }
        }
      });