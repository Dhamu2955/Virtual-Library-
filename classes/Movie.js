const Media = require("./Media")

class Movie extends Media {
    constructor(title, year, genre, director, duration ,rating) {
        super(title, year, genre)
        this.director = director
        this.rating = rating
        this.duration = duration
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(movies){
        let temp = movies
        temp.sort((a,b) => b.duration - a.duration)
        return temp[0]
    }
}

// don't change below
module.exports = Movie;