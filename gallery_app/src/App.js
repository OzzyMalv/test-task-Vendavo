import { useAxios } from "./hooks/useAxios";
import CustomCard from "./ui/CustomCard";

const App = () => {
  const { data, isPending } = useAxios(
    "https://jsonplaceholder.typicode.com/albums/",
  );

  console.log("data", data);

  return (
    <div>
      {data?.map((item) => {
        return <CustomCard key={item.id} item={item} id={item.id} />;
      })}
    </div>
  );
};

export default App;
