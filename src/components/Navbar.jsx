
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" }

]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll" , handleScroll);
        return () => window.removeEventListener("scroll" , handleScroll);
    } , [])
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300" . isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="container flex items-center justify-between">
                <a  className= " text-xl font-bold text-primary flex items-center"href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Sanskar</span> Sahu
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>

                {/*Mobile view */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center" ,
                    "transition-all duration-300 md:hidden"
                )}>
                    <div className="hidden md:flex space-x-8">
                    {navItems.map((item,key)=>(
                        <a 
                        key={key} 
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
