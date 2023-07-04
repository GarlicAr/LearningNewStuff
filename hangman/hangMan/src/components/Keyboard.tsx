import styles from "./keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  

  type KeyboardProps = {
    activeLetter: string[],
    inActiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    disabled?: boolean 
  }

export function Keyboard({activeLetter, inActiveLetters, addGuessedLetter, disabled = false}: KeyboardProps){
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
            gap: ".5rem",
        }}>
         
        {KEYS.map(key => {
            const isActive = activeLetter.includes(key)
            const isInactive = inActiveLetters.includes(key)
            return (<button 
            onClick={()=> addGuessedLetter(key)} 
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
            disabled={isActive || isInactive || disabled}
            key={key}>{key}</button>
            )
        })}

        </div>
    )
}