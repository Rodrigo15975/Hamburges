import { useState } from "react";
import "./App.css";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  Reorder,
} from "framer-motion";

import {
  GrAdd,
  IoAddCircleOutline,
  MdOutlineRemoveShoppingCart,
} from "react-icons/all";

const Hamburges = [
  {
    id: 1,
    name: "Hamburguesa clásica",
    image:
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    imageHover:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    price: "2.45$",
  },
  {
    id: 2,
    name: "Hamburguesa de queso",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    imageHover:
      "https://images.unsplash.com/photo-1540981493580-8ea1113e9968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: "3.45$",
  },
  {
    id: 3,
    name: "Hamburguesa de pollo",
    image:
      "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageHover:
      "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "4.45$",
  },
  {
    id: 4,
    name: "Hamburguesa vegetariana",
    image:
      "https://images.unsplash.com/photo-1491960693564-421771d727d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
    imageHover:
      "https://plus.unsplash.com/premium_photo-1675746705208-3a48225465ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: "1.45$",
  },
  {
    id: 5,
    name: "Hamburguesa de salmón",
    image:
      "https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80",
    imageHover:
      "https://images.unsplash.com/photo-1542545256-84d8b442b26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    price: "6.45$",
  },
  {
    id: 6,
    name: "Hamburgesa millonaria",
    image:
      "https://images.unsplash.com/photo-1603508102983-99b101395d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    imageHover:
      "https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: "10.45$",
  },
];

function App() {
  const [databaseHamburger, setDatabaseHamburger] = useState(Hamburges);
  const [hoverImg, setHoverImg] = useState(null);

  // const ChangeImg = (data) => {
  //   return (
  //     <m.img
  //       key={hoverImg === data.id ? "hover" : "default"}
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //       className="img-figure"
  //       src={hoverImg === data.id ? data.imageHover : data.image}
  //       alt={data.name}
  //     />
  //   );
  // };

  const variantsHoverImg = {
    hidden: { opacity: .8 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: { type: "tween", duration: 1 },
    },
    exit: { opacity: .8 },
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.figure className="cont-figure">
          {databaseHamburger.map((data, index) => (
            <m.div
              key={data.id}
              className="figure"
              onMouseOver={() => setHoverImg(data.id)}
              onMouseOut={() => setHoverImg(null)}
            >
              <m.img
                className="img-figure"
                variants={variantsHoverImg}
                initial="hidden"
                animate="visible"
                exit={"exit"}
                key={hoverImg === data.id ? "hover" : "default"}
                src={hoverImg === data.id ? data.imageHover : data.image}
                alt={data.name}
              />

              <m.button className="button-hamburges left">
                <IoAddCircleOutline className="icon" />
              </m.button>
              <m.button className="button-hamburges right ">
                <MdOutlineRemoveShoppingCart className="icon" />
              </m.button>
              <m.figcaption className="text-figure">
                <m.span>{data.name}</m.span>
                <m.span>{data.price}</m.span>
              </m.figcaption>
            </m.div>
          ))}
        </m.figure>
      </LazyMotion>
    </>
  );
}

export default App;
