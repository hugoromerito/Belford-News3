import { Popover, Transition } from '@headlessui/react'
import { FacebookLogo, WhatsappLogo, InstagramLogo, House, List } from "phosphor-react";
import { Fragment } from 'react'

const home = [
  {
    name: 'Início',
    description: 'As principais notícias',
    href: '/',
    icon: IconHome,
  },
]

const redesSociais = [
  {
    name: 'Instagram',
    description: 'Fique ligado no nosso Insta',
    href: 'https://www.instagram.com/belfordnews/',
    icon: IconInstagram,
  },
  {
    name: 'Facebok',
    description: 'Mantenha-se atualizado no Face',
    href: 'https://www.facebook.com/belfordnewsoficial',
    icon: IconFacebook,
  },
  {
    name: 'Grupo Whatsapp',
    description: 'Seja o primeiro a receber as notícias',
    href: 'https://chat.whatsapp.com/I0DdS2ldqd31qvaCvuKPM8',
    icon: IconWhatsapp,
  },
]



export function Menu() {
  return (
    <div className=" z-10 top-[5.5rem] max-w-sm px-4">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-purple-600 dark:bg-purple-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ease-in duration-300`}
            >
              
              <List
                className={`${open ? '' : 'text-opacity-100'}
                  text-2xl text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
                {/* Tamanho do menu aberto */}
              <Popover.Panel className="absolute left-2/4 md:left-[15%] z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm overflow-hidden">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="  bg-white dark:bg-[#121214] p-7 ">
                  {home.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-[#121214] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}

                    {redesSociais.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-[#121214] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                    
                  </div>
                  <div className="bg-gray-50 dark:bg-[#141414] p-4">
                    <a
                      href="https://wa.me/message/KQIA3NCGLACKG1"
                      target="_blank"
                      rel="noreferrer"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-[#141414] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          Suporte
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-100">
                        Teve problema enquanto navegava pelo site? Nos mande um print do problema para que possamos resolve-lô o mais rápido possível.
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconHome() {
  return (
    <House color="#be3cfb" weight="duotone" size={32} />
  )
}

function IconInstagram() {
  return (
    <InstagramLogo color="#be3cfb" weight="duotone" size={32} />
  )
}

function IconFacebook() {
  return (
    <FacebookLogo color="#be3cfb" weight="duotone" size={32} />
  )
}

function IconWhatsapp() {
  return (
    <WhatsappLogo color="#be3cfb" weight="duotone" size={32} />
  )
}


{/* <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" /> */}