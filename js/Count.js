class Count {
    constructor() {
        this.textArea = document.querySelector(".count__textarea")
        this.wordCount = document.querySelectorAll(".word-count")
        this.charCount = document.querySelectorAll(".character-count")
        /*
        bind(this) is used to make sure that the this keyword inside the updateCount method refers to the Count class
        */
        window.addEventListener("load", this.updateCount.bind(this))
        this.textArea.addEventListener("input", this.updateCount.bind(this))
    }

    /**
     * trim() removes whitespace from both sides of a string
     * if the value is empty, return 0
     * split() splits a string into an array of substrings, and returns the new array
     * @returns {number} the number of words in the textarea
     */
    countWords() {
        const value = this.textArea.value.trim()
        if(!value) return 0
        return value.split(/\s+/).length
    }

    /**
     * length returns the length of a string
     * @returns {number} the number of characters in the textarea
     */
    countChars() {
        return this.textArea.value.length 
    }

    /**
     * update the word and character count
     * forEach() calls a function once for each element in an array, in order
     * toString() converts a number to a string
     * @returns {void}
     */
    updateCount() {
        const numWords = this.countWords()
        const numChars = this.countChars()

        this.wordCount.forEach((wordCount) => {
            wordCount.textContent = numWords.toString(10)
        })

        this.charCount.forEach((charCount) => {
            charCount.textContent = numChars.toString(10)
        })
    }
}

new Count() // create a new instance of the Count class