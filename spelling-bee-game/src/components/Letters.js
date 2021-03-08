import { useEffect, useState } from 'react'


function Letters() {

    const [selectedLetters, setSelectedLetters] = useState([])

    useEffect(() => {

        randomLetterGenerator()

    }, [])

    const randomLetterGenerator = () => {

        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const lettersArray = []
        var i = 0

        while (i < 7) {
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        
            //something to ensure vowels

            if (lettersArray.includes(randomCharacter)) {
                continue
            } else if (randomCharacter == 'q') {
                if(lettersArray.includes('u')) {
                    lettersArray.push(randomCharacter)
                    i++
                } else if (i < 6) {
                    lettersArray.push(randomCharacter)
                    lettersArray.push('u')
                    i = i+2
                }            
            } else {
                lettersArray.push(randomCharacter)
                i++
            }
        }

        setSelectedLetters(lettersArray)

    }

    const addLetter = () => {

    }

    const lettersDisplay = selectedLetters.map(letter => {
        return <button className='letterButtons' onclick={addLetter}>{letter}</button>
    })
    


    return (
        <div className="">
            {lettersDisplay}

        </div>
    );
}

export default Letters;
