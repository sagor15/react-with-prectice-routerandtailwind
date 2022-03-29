import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setData(data.categories));
  }, []);
  return (
    <div className="grid md:grid-cols-4 align-middle justify-center gap-5 mt-5">
      {datas.map((data) => (
        <Card key={"idCategory"} data={data}></Card>
      ))}
    </div>
  );
};

export default Home;
