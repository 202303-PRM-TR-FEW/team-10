"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import CustomizedProgressBars from "../helper/ProgressBar";
import ClassTwoToneIcon from "@mui/icons-material/ClassTwoTone";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import eyeIcon from "../../../public/assets/images/eye.png";

const SummaryCard = ({
  cardUrl,
  endingDate,
  img,
  title,
  raised,
  goal,
  category,
  creator,
  formattedGoal,
  formattedRise,
  viewCount,
}) => {
  const [succesState, setSuccessState] = useState("");

  useEffect(() => {
    const endDate = new Date(endingDate);
    const today = new Date();
    const timeDiff = endDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (raised >= goal) {
      setSuccessState("success");
    } else if (daysRemaining <= 0) {
      setSuccessState("failed");
    } else if (daysRemaining < 5) {
      setSuccessState("5 days left");
    }
  }, []);

  console.log(title, ":", succesState);

  const progressBar = Math.ceil((raised / goal) * 100);

  const styles = {
    flex: "flex items-center gap-1",
    card: "flex flex-col border-[1px] border-[#0000002d] self-stretch  bg-white bg-opacity-80 hover:-translate-y-3 gap-3 w-[410px] rounded mb-10  drop-shadow-sm  hover:drop-shadow-3xl  transition-all duration-300 ease-in-out",
    image: "w-full h-[222px] image-animated",
    body: "p-3 flex flex-col gap-y-2 ",
    avatar: "border-[1px] border-basicgray w-10 h-10 bg-[#00c1a23d]",
    button: `bg-black hover:bg-orange-800 lg:hover:scale-[1.8] origin-left transform transition duration-500 hover:scale-[1.2] text-white font-bold py-2 px-4 rounded-md border border-black mt-8 w-80 text-center ms-0 md:w-100`,
  };

  return (
    <div className={styles.card}>
      <div className="overflow-hidden rounded">
        <img className={styles.image} src={img} alt="project img" />
      </div>
      <div className={`${styles.flex} justify-between p-3`}>
        <div className="">
          <div>
            <ClassTwoToneIcon color="action" />
          </div>
          <p className="text-base text-basicgray ">{category}</p>
        </div>
        <li className="flex gap-3 items-center">
          <h3 className=" color-green text-sm">{viewCount}</h3>
          <Image src={eyeIcon} alt="eye" width={20} height={20} />
        </li>
      </div>
      <div className={styles.body}>
        <h4 className="header-4 min-h-[64px] ">{title}</h4>
        <CustomizedProgressBars progressValue={progressBar} />
        <div className="flex flex-row justify-between">
          <div>
            <h4 className="sub-header">Raised:</h4>
            <p className="header-4">${formattedRise}</p>
          </div>
          <div>
            <h4 className="sub-header">Goal:</h4>
            <p className="header-4">${formattedGoal}</p>
          </div>
        </div>
        <div className={`${styles.flex} justify-between py-2`}>
          <div className={`${styles.flex} py-2`}>
            <Avatar
              alt={creator?.userName}
              src={creator?.userImg}
              className={styles.avatar}
            />
            <p className="text-base text-basicgray ">{creator?.userName}</p>
          </div>
          <div className={`${""} justify-between py-2`}>
            <Link href={`/${cardUrl}`}>
              <button className="btn-primary">
                View more <span className="hover:-translate-x-2">👉</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
