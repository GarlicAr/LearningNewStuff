type HangmanWordProps = {
    guessedLetters: string[],
    wordToguess: string,
    reveal?: boolean
}

export function HangmanWord({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps){


 return (
    <div style={{
        display: "flex", 
        gap: ".25em", 
        fontSize: "6rem", 
        fontWeight: "bold", 
        textTransform: "uppercase",
        fontFamily: "monospace"}}>

        {wordToGuess.split("").map((letter:string, index:number) =>(
            <span style={{borderBottom: ".1em solid black"}} key={index}> 
            <span style={{
                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}>
                {letter}
            </span>
            </span>
        ))}

    </div>
 )
    
}