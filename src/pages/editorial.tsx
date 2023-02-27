import { GetStaticProps } from "next";
import { BlogPost } from "../components/BlogPost";
import { PageDocument, PostsDocument, usePageQuery, usePostsQuery, QueryPostsConnectionArgs } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";
import { MainNews } from "../components/MainNews";
import Link from "next/link";

export default function Editorial() {
  const [{ data: { posts } }] = usePostsQuery()
  const [{ data }] = usePageQuery({
    variables: {
      slug: '/'
    }
  })

  return (
    <>
    <MainNews />
      <div className="relative 
          bg-[#eee] dark:bg-[#121214] ease-in duration-300
            mm:w-11/12 mm:mx-auto mm:pt-6 mm:pb-20 mm:px-4
            lg:pt-8 lg:pb-28 lg:px-8 
          ">
        <div className="absolute inset-0">
          <div className="bg-white dark:bg-[#121214] h-1/3 sm:h-2/3 ease-in duration-300" />
        </div>
        <div className="relative flex flex-row-reverse max-w-[85rem] mx-auto">
          {/* <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl ease-in duration-300">{page.title}</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-50 sm:mt-4 ease-in duration-300">
              {page.subtitle}
            </p>
          </div> */}

          

          {/* BARRA LATERAL */}
          <div className="px-3 w-[29.16667%] hidden mm:inline">
            <div className="px-6 w-full">
              <Link href="https://wa.me/message/KQIA3NCGLACKG1" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/anuncie.gif" className="w-full" alt="" />
                </a>
              </Link>
            </div>
          </div>



              {/* NOTICIAS */}
          <div className="
            w-full 
            sm:px-3 
          mm:w-[66.5%] mm:ml-12
              ">
          {/* <div className="mt-12 ml-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-[43.15rem]"> */}
            
            
            {posts.slice(1,2).map((post) => (
              <BlogPost key={post.slug} post={{
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

            <Link href="https://wa.me/message/KQIA3NCGLACKG1" passHref>
              <a target="_blank" rel="noreferrer">
                <img src="/anuncie-cell.gif" className="w-full my-5 mm:hidden" alt="" />
              </a>
            </Link>

            {posts.slice(2).map((post) => (
              <BlogPost key={post.slug} post={{
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