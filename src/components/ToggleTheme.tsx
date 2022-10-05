import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";

export function ToggleTheme() {
  const {theme, setTheme} = useTheme()
  
  return (
    <div className="mx-5 ">
      <button
        className="hover:brightness-75 w-6 h-6 ease-linear duration-200 text-white"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        
        {theme === 'light' 
          ?
          <Sun className="text-2xl" weight="bold" />
          : 
          <Moon className="text-2xl" weight="bold" />
        }
         
      </button>
    </div>
  )
}