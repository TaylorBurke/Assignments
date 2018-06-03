

var bookReader = {
    name: "Bill",
    age: 33,
    favoriteBooks: [
        {
            bookName: "The Things They Carried",
            bookAuthor: "Tim O\'brien",
            bookPages: 238
        },
        {
            bookName: "1984",
            bookAuthor: "George Orwell",
            bookPages: 342
        }
    ],
    friends: [
        {
            theirName: "Sara",
            age: 30,
            favoriteBooks: [
                {
                    bookName: "Slaughterhouse 5",
                    bookAuthor: "Kurt Vonnegut Jr.",
                    bookPages: 284
                },
                {
                
                    bookName: "Dharma Bums",
                    bookAuthor: "Jack Kerouac",
                    bookPages: 187
                
                }
            ]
        }
    ],
    makeRecomendation: function() {
        console.log(this.name + " wants you to read their favorite books!")
    }
}

bookReader.makeRecomendation();