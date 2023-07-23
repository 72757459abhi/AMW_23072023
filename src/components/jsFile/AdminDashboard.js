import React from 'react'
import classes from "../cssFile/AdminDashboard.module.css";
import img from "../Assets/nail1.jpg";
import Sales from "../jsFile/Sales";

const Contact = () => {
  return (
    <>
      <main className={classes.profile}>
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" />
              </div>
              <div className={classes.control}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" />
              </div>
              <div className={classes.control}>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" />
              </div>
              <div className={classes.control}>
                <label htmlFor="size">Size</label>
                <input type="number" id="size" />
              </div>
              <div className={classes.control}>
                <label htmlFor="weight">Weight Per Bags</label>
                <input type="text" id="weight" />
              </div>
              <div className={classes.control}>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" />
              </div>
              <div className={classes.control}>
                <label htmlFor="item">Item</label>
                <input type="text" id="item" />
              </div>

              <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <input
                  type='textarea'
                  name="description"
                  id="description"
                  cols="40"
                  rows="4"
                  placeholder="Please write your query..."
                />
              </div>
              <button className={classes.btn}> Add </button>
              <button className={classes.btn}> Prev </button>
            </form>
          </section>
        </main>
        <main className={classes.auth1}>
          <img className={classes.img} src={img} alt="img" />
          <div className={classes.tableContainer}>
            <table className={classes.admTable}>
              <tr className={classes.admTable}>
                <th className={classes.admth}>Product Name</th>
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
                <th className={classes.admth}>Weight Per Bags</th>
                <td className={classes.admtd}>{"25"} Kg</td>
              </tr>
            </table>
          </div>
          <p className={classes.descriptipn}>
            Description:{" "}
            {
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter"
            }
          </p>
        </main>
      </main>

      <Sales />
    </>
  );
};

export default Contact;
