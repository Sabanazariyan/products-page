const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    //فیلتر دوم چیزی است که کاربر انتخاب کرده
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  //مقداری که کاربر وارد کرده
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    //مقداری که کابر تایپ کرده داخل اسم هر محصول وجود دارد؟
    if (productName.includes(searchValue)) {
      //اگر وجود داشت نشان میدهد
      product.style.display = "block";
    } else {
      //اگر وجود نداشت نشان نمیدهد
      product.style.display = "none";
    }
  });
};
const filterHandler = () => {
  const filter = event.target.dataset.filter;
  //فانکشن تغییر استایل باتن انتخاب شده
  changeClass(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");

      //   if (filter === category) {
      //     product.style.display = "block";
      //   } else {
      //     product.style.display = "none";
      //   }
    }
  });
};
searchInput.addEventListener("keyup", searchHandler);

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
