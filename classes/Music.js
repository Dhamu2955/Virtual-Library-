const Media = require("./Media")

class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre)
        this.artist = artist
        this.length = length
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(albums){
        let temp = albums
        temp.sort((a,b) => a.length - b.length)
        return temp[0]
    }
}

// don't change below
module.exports = Music;
