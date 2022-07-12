import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className="bg-[url('./fungi.jpeg')] bg-no-repeat bg-cover bg-center h-screen w-screen">
      <Navbar /> 
      <div className="">
        <div className="absolute inset-x-0 bottom-72 h-24 ...">
        <div className="flex items-right w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 pl-20">
            <h1 className="text-4xl font-serif leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
            Play. Protect. Preserve.
            </h1>
            <p className="py-5 text-2xl text-extrabold leading-normal text-amber-800 lg:text-2xl text-extrabold xl:text-2xl text-extrabold">
            Answer the call of the Curupira. With the Amazon Rainforest 
            on the brink of collapse, rise up and become a Guardian 
            to take back what was lost!
            </p>
            

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://climateguardians.io/climate-guardians-homebase-mv/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-md ">
                Launch minigame
              </a>
              <a
                href="https://lumberjackinvasion-edeb4.ondigitalocean.app/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-md ">
                Launch MVP
              </a>
              <a
                href="https://climate-guardians.gitbook.io/docs/game/introduction"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-white hover:text-green-700">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>Gitbook litepaper</span>
              </a>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </div>
  )
}
