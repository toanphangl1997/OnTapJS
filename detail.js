import renderDuLieuGiay from "./util.js";
// lấy dữ liệu chi tiết
function getDetailShoe(id = 8) {
  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });
  promise
    .then((res) => {
      // console.log(res.data.content);
      renderDetailGiay(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}

getDetailShoe();

function renderDetailGiay(giay, idTheCha = "baiTap3") {
  console.log(giay);
  let { image, name, description, size, price, relatedProducts } = giay;
  let content = `
   <div class="col-5">
        <img src=${image} alt="">
      </div>
      <div class="col-7">
        <h3>${name}</h3>
        <p>${description}</p>
        <!-- số size giày  -->
        <div>
          ${renderSizeGiay(size)}
        </div>
        <!-- giá tiền  -->
        <p>${price}</p>
        <button class="btn btn-dark">Mua ngay</button>
      </div>
  `;
  document.getElementById(idTheCha).innerHTML = content;
  renderDuLieuGiay(relatedProducts, "baiTap4");
}

function renderSizeGiay(arrSize) {
  content = "";
  for (let size of arrSize) {
    content += `<button class="btn btn-dark me-3">${size}</button>`;
  }
  // thực hiện trả về chuỗi html chứa các nút button được tạo ra từ mảng size
  return content;
}
