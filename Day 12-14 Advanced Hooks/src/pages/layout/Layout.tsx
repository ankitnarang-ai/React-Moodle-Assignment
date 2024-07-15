import { useEffect, useState } from "react";
import { Navbar, Container, Card, Loader } from "../../components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItems, duplicatItems } from "../../reducer/itemSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.item.items);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios
        .get("https://fakestoreapi.com/products?sort=desc")
        .then((res) => {
          const fetchedItems = res.data;
          console.log("layout items", fetchedItems);
          dispatch(addItems(fetchedItems));
          dispatch(duplicatItems(fetchedItems));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(true);
        });
      }
    }, [dispatch, items.length, isLoading]);

    if(isLoading) {
      return <Loader />
    }
 
  return (
    <div>
      <Navbar />
      <Container>
        <Card />
      </Container>
    </div>
  );
};

export default Layout;