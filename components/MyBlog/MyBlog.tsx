import React from "react";
import {BsCodeSlash} from "react-icons/bs";
import {MyBlogContainer} from "@/components/MyBlog/MyBlog.styled";
import Link from "next/link";
import BackBtn from "@/components/BackBtn/BackBtn";


export default function MyBlog(): JSX.Element {
    const categories = ["Programming", "DevOps", "Tools", "Projects"];
    return (
        <MyBlogContainer id="myBlog">
            <BackBtn />
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/>
                    Chose a category {" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <br/>
                <ul className="containerLink">
                    {categories.map((category, idx) => (
                        <Link href={`/mdx/${category.toLowerCase()}`} key={idx}>
                            <li style={{
                                margin: "0 0 2rem 0",
                                borderBottom: "1px solid #fafafa",
                                textAlign: "center"
                            }}>{category}</li>
                        </Link>
                    ))
                    }
                </ul>
            </div>
            <div className="containerCards">
            </div>
        </MyBlogContainer>
    );
}
