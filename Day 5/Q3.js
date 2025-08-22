var books = ['Harry Potter', 'The king of dragons', 'People never tell the truth', 'One mans trash']
var newbooks = books.splice(1)
console.log(newbooks)
newbooks.push('One Walk Way')
for(a in newbooks){
    console.log(newbooks[a])
}