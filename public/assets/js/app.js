// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourButton").on("click", function(event) {
      var id = $(this).data("id");
      var devouredData = $(this).data("devoured");
  
      var newDevouredState = {
        devoured: devouredData
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed burger to", devouredData);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#createBurgerName").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger" + newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  