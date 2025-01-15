const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");

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

searchInput.addEventListener("keyup", searchHandler);
