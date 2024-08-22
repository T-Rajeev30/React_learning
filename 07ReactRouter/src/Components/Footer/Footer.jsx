import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023
            <a href="https://hiteshchoudhary.com/" className="hover:underline">
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.853.069 4.081 4.081 0 0 0 3.805 2.82 8.292 8.292 0 0 1-5.122 1.76A8.853 8.853 0 0 1 0 14.213a11.706 11.706 0 0 0 6.29 1.837c7.547 0 11.674-6.206 11.674-11.593 0-.177-.004-.354-.012-.53A8.294 8.294 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 18"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a8.351 8.351 0 0 0-2.643 16.265c.418.076.571-.177.571-.396 0-.193-.007-.704-.01-1.382-2.326.504-2.816-.991-2.816-.991-.38-.963-.93-1.219-.93-1.219-.761-.514.058-.503.058-.503.84.06 1.282.846 1.282.846.748 1.276 1.964.908 2.442.695.076-.539.293-.908.534-1.117-1.856-.209-3.81-.919-3.81-4.094 0-.904.33-1.644.871-2.224-.087-.21-.377-1.056.083-2.2 0 0 .706-.224 2.31.854a7.876 7.876 0 0 1 2.104-.283 7.857 7.857 0 0 1 2.104.283c1.604-1.078 2.31-.854 2.31-.854.46 1.144.171 1.99.084 2.2.54.58.87 1.32.87 2.224 0 3.184-1.955 3.883-3.815 4.088.3.255.573.756.573 1.523 0 1.1-.01 1.988-.01 2.258 0 .22.151.476.578.395A8.352 8.352 0 0 0 8 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .162c-5.466 0-9.89 4.424-9.89 9.89 0 5.466 4.424 9.89 9.89 9.89 5.466 0 9.89-4.424 9.89-9.89 0-5.466-4.424-9.89-9.89-9.89Zm3.623 14.277c-.258.71-1.04 1.313-1.716 1.35-.455.024-.577-.258-.574-.516l.01-.85c0-.3-.104-.497-.216-.597.779-.086 1.516-.305 2.087-.692a5.006 5.006 0 0 0 1.267-1.19.418.418 0 0 0-.426-.657c-.497.167-1.045.412-1.48.494-.398.073-.826-.198-.99-.487-.332-.572-.582-1.225-.772-1.857.475-.975.937-2.07.33-3.047-.799-1.267-2.77-1.173-3.685-.292-.257.246-.472.547-.626.883-.142.314-.267.748-.354 1.126a1.595 1.595 0 0 1-.396.769c-.163.163-.493.487-.647.65-.097.097-.195.218-.283.32-.074.086-.147.165-.216.27a5.773 5.773 0 0 0-.302.485c-.068.134-.151.234-.259.35-.278.285-.345.545-.332.883.006.133.054.444.072.577.026.183.055.354.084.526.026.15.1.316.145.47.042.144.1.364.083.524-.03.301.144.532.419.552.62.046 1.424-.18 1.898-.335.419-.136.85-.33 1.252-.537.278-.14.54-.299.79-.469.26-.177.558-.302.837-.463.116-.07.232-.148.349-.229-.098.16-.213.314-.324.469Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
