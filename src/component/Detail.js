import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useLocation} from 'react-router-dom'
function DeTailProduct() {
    const product = useLocation().state
  return (
    <>
      <div class="container">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <h4 class="card-title">Chi tiết sản phẩm</h4>
                <h5 class="card-text">Tên sản phẩm: {product.title}</h5>
                <h5 class="card-text">Mô tả: {product.description}</h5>
                <h5 class="card-text">Giá: {product.price}</h5>
                <Link to={"/"} class="btn btn-primary">
                  Quay lại
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeTailProduct;
