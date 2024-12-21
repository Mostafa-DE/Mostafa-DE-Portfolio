import React from "react";
import {BsCodeSlash} from "react-icons/bs";
import {MyBlogContainer} from "@/components/MyBlog/MyBlog.styled";


export default function MyBlog(): JSX.Element {
    return (
        <MyBlogContainer id="myBlog">
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/>
                    My Blog {" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <br/>
            </div>
            <div className="containerCards">
                Coming soon...
            </div>
        </MyBlogContainer>
    );
}
