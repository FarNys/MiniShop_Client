import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendData } from "../actions/ProductAction";
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
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const sendHandler = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(sendData(data));
    setdata({
      name: "",
      description: "",
      image: "",
      category: "gaming",
      price: "",
      featuresArr: [],
    });
  };
  const addField = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      featuresArr: [...data.featuresArr, { title: "", text: "" }],
    });
  };
  const changeFieldHandler = (e, id) => {
    console.log(e.target.value, id);
    const list = [...data.featuresArr];
    list[id] = e.target.value;
    setdata({ ...data, featuresArr: [...list] });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "320px" }}
      >
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
          <option value="gaming">gaming</option>
          <option value="laptops">laptops</option>
          <option value="camera">camera</option>
        </select>
        {/* <input type="text" name="category" onChange={changeHandler} /> */}
        <label htmlFor="price">price</label>

        <input type="number" name="price" onChange={changeHandler} />
        {data.featuresArr.length > 0 &&
          data.featuresArr.map((el, id) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "320px",
              }}
              key={id}
            >
              <label htmlFor="title">title</label>{" "}
              <input
                type="text"
                name="title"
                onChange={(e) => changeFieldHandler(e, id)}
              />{" "}
            </div>
          ))}

        <button onClick={addField}>Add</button>
        <button type="submit" onClick={sendHandler}>
          Send Data
        </button>
      </form>
    </div>
  );
};

export default SendData;
