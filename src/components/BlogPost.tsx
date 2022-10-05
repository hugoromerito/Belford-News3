import Image from "next/image";
import Link from "next/link";

type BlogPostProps = {
  post: {
    title: string;
    imageUrl: string;
    href: string;
    description: string;
    assunto: string;
    author: {
      name: string;
      imageUrl: string;
    }
    date: string;
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className=" bg-white dark:bg-[#141414] shadow-sm shadow-[#0000001a] pp:after:content-[''] pp:after:h-[1px] pp:after:w-full pp:after:bg-[#c8c8c8] dark:pp:after:bg-[#202024] pp:after:block pp:after:my-8 mt-4 overflow-hidden pp:m-0 ease-in duration-300">
      {/* <div key={post.title} className="flex-col xl:flex-row flex rounded-lg shadow-lg overflow-hidden mt-8"> */}
      <div key={post.title} className="
          pp:items-start pp:gap-x-4 pp:grid pp:grid-cols-[repeat(auto-fit,minmax(45%,max-content))] pp:grid-rows-[repeat(4,auto)] pp:p-0 
          px-6 pt-6 
        ">

        {/* ASSUNTO */}
        <div className="pp:col-[2] pp:pb-2">
          <p className="pp:mt-3 m-0 text-base align-middle text-[#333] font-semibold leading-[150%] dark:text-gray-50 ease-in duration-300">{post.assunto}</p>
        </div>
        
        {/* TITULO */}
        <div className="pp:col-[2] pp:mt-1
            break-words mt-2
          ">
          <div className="align-baseline m-0 border-0 p-0">
            <Link href={post.href}>
              <a>
                <p className="text-xl pp:text-2xl leading-[26.4px] tracking-[-0.8] font-bold text-purple-700 dark:text-purple-300 ease-in duration-300">{post.title}</p>
              </a>
            </Link>
          </div>
        </div>

        {/* DESCRICAO */}
        <div className=" mt-2
            pp:col-[2] pp:mt-[10px] pp:mb-[7px]
          ">
          <Link href={post.href}>
            <a>
              <p className="mt-3 font-light text-base text-[#555] leading-[150%] dark:text-gray-50 ease-in duration-300">{post.description}</p>
            </a>
          </Link>
        </div>

        {/* CoverImage */}
        {/* <div className="flex-shrink-0 w-[18.5rem] max-h-60"> */}

        <div className="pp:col-[1] pp:row-start-1 pp:row-end-[span5] pp:m-0
            mt-6 -mx-6
          ">
          <div className="block">
            <div className="">
              <Link href={post.href}>
                <a>
                <Image
                  className="absolute h-full w-full object-cover hover:cursor-pointer"
                  src={post.imageUrl}
                  alt=""
                  width='1920px'
                  height='1080px'
                  sizes='100vw'
                />
                </a>
              </Link>
            </div>
          </div>
        </div>
        
        {/* DATA PUB */}
        <div className="pp:mt-[6px] pp:col-[2] items-center block justify-start align-baseline
            my-4
          ">
          <div className="pp:flex font-light pp:space-x-1 text-xs whitespace-nowrap text-[#555] dark:text-gray-100 ease-in duration-300">
            <time>Publicado em {post.date}</time>
          </div>
        </div>

      </div>
    </div>
  );
}


{/* <div className="flex-shrink-0">
  <span className="sr-only">{post.author.name}</span>
  
</div> */}