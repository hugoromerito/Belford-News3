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


type Destaque2PostProps = {
  post: {
    title: string;
    imageUrl: string;
    href: string;
    description: string;
    author: {
      name: string;
      imageUrl: string;
    }
    date: string;
  }
}

export function Destaque2Post({ post }: Destaque2PostProps) {
 
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
              <li className="after:content-[''] flex-grow flex-shrink"></li>
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