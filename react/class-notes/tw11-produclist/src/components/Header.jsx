import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = ({ setData,data }) => {
  const renkli = ["info", "danger", "success", "warning"];
  const [categories, setCategories] = useState();

  const getCategories = () => {
    const C_URL = "https://fakestoreapi.com/products/categories";
    axios
      .get(C_URL)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCategories();
    getData();
  }, []);

  const getData = async () => {
    const C_URL = " https://fakestoreapi.com/products ";
    try {
      const { data } = await axios.get(C_URL);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilter = (item) => {
    console.log(item);
    setData(data.filter)((urun)=>urun.category === item)
  };
  return (
    <div className="text-center ">
      <h1>Product List</h1>
      <div className="d-flex flex-wrap align-items-center justify-content-center  gap-2">
        <Button variant="primary">ALL</Button>{" "}
        {categories?.map((item, i) => {
          return (
            <Button
              name={item}
              onClick={() => handleFilter(item)}
              className=""
              variant={renkli[i]}
            >
              {item.toUpperCase()}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;