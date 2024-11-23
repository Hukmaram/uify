import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto p-6 lg:px-8">
        <nav className="flex items-center justify-start lg:gap-x-12">
          <Link
            to="/"
            className="text-gray-900 font-bold text-lg hover:text-indigo-600"
          >
            Uify
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            {/* <Link
              to="/docs"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Docs
            </Link> */}
            <Link
              to="/components"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Components
            </Link>
            {/* <Link
              to="/examples"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Examples
            </Link> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/uify-team/uify"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Github
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="text-gray-900 font-bold text-lg hover:text-indigo-600"
              >
                Uify
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                <Link
                  to="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Docs
                </Link>
                <Link
                  to="/components"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Components
                </Link>
                <Link
                  to="/examples"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Examples
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/uify-team/uify"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
