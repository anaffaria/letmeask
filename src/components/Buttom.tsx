import {ButtonHTMLAttributes} from "react";
import '../styles/button.scss'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Buttom(props: ButtonProps) {
  return <button className="button" {...props}/>
}

