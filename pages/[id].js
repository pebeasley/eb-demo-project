import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import EditPuppyForm from "../components/edit-puppy-form/EditPuppyForm";

function PuppyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [puppy, setPuppy] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPuppy = async () => {
      axios
        .get(`/api/puppies/${id}`)
        .then((result) => {
          setPuppy(result.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPuppy();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <EditPuppyForm
        id={puppy._id}
        name={puppy.name}
        breed={puppy.breed}
        color={puppy.color}
        picture={puppy.picture}
        description={puppy.description}
      />
    </div>
  );
}

export default PuppyPage;
