import { Fragment, useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-slate-600">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-100 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="../_Processos."
                  className="text-sm font-medium text-gray-100 hover:text-gray-800"
                >
                  Entrar
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-100 hover:text-gray-800"
                >
                  Crie uma Conta
                </a>
              </div>

              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
