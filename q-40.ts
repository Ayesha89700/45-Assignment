
/*Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries 
 representing different albums. Print each return value to show that Objects are storing the album information correctly.
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/

  function make_album(artist_name: string, album_title:string, tracks?:number){
    let album: {artist:string, titles:string, tracks?: number} = {
        artist: artist_name,
        titles: album_title
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

  }

  //calling 3 functions and creating 3 different values
  let album1 = make_album("Saif", "Album title 1");
  let album2 = make_album("Elvish", "Album title 2");

  //calling a make album function with third parameter
  let album3 = make_album("Atif Aslam", "Album title 3", 15);

  //printing values of our object created my function

  console.log(album1);
  console.log(album2);
  console.log(album3);

 
