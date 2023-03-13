import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  //   const parms = useParams();
  //   const { id } = parms;
  //   console.log(parms);
  //   or you can direct distructure
  const { id } = useParams();

  return (
    <div>
      <h1>Resturant Id: {id}</h1>
      <h1> Pizza Hut </h1>
    </div>
  );
};

export default ResturantMenu;
