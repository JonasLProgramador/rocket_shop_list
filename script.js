const input = document.getElementById("item");
const btnAdd = document.getElementById("newItem");
const listShop = document.getElementById("list");



const loadingItems = (itemKey,item) => {
  listShop.innerHTML = ''
  for(let keyItem in localStorage){
    if(keyItem.startsWith('item_')){
      const itemData = localStorage.getItem(keyItem);
      const screen = renderItems(itemData,keyItem)
      listShop.innerHTML += screen
    }
  }

  
  
}

const registerItem = (item) => {
  const keyItem = `item_${Date.now()}`;
  localStorage.setItem(keyItem,item);
};

const renderItems = (itemData,itemDataKey) =>{
    return  `
  <li class="shop-item flex">
  <input type="checkbox" value="${itemData}" name="${itemData}" class="checkbox">
  <div class="checkbox-image"></div>
  <label>${itemData}</label>
  <button class="delete" data-key="${itemDataKey}" id="delete" type="button" onclick="removeItem(event)"></button>
  </li>
  `;
  }


const removeItem = (event) =>{
  console.log(event)

  const itemKey = event.target.getAttribute("data-key");
  localStorage.removeItem(itemKey);
  loadingItems();
}

btnAdd.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const inputItem = input.value;
    registerItem(inputItem)
    loadingItems()
    input.value = "";
  }
});





listShop.addEventListener("change", (event) => {
  if (event.target && event.target.classList.contains("checkbox")) {
    const checkboxImage = event.target
      .closest(".shop-item")
      .querySelector(".checkbox-image");
    if (event.target.checked) {
      checkboxImage.classList.add("check");
    } else {
      checkboxImage.classList.remove("check");
    }
  }
});


