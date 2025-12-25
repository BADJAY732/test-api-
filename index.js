console.log("SERVER STARTED");

const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Jay", phone: "0990190339" },
  { id: 2, name: "John", phone: "0812345678" },
  { id: 3, name: "Jane", phone: "0899999999" },
  { id: 4, name: "James", phone: "0822222222" },
  { id: 5, name: "Jenny", phone: "0833333333" }
];

app.get("/users", (req, res) => {
  const search = req.query.search || "";
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  if (page < 1) {
    return res.status(400).json({ message: "page must be >= 1" });
  }

  if (limit < 1) {
    return res.status(400).json({ message: "limit must be >= 1" });
  }

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.phone.includes(search)
  );

  const totalPage = Math.ceil(filteredUsers.length / limit);


  if (page > totalPage && totalPage > 0) {
    return res.status(404).json({ message: "page not found" });
  }

  const startIndex = (page - 1) * limit;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + limit
  );

  res.json({
    page,
    limit,
    total: filteredUsers.length,
    totalPage,
    hasNext: page < totalPage,
    data: paginatedUsers
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
