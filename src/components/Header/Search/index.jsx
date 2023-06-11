import React from "react";
import Category from "./Category";
import TemporaryDrawer from "./Drawer";
import searchIcon from "../../../assets/search.svg";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)`
  background-color: #0059BC;
  width: 110px;
  height: 40px;
  margin-left: 10px;

  &:hover {
    background-color: #004899;
  }
`;

export default function Search() {
  return (
    <div className="container mx-auto w-5/6 sm:w-full flex flex-col sm:flex-row justify-between py-5">
      <div className="flex justify-between items-center sm:mr-10">
        <a href="https://www.nttdata.com/global/en/">
          <img className="h-6 sm:h-8 mb-2" src="./logoImg/ntt-data-blue-logo.svg" alt="NTT Data" />
        </a>
        <div className="flex justify-center items-center sm:hidden w-6 h-6">
          <TemporaryDrawer />
        </div>
      </div>
      <div className="w-full sm:w-5/6 flex justify-between mt-6 sm:mt-0">
        <div className="sm:w-3/4 flex-grow flex justify-between border border-solid border-neutral-300 rounded">
          <input
            type="search"
            className="bg-transparent px-3 py-[0.25rem] text-base font-normal text-neutral-700 w-full"
            placeholder="Search"
          />
          <Category />
        </div>
        <div className="flex items-center ml-4">
          <CustomButton>
            <img src={searchIcon} alt="Search" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
