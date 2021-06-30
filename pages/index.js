import axios from "axios";
import { useEffect, useState } from "react";
import PuppyList from "../components/puppy-list/PuppyList";

export default function Home() {
  const [puppies, setPuppies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPuppies = async () => {
    axios.get("/api/puppies").then((results) => {
      console.log(results.data);
      setPuppies(results.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchPuppies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <PuppyList puppies={puppies} fetchPuppies={fetchPuppies} />
    </div>
  );
}
