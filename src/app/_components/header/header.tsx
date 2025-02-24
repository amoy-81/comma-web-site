import Image from "next/image";
import React, { FC } from "react";
import { TopNavigation } from "./top-navigation";

export const Header: FC = () => {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between p-4">
          <div className="w-60 max-w-full px-4">
            <Image
              src="/comma-logo.svg"
              alt="logo"
              width={100}
              height={30}
              className="h-8"
            />
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <nav className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6">
                <ul className="blcok lg:flex 2xl:ml-20">
                  <TopNavigation />
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div className="hidden sm:flex">
                <a
                  href="signin.html"
                  className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="signup.html"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
