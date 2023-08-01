"use client";
import Link from "next-intl/link";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";
const WelcomeBanner = () => {
  const { projects, donations } = useAuth();
  const [successfulProjects, setSuccessfulProjects] = useState(24230);
  const [donationCounter, setDonationCounter] = useState(0);
  const [checked, setChecked] = useState(false);
  const t = useTranslations("WelcomeBanner");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(true);
    // Convert the projects object into an array and get the number of successful projects
    const projectsArray = Object.values(projects);
    // const totalSuccessfulProjects = projectsArray.filter((project) => project.successful).length;
    const totalSuccessfulProjects = "23423";
    // Animate the counter from 0 to the number of successful projects
    let counter = 0;
    const step = Math.ceil(totalSuccessfulProjects / 100); // Change the denominator to control the animation speed

    const timer = setInterval(() => {
      counter = Math.min(counter + step, totalSuccessfulProjects);
      setSuccessfulProjects(counter);

      if (counter >= totalSuccessfulProjects) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [projects]);

  return (
    <section className="flex justify-center items-center bg-gradient-to-t from-transparent to-teal-50">
      <div className="grid lg:grid-cols-2 gap-8 py-28 container">
        <div className="p-10 flex flex-col gap-4 text-center lg:text-left bg-no-repeat bg-right-top bg-[url('../../public/assets/images/dots.svg')]">
          <p className="header-1">{t("header")}</p>
          <p className="sub-header">{t("subHeader")}</p>
          <Link href="/projects" className="justify-self-end xl:mt-8">
            <button className="btn-primary">{t("button")}</button>
          </Link>
        </div>
        <div className="p-10 sm:p-24 relative" style={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: checked ? "20%" : "-500%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              p: 2,
              background: "#f5d20e7d",
              backdropFilter: "blur(2px)",
              color: "white",
              borderRadius: "10px",
              fontWeight: "bold",
              transition: "top 1.5s ease-in-out",
              textAlign: "center",
              width: "fit-content",
              zIndex: 2,
              "@media screen and (max-width: 768px)": {
                top: checked ? "10%" : "-500%",
                left: "50%",
                width: "80%",
              },
            }}
          >
            {t("successful")}
            {successfulProjects}
          </Box>
          <img
            src="/assets/images/team_work.png"
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: checked ? "25%" : "-500%",
              right: "-10%",
              transform: "translate(-50%, -50%)",
              p: 2,
              background: "#ffffffb3",
              backdropFilter: "blur(2px)",
              color: "#f08307",
              borderRadius: "10px",
              fontWeight: "bold",
              transition: "top 2s ease-in-out",
              textAlign: "center",
              width: "fit-content",
              zIndex: 2,
              "@media screen and (max-width: 768px)": {
                top: checked ? "70%" : "-500%",
                right: "0%",
                left: "50%",
                width: "80%",
              },
            }}
          >
            {t("donations")}
            {successfulProjects}
          </Box>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
