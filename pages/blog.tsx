import type {NextPage} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer/";
import ButtonScrollUp from "@/components/ButtonScrollUp";
import Cursor from "@/components/Cursor"
import React from "react";
import MyBlog from "@/components/MyBlog/MyBlog";

const Blog: NextPage = () => {
    return (
        <div>
            <Header/>
            <ButtonScrollUp/>a
            <MyBlog/>
            <Cursor/>
            <Footer/>
        </div>
    );
};

export default Blog;
