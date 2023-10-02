import Navbar from "@/components/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const BlogsLayout = (props: Props) => {
  return (
    <div className="  p-[20px]  !pt-0 sm:p-[30px]">
      {/* <Navbar /> */}
      {props.children}
    </div>
  );
};

export default BlogsLayout;
