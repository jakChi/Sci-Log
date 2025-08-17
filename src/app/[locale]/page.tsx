import { getAllPosts } from "../../../lib/api";
import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";
import { SidePanel } from "../_components/side-panel";

export default function HomePage() {
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
