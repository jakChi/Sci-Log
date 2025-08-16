import React from "react";
import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { SidePanel } from "./_components/side-panel";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0]; // Assuming the first post is the hero post

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <div className="flex w-full flex-col md:flex-row justify-around">
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          <SidePanel />
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
