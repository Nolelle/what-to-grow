export default function SearchBar(props:any) {

  return (

    <input onChange={props.handleChange} type="text" placeholder="enter search here!"></input>

    )
}


// app.get("/listings", (req, res) => {
//   const searchQuery = req.query.search;
//   const limit = Number(req.query.limit);
//   let query = `
//     SELECT id, name, picture_url, price, quantity, favorited
//     FROM listings`;

//   if (searchQuery && searchQuery.length)
//     query += ` WHERE LOWER(name) LIKE LOWER('%${searchQuery}%')`;
//   console.log("limit", limit);

//   query += ` ORDER BY favorited DESC, id DESC`;


//   if (limit > 0) query += ` LIMIT ${limit} `;

//   db.query(query)
//     .then((data) => {
//       const listings = data.rows;
//       res.json({
//         listings,
//         loggedInUser: req.session.user
//       });
//     })
//     .catch((err) => {
//       console.log('error 3');
//       res.status(500).json({ error: err.message });
//     });
// });

