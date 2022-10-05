import Image from "next/image";
import Link from "next/link";

import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a missing property
    WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    '--theme-color'?: 'black' | 'white';

    // ...or allow any other property
    [index: string]: any;
  }
}


type DestaquePostProps = {
  post: {
    title: string;
    imageUrl: string;
    href: string;
    assunto: string;
    description: string;
    author: {
      name: string;
      imageUrl: string;
    }
    date: string;
  }
}

export function DestaquePost({ post }: DestaquePostProps) {
 
  return (
    <>
      <div className="m-0 p-0 border-0 h-full"  >
        <Link href={post.href} passHref>
        
        <div
          className="
              rounded-[3px] 
            bg-cover bg-center hover:cursor-pointer flex justify-center bg-no-repeat items-center 
            h-full relative overflow-hidden hover:scale-105 ease-in duration-300
          "
          style={{
            backgroundImage: `url(${post.imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          >
          <div className="rounded-[3px] flex justify-center backdrop-blur-[2px] hover:backdrop-blur-none  items-center 
              h-full relative overflow-hidden ease-in duration-300
            ">
            <ul className="pt-6 pr-12 pl-6 m-0 flex flex-col z-[2] text-shadow-one">
              <li className="after:content-[''] flex-grow flex-shrink text-base align-middle font-semibold leading-[150%] text-gray-50">{post.assunto}</li>
              <li className="flex-shrink"></li>
              <li className="flex-shrink inline-flex flex-row items-center mb-2 "></li>
            
              {/* TITULO */}
              <li key={post.title} className="flex-shrink">
                <div>
                  <div>
                    <Link href={post.href} passHref>
                      <a className=" mt-2">
                        <p className="text-2xl z-10 text-shadow-xl font-semibold text-gray-100 ease-in duration-300">{post.title}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>

              {/* DESCRICAO */}
              <li className="my-6 flex-shrink relative">
                <a className=" mt-[6px] ml-[1px]">
                <p className="mt-3 text-base text-shadow-xl text-gray-50 ease-in duration-300">{post.description}</p>
              </a>
              </li>
            </ul>
          </div> 
        </div>
        </Link>
      </div> 
    </>
  );
}    




















{/* CoverImage */}
          {/* <div className="flex-shrink-0 mx-auto w-2/4 h-2/3">
            <Link href={post.href}>
              <Image
                className=" h-48  object-cover hover:cursor-pointer"
                src={post.imageUrl}
                alt=""
                height={1080}
                width={1920}
                sizes='100vw'
              />
            </Link>
          </div> */}






{/* web 2*/}   
{/* <div className="hidden md:inline m-0 p-0 border-0"  >
<div className=" first:block border-[1px] hover:scale-105 ease-in duration-300 border-[#e1e1e1] rounded-[3px] bg-cover bg-center flex justify-center bg-no-repeat items-center h-full relative overflow-hidden"
  style={{
    backgroundImage: `url(${post.imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}
>
  <ul className="pt-6 pr-12 pl-6 m-0 flex flex-col z-[2]">
    <li className="after:content-[''] flex-grow flex-shrink"></li>
    <li className="flex-shrink"></li>
    <li className="flex-shrink inline-flex flex-row items-center mb-2 "></li>
    
    
    <li key={post.title} className="flex-shrink">
      <div>
        <div>
          <Link href={post.href}>
            <a className=" mt-2 text-center">
              <p className="text-2xl z-10 font-semibold text-gray-900 dark:text-gray-100 ease-in duration-300">{post.title}</p>
            </a>
          </Link>
        </div>
      </div>
    </li>

    <li className="my-6 flex-shrink relative">
      <a className=" mt-[6px] ml-[1px] text-center">
      <p className="mt-3 text-base text-gray-500 dark:text-gray-50 ease-in duration-300">{post.description}</p>
    </a>
    </li>
  </ul>
    


  
</div>
</div>  */}


      {/* web reserva */}
    {/* <div className="hidden md:inline">
       <div key={post.title} className="rounded-lg shadow-lg overflow-hidden mt-8">
         <Link href={post.href}>
               <a className=" mt-2 text-center">
               <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 ease-in duration-300">{post.title}</p>
                
               </a>
             </Link>
         <div className="flex-shrink-0 mx-auto w-2/4 h-2/3">
           <Link href={post.href}>
             <Image
              className=" h-48  object-cover hover:cursor-pointer"
              src={post.imageUrl}
              alt=""
              height={1080}
              width={1920}
              sizes='100vw'
            />
          </Link>
          <div className="flex flex-row-reverse">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300 ease-in duration-300">
              <time>Publicado em {post.date}</time>
            </div>
          </div>
        </div>
        <Link href={post.href}>
            <a className=" mt-2 text-center">
              <p className="mt-3 text-base text-gray-500 dark:text-gray-50 ease-in duration-300">{post.description}</p>
            </a>
          </Link>
        </div>
      </div>
    </div> */}
    
   
    {/* celular */}
    {/* <div className="md:hidden">
      <div key={post.title} className="rounded-lg shadow-lg overflow-hidden mt-8">
        <Link href={post.href}>
              <a className=" mt-2 text-center">
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 ease-in duration-300">{post.title}</p>
                
              </a>
            </Link>
        <div className="flex-shrink-0 w-full h-full">
          <Link href={post.href}>
            <Image
              className=" h-48  object-cover hover:cursor-pointer"
              src={post.imageUrl}
              alt=""
              height={1080}
              width={1920}
              sizes='100vw'
            />
          </Link>
          <div className="flex flex-row-reverse">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300 ease-in duration-300">
              <time>Publicado em {post.date}</time>
            </div>
          </div>
        </div>
        </div>
          <Link href={post.href}>
            <a className=" mt-2 text-center">
              <p className="mt-3 text-base text-gray-500 dark:text-gray-50 ease-in duration-300">{post.description}</p>
            </a>
          </Link>
      </div>
    </div> */}
 