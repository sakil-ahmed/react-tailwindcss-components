import {twMerge} from "tailwind-merge";

type OverlayProps = {
  className?: string;
  isOpen: boolean
}
export const Overlay = (props: OverlayProps) => {
  const {className, isOpen} = props
  const baseClassName = `${isOpen ? 'block fade-in' : 'fade-out hidden'}  transition-all fixed w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/[.48]`

  // return <div className={''}/>
  return <div className={twMerge(baseClassName, className)}/>
}
