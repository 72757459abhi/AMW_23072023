import React from "react";
import classes from "../cssFile/Product.module.css";
import nail1 from "../Assets/nail5.jpg";
import nail2 from "../Assets/nail2.jpg";
import nail3 from "../Assets/nail3.jpg";
import nail4 from "../Assets/nail4.jpg";
import ModalComp from "./Modal"
import { useState } from "react";

const product = [
  {
    img: nail1,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail2,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
];

const Product = () => {

  const [show, setShow] = useState(false)

const onInterested = ()=>{
  setShow(true)
} 

  return (
    
    <div className={classes.product}>
    <div className={classes.product1}>

      {product.map((product, index) => (
        <div className={classes.productCard} key={index}>
          <div className={classes.productBox}>
            <div className={classes.productBoximg}>
              <img src={product.img} alt="" width="300px" height="170px" />
            </div>

            <div className={classes.productBoxdetail}>
            <div className={classes.tableContainer}>
            <table className={classes.admTable}>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Material Grade</th>
                <td className={classes.admtd}>{"Wire Nail"}</td>
              </tr>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Item</th>
                <td className={classes.admtd}>{"Nail"}</td>
              </tr>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Size</th>
                <td className={classes.admtd}>{"2"} Inch</td>
              </tr>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Price</th>
                <td className={classes.admtd}>{"57"}:00 ruppes</td>
              </tr>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Quantity</th>
                <td className={classes.admtd}>{"500"} Bags</td>
              </tr>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Packaging Size</th>
                <td className={classes.admtd}>{"25"} Kg</td>
              </tr>
            </table>
          </div>
            </div>

            <div className={classes.productBoxDescription}>
              <p>{product.description}</p>
              <button onClick={()=> onInterested()}>Yes! I am Interested</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
        { show &&
        <ModalComp  show={show} setShow={setShow} />

        }
      </div>
    </div>
  );
};

export default Product;
