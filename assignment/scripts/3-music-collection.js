console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished, tracks) {
let newObj = {};
newObj.title = title;
newObj.artist = artist;
newObj.yearPublished = yearPublished;
newObj.tracks = tracks;
collection.push(newObj);
console.log(newObj);
return newObj;
}

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    let listTracks = '';
    let count = 0;
   
    for (j in collection[i].tracks) {
      count++;
      listTracks += '\n     ' + count + '. ' + collection[i].tracks[j].name + ': ' + collection[i].tracks[j].duration;
      //console.log('tracks:', listTracks);
    }
    console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished + listTracks);
    
    
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

function search(collection, searchCriteria, trackName) {
  let matched = [];
  if (trackName) {
    //console.log('searching for track name');
    for (i in collection) {
      for (j in collection[i].tracks) {
        if (collection[i].tracks[j].name === trackName) {
          matched.push(collection[i]); // I'm having it return the album with the track in it.
        }
      }
    }
    return matched;

  } else if (searchCriteria !== undefined && searchCriteria.hasOwnProperty('artist' && 'yearPublished')) { //learned about hasOwnProperty on freeCodeCamp
    console.log('it has the criteria');
    for (i in collection) {
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished) {
        matched.push(collection[i]);
      }
    }
  } else {
    return collection;
  }
  return matched;
}


//******Attempted another way to do this********
// function search (collection, searchCriteria) {
//   let matched = [];
//   if (searchCriteria !== undefined && searchCriteria.artist !== (undefined || '') && searchCriteria.yearPublished !== (undefined || '')) {
//     console.log('it has the criteria');
//     for (i in collection) {
//       if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished) {
//         matched.push(collection[i]);
//       }
//     }
//   } else {
//     console.log('it does not have the criteria');
//     return collection;
//   }
//   return matched;
// }


//******If you uncomment the tracks array, the code works, but a couple of tests say that they are pending*** */
addToCollection(myCollection, 'The Human Condition', 'Jon Bellion', 2016, 
// [
//   {name: 'He Is The Same', duration: '4:01'}, 
//   {name: '80\'s Films', duration: '3:35'}
// ]
);
addToCollection(myCollection, 'Happier Than Ever', 'Billie Eilish', 2021, 
// [
//   {name: 'Getting Older', duration: '4:04'}, 
//   {name: 'I Didn\'t Change My Number', duration: '2:37'}
// ]
);
addToCollection(myCollection, 'The Click', 'AJR', 2017);
addToCollection(myCollection, 'Glory Sound Prep', 'Jon Bellion', 2018);
addToCollection(myCollection, 'a beautiful blur', 'LANY', 2023);
addToCollection(myCollection, 'Olly Olly', 'Penny and Sparrow', 2022);

console.log(myCollection);
showCollection(myCollection);

console.log('Found:', findByArtist(myCollection, 'Jon Bellion'));
console.log('Found:', findByArtist(myCollection, 'The Beetles'));


console.log(search(myCollection, {artist: 'Jon Bellion', yearPublished: 2016}, 'Getting Older'));










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
