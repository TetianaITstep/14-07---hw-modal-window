// const playlist = {
//   name: "My favorite playLis",
//   rating: 5,
//   tracks: ["Track-1", "Track-2"],
//   trackCount: 2,
// };

// const { rating, name, trackCount, author = "I" } = playlist;

// console.log(name);
// console.log(rating);
// console.log(trackCount);
// console.log(author);
// console.log(playlist);
// playlist.author = "user";
// console.log(playlist);

// Глибока деструктуризація

const playlist = {
  name: "My favorite playLis",
  rating: 5,
  tracks: { track_1: "Abbdfhdfh", track_2: "sjodjeiodwod" },
  trackCount: 2,
};

const {
  name,
  rating,
  tracks: { track_1, track_2 },
  trackCount,
} = playlist;
console.log(name, rating, track_1, track_2, trackCount);
