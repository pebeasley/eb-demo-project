import React from "react";
import PuppyCard from "../puppy-card/PuppyCard";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import styles from "./puppy-list.module.scss";

function PuppyList({ puppies, fetchPuppies }) {
  const router = useRouter();

  const deletePuppy = async (id) => {
    const result = await axios.delete(`/api/puppies/${id}`);
    if (result.status === 200) {
      fetchPuppies();
    }
  };
  return (
    <div className={styles.puppy_list}>
      <div className={styles.puppy_list__header}>
        <button onClick={() => router.push("/add-puppy")}>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </button>
      </div>
      {puppies.map((puppy, index) => {
        return (
          <PuppyCard
            key={puppy._id}
            id={puppy._id}
            name={puppy.name}
            picture={puppy.picture}
            breed={puppy.breed}
            color={puppy.color}
            description={puppy.description}
            deletePuppy={deletePuppy}
          />
        );
      })}
    </div>
  );
}

export default PuppyList;
