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
    static calculateAverageRating(movies) {
        let x = 0
        for (let i = 0; i < movies.length; i++){
            x += movies[i].rating
        } return x / movies.length
    }
}

// don't change below
module.exports = Movie;