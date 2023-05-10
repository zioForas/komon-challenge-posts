'use client'
import { PostsButton } from "@/components/PostsButton";
import { SocialButtons } from '../components/SocialButtons';
import { Socials } from "@/components/Socials";
import { UserInteractions } from "@/components/UserInteractions";
import { Username } from "@/components/Username";
import React from "react";
// import GeneratePost from "@/components/GeneratePost";
export const Header = () => {
  return (
    <>
      <div>
        <Username />
      </div>
      <div>
        <SocialButtons />
        <UserInteractions />
        <div>
          <Socials />
        </div>
        {/* <PostsButton /> */}
        {/* <GeneratePost /> */}
      </div>
    </>
  );
}
