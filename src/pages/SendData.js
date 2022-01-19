import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendData } from "../actions/ProductAction";
import Title from "../components/Title";
import "../styles/SendData.scss";
const SendData = (e) => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    name: "",
    description: "",
    image: "",
    category: "gaming",
    price: "",
    featuresArr: [],
  });
  //CONTROL ALL INPUT ON CHANGE
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };
  //SEND DATA TO BACKEND
  const sendHandler = (e) => {
    e.preventDefault();
    // console.log(data);
    dispatch(sendData(data));
    setdata({
      name: "",
      description: "",
      image: "",
      category: "",
      price: "",
      featuresArr: [],
    });
  };
  //ADD EXTRA FIELD TO ADD MORE FEATURES
  const addField = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      featuresArr: [...data.featuresArr, { title: "", text: "" }],
    });
  };
  //CONTROL OF EXTRA FIELD ADDED
  const changeFieldHandler = (e, id) => {
    console.log(e.target.value, id);
    const list = [...data.featuresArr];
    list[id] = e.target.value;
    setdata({ ...data, featuresArr: [...list] });
  };
  return (
    <div className="sendData_container">
      <form className="form_container">
        <Title title="Create Product" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={data.name}
        />
        <label htmlFor="description">description</label>

        <input
          type="text"
          name="description"
          onChange={changeHandler}
          value={data.description}
        />
        <label htmlFor="image">image</label>

        <input
          type="text"
          name="image"
          onChange={changeHandler}
          value={data.image}
        />
        <label htmlFor="category">category</label>
        <select name="category" id="category" onChange={changeHandler}>
          {" "}
          <option className="option_class" value="gaming">
            Gaming
          </option>
          <option value="laptops">Laptops</option>
          <option value="camera">Camera</option>
        </select>
        {/* <input type="text" name="category" onChange={changeHandler} /> */}
        <label htmlFor="price">price</label>

        <input type="number" name="price" onChange={changeHandler} />
        {data.featuresArr.length > 0 &&
          data.featuresArr.map((el, id) => (
            <div className="add_field_container" key={id}>
              <label htmlFor="title">title</label>{" "}
              <input
                type="text"
                name="title"
                onChange={(e) => changeFieldHandler(e, id)}
              />{" "}
            </div>
          ))}

        <button className="sendData_add_btn" onClick={addField}>
          Add
        </button>
        <button
          className="sendData_add_btn"
          type="submit"
          onClick={sendHandler}
        >
          Send Data
        </button>
      </form>
    </div>
  );
};

export default SendData;
