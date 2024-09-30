import React from "react";
import PropTypes from "prop-types";
import styles from "./testimonial-card.module.css";

const TestimonialCard = ({
  content = "Claim has revolutionized the way we manage our company. It has streamlined our processes and improved our efficiency, saving us both time and money.",
  avatarName = "John Doe",
  avatarImageAlt = "AvatarImageI312",
  avatarCompany = "CEO, ABC Company",
  avatarImageSrc = "/external/avatarimagei312-jmgt-200w.webp",
}) => {
  return (
    <>
      <div className={styles["testimonial-card-container"]}>
        <div className={styles["testimonial-card-testimonial-card"]}>
          <img
            alt={"StarsI312"}
            src={
              "https://storage.googleapis.com/claimit-app-landing-assets/assets/starsi312-dm9r.svg"
            }
            className={styles["testimonial-card-stars"]}
          />
          <span className={styles["testimonial-card-content"]}>{content}</span>
          <div className={styles["testimonial-card-avatar"]}>
            <img
              alt={avatarImageAlt}
              src={avatarImageSrc}
              className={styles["testimonial-card-avatar-image"]}
            />
            <div className={styles["testimonial-card-avatar-content"]}>
              <span className={styles["testimonial-card-avatar-name"]}>
                {avatarName}
              </span>
              <span className={styles["testimonial-card-avatar-company"]}>
                {avatarCompany}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TestimonialCard.propTypes = {
  starsAlt: PropTypes.string,
  content: PropTypes.string,
  avatarName: PropTypes.string,
  starsSrc: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarCompany: PropTypes.string,
  avatarImageSrc: PropTypes.string,
};

export default TestimonialCard;
