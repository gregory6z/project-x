import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function ButtonsSocialNetworks() {
  return (
    <div className="flex bg-background-dark-900  ">
      <div className=" flex w-full gap-2 px-[1.125rem] py-6 lg:mx-auto lg:max-w-[1120px] lg:px-0 lg:px-16  ">
        <Link href="#">
          <button className=" rounded-md bg-background-dark-700 p-2 text-yellow-normal transition-all  duration-500 hover:bg-yellow-normal hover:text-background-dark-900">
            <Instagram className="h-8 w-8"></Instagram>
          </button>
        </Link>
        <Link href="#">
          <button className=" rounded-md bg-background-dark-700 p-2 text-yellow-normal transition-all  duration-500 hover:bg-yellow-normal hover:text-background-dark-900">
            <Facebook className="h-8 w-8"></Facebook>
          </button>
        </Link>
        <Link href="#">
          <button className=" rounded-md bg-background-dark-700 p-2 text-yellow-normal transition-all  duration-500 hover:bg-yellow-normal hover:text-background-dark-900">
            <Linkedin className="h-8 w-8"></Linkedin>
          </button>
        </Link>
        <Link href="#">
          <button className=" rounded-md bg-background-dark-700 p-2 text-yellow-normal transition-all  duration-500 hover:bg-yellow-normal hover:text-background-dark-900">
            <Youtube className="h-8 w-8"></Youtube>
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
