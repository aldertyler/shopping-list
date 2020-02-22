function myShoppingList() {
  $("#js-shopping-list-form").submit(function(e) {
    e.preventDefault();

    let newItem = $("#shopping-list-entry").val();
    $("#shopping-list-entry").val("");

    if (newItem !== "") {
      $(".shopping-list").append(itemTemplate(newItem));
    }
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this)
      .closest(".shopping-item-controls")
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this)
      .closest("li")
      .remove();
  });
}

$(myShoppingList);

function itemTemplate(item) {
  return `
    <li> 
        <span class="shopping-item"> ${item} </span>
        <div class="shopping-item-controls"> 
          <button class="shopping-item-toggle"> 
            <span class="button-label">check</span> 
          </button>  
          <button class="shopping-item-delete"> 
            <span class="button-label">delete</span> 
          </button> 
        </div> 
      </li>
  `;
}
