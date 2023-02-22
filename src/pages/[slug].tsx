import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { PostDocument, usePostQuery, usePostsQuery } from "../generated/graphql"
import { client, ssrCache } from "../lib/urql"

export default function Post({ slug }) {
  const [{ data: { post } }] = usePostQuery({
    variables: {
      slug,
    }
  })

  return (
    <div className="
        relative pb-16 bg-white dark:bg-[#202024] overflow-hidden ease-in duration-300
      ">
        
      

      {/* AUTHOR */}
      <div className="max-w-[85rem] lg:max-w-[55.5rem] mt-16 flex mx-auto px-6 lg:px-0">
        {/* Image */}
        <div className="">
          <div className="mr-4">
            <img className=" lg:w-16 w-14 rounded-full grayscale" src={post.author.picture.url} alt="" />
          </div>
        </div>

        {/* NAME  */}
        <div className="flex justify-center flex-col">
          <p className="
              mb-2 font-bold text-[#333] dark:text-gray-50 ease-in duration-300
              lg:text-xl lg:tracking-[-0.6px] lg:leading-[22px] text-lg tracking-[-0.5px] leading-[19.8px]
            "> Por {post.author.name}</p>
          <p className="
              max-w-[45rem] font-light text-[#555] dark:text-gray-300 ease-in duration-300
              lg:text-base lg:tracking-[-0.3px] lg:leading-[17.6px] text-xs  leading-[13.2px] tracking-[-0.1px]
            "
          >{post.author.biography}</p>
        </div>
      </div>

      <div className="max-w-[85rem] lg:max-w-[55.5rem] mx-auto px-6 lg:px-0">
      <div className="after:content-[''] after:h-[1px] after:w-full after:bg-[#c8c8c8] dark:after:bg-[#141412] after:block after:my-8 ease-in duration-300">
        
        {/* TITULO */}
        <h1 className="
          mt-10  font-bold 
          text-[32px] lg:text-[56px] block leading-[35.2px] lg:leading-[61.6px] tracking-[-1.3px] lg:tracking-[-3.1px]
          text-[#111] dark:text-gray-100
          ease-in duration-300
        ">
          {post.title}
        </h1>
          <span className="mt-2 block mb-2 font-light leading-6 lg:leading-[30px]
              text-[#555] dark:text-gray-100
              text-base lg:text-xl ease-in duration-300 tracking-[-0.3px] lg:tracking-[-0.6px]
            ">
            {post.excerpt}
          </span>
          
          <span className="text-base leading-[20.8px] lg:leading-[20.8px] tracking-[-0.3px] font-light text-[#555] dark:text-gray-300 ">{new Date(post.publishedAt).toLocaleString('pt-BR')}</span>
      
      

      </div>
      <div className="inline sm:hidden">
      <Image
        className="inline sm:hidden w-full object-cover"
        src={post.coverImage.url}
        alt=""
        height="50rem"
        width="100%"
        sizes='100vw'
      />
      </div>

<div className="hidden sm:inline">
      <Image
        className="hidden sm:inline w-full object-cover"
        src={post.coverImage.url}
        alt=""
        height="50rem"
        width="100%"
        sizes='100vw'
      />
      </div>
      </div>

      

     

      <div className="relative px-4 pt-2 sm:px-6 lg:px-8">
        <div className="max-w-prose mx-auto">

          
        </div>
        
        <div 
          className="mt-6 prose dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-purple-800 dark:prose-purple-400 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-lg mx-auto ease-in duration-300" 
          dangerouslySetInnerHTML={{ __html: post.content.html }} 
        />
      </div>


       


    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, { slug: params.slug }).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params.slug,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  }
}
