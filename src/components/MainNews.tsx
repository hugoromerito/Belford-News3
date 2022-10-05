import { GetStaticProps } from "next";
import { DestaquePost } from "./DestaquePost";
import { Destaque2Post } from "./Destaque2Post";
import { PageDocument, PostsDocument, usePostsQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

export function MainNews() {
  const [{ data: { posts } }] = usePostsQuery()
  

  return (

    <>
      <div className="hidden pp:inline mm:px-8 w-[91.666667%] relative h-full mx-auto my-0 p-0 border-0 " >
        <div className="mm:px-3 my-10 h-full max-w-[85rem] mx-auto w-full">
          <div className="">
            <div className="relative grid lg:gap-y-3 lg:gap-x-3 lg:grid-cols-2 align-baseline w-[91.66667%] ml-[4.16667%] ">
              <div className=" m-0 p-0 border-0 h-full">
                {posts.slice(0, 1).map((post) => (
                  <DestaquePost key={post.slug} post={{
                    title: post.title,
                    href: `/${post.slug}`,
                    description: post.excerpt,
                    assunto: post.assunto,
                    author: {
                      name: post.author.name,
                      imageUrl: post.author.picture.url,
                    },
                    imageUrl: post.coverImage.url,
                    date: new Date(post.publishedAt).toLocaleString('pt-BR'),
                  }} />
                ))}
              </div>
              
              
              <div className="hidden lg:grid m-0 p-0 border-0 auto-cols-fr auto-rows-fr gap-y-3 gap-x-3 h-full">
                {posts.slice(1, 2).map((post) => (
                  <DestaquePost key={post.slug} post={{
                    title: post.title,
                    href: `/${post.slug}`,
                    description: post.excerpt,
                    assunto: post.assunto,
                    author: {
                      name: post.author.name,
                      imageUrl: post.author.picture.url,
                    },
                    imageUrl: post.coverImage.url,
                    date: new Date(post.publishedAt).toLocaleString('pt-BR'),
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      

      <div className="pp:hidden max-w-[85rem] mx-auto my-0 p-0 border-0 " >
        <div className=" w-full">
          <div className="">
            <div className="relative block align-baseline w-full ">
              <div className=" m-0 p-0 border-0  h-full">

                  {/* celula */}
                <div className="m-0 p-0 border-0 h-full">
                  {posts.slice(0, 1).map((post) => (
                    <DestaquePost key={post.slug} post={{
                      title: post.title,
                      href: `/${post.slug}`,
                      description: post.excerpt,
                      assunto: post.assunto,
                      author: {
                        name: post.author.name,
                        imageUrl: post.author.picture.url,
                      },
                      imageUrl: post.coverImage.url,
                      date: new Date(post.publishedAt).toLocaleString('pt-BR'),
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>   

);
}

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    client.query(PostsDocument).toPromise(),
    client.query(PageDocument, { slug: '/' }).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}