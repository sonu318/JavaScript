const coding = ["py","java","cpp","c"]

const mynums = [1,2,3,4,5]

// const newnums = mynums.filter((num)=>num>=4)

const newnums = mynums.filter((num)=>{
    return num>=4
})

// console.log(newnums)

const books = [
    {bookname:"book one" ,genre:"history",edition : "2001"},
    {bookname:"book two" ,genre:"maths",edition : "2010"},
    {bookname:"book three" ,genre:"history",edition : "1998"},
    {bookname:"book four" ,genre:"science",edition : "1991"},
    {bookname:"book five" ,genre:"non-fiction",edition : "2015"}
]

let userBooks = books.filter((bk)=>bk.genre === 'history')

console.log(userBooks)