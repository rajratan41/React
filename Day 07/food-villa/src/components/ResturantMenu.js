import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  /**
   * how to read the dynamic URL
   * using useParams() hook from react-router-dom
   */

  //   const parms = useParams();
  //   const { id } = parms;
  //   console.log(parms);

  //   or you can direct distructure
  const { resid } = useParams();

  return (
    <div>
      <h1>Resturant Id: {resid}</h1>
      <h1> Pizza Hut </h1>
    </div>
  );
};

export default ResturantMenu;
