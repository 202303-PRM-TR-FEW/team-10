"use client";
import React from "react";
import {
  Card,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const SearchList = ({ searchProjects }) => {
  return (
    <div className="absolute w-full lg:w-[350px] rounded bg-white bg-opacity-80 backdrop-filter backdrop-blur-[20px]">
      {searchProjects && searchProjects.length !== 0 ? (
        searchProjects.map((project, index) => (
          <React.Fragment key={project.id}>
            {index > 0}
            <Link href={`/${project.id}`}>
              <ListItem className="z-50 ">
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    alt={project.name}
                    src={project.url}
                    className="w-12 h-12 object-contain"
                  />
                </ListItemAvatar>
                <div>
                  <Typography variant="h6" color="textPrimary">
                    {project.name}
                  </Typography>
                </div>
              </ListItem>
            </Link>
          </React.Fragment>
        ))
      ) : (
        <ListItem className="z-50 ">
          <div>
            <Typography variant="h6" color="textPrimary">
              No matching result
            </Typography>
          </div>
        </ListItem>
      )}
    </div>
  );
};

export default SearchList;
