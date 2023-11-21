console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
let newObj = {};
newObj.title = title;
newObj.artist = artist;
newObj.yearPublished = yearPublished;
collection.push(newObj);
console.log(newObj);
return newObj;
}

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished);
  }
}

function findByArtist(collection, artist) {
  let matched = [];
  for (let i in collection) {
    if (collection[i].artist === artist) {
      matched.push(collection[i]);
    }
  }
  return matched;
}

// function search(collection, searchCriteria) {
//   let matched = [];
//   if (searchCriteria.hasOwnProperty('artist' && 'year')) {
//     console.log('it has the criteria');
//     for (i in collection) {
//       if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
//         matched.push(collection[i]);
//       }
//     }
//   } else {
//     return collection;
//   }
//   return matched;
// }

function search (collection, searchCriteria) {
  if (searchCriteria.artist !== '' && searchCriteria.year !== '') {
    console.log('it has the criteria');
  } else {
    console.log('it does not have the criteria');
  }
}

addToCollection(myCollection, 'The Human Condition', 'Jon Bellion', 2016);
addToCollection(myCollection, 'Happier Than Ever', 'Billie Eilish', 2021);
addToCollection(myCollection, 'The Click', 'AJR', 2017);
addToCollection(myCollection, 'Glory Sound Prep', 'Jon Bellion', 2018);
addToCollection(myCollection, 'a beautiful blur', 'LANY', 2023);
addToCollection(myCollection, 'Olly Olly', 'Penny and Sparrow', 2022);

//console.log(myCollection);
showCollection(myCollection);

console.log('Found:', findByArtist(myCollection, 'Jon Bellion'));
console.log('Found:', findByArtist(myCollection, 'The Beetles'));


//console.log(search(myCollection, {artist: 'Billie Eilish', year: 2021}));








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
