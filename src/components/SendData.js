import React, { useState } from "react";

const SendData = (e) => {
  const [data, setdata] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    price: "",
    featuresArr: [],
  });
  const [features, setfeatures] = useState({});
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const changeFeatures = (e) => {
    setfeatures({ ...features, [e.target.name]: e.target.value });
    console.log(features);
  };
  const sendHandler = (e) => {
    e.preventDefault();
    data.featuresArr = [];
    for (let i in features) {
      data.featuresArr.push(features[i]);
    }
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "320px" }}
      >
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          //   value={data.name}
        />
        <label htmlFor="name">Name</label>
        <input type="text" name="description" onChange={changeHandler} />
        <label htmlFor="description">description</label>
        <input type="text" name="image" onChange={changeHandler} />
        <label htmlFor="image">image</label>
        <input type="text" name="category" onChange={changeHandler} />
        <label htmlFor="category">category</label>
        <input type="number" name="price" onChange={changeHandler} />
        <label htmlFor="price">price</label>
        <input type="text" name="feature1" onChange={changeFeatures} />
        <label htmlFor="feature1">feature1</label>
        <input type="text" name="feature2" onChange={changeFeatures} />
        <label htmlFor="feature2">feature2</label>
        <input type="text" name="feature3" onChange={changeFeatures} />
        <label htmlFor="feature3">feature3</label>
        <input type="text" name="feature4" onChange={changeFeatures} />
        <label htmlFor="feature4">feature4</label>
        <button type="submit" onClick={sendHandler}>
          Send Data
        </button>
      </form>
    </div>
  );
};

export default SendData;
