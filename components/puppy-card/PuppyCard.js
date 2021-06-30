import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./puppy-card.module.scss";

const PuppyCard = ({
  id,
  name,
  breed,
  color,
  picture,
  description,
  deletePuppy,
}) => {
  const router = useRouter();

  return (
    <div className={styles.puppy_card}>
      <div>
        <img src={picture} alt={name} className={styles.puppy_card__image} />
      </div>
      <div className={styles.puppy_card__bio_section}>
        <div className={styles.puppy_card__header}>
          <h1>{name}</h1>
          <h3>{color + ", " + breed}</h3>
        </div>
        <div className={styles.puppy_card__description}>
          <p>{description}</p>
        </div>
        <div className={styles.puppy_card__bio_footer}>
          <button onClick={() => router.push(`/${id}`)}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <button onClick={() => deletePuppy(id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuppyCard;
