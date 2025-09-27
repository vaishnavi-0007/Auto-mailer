let users = [
    {id: 1, username:"vaishnavi", password: "12345"},
];

export const registerUser = (req, res) => {
    const {username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({message: "Username and Password is required"});
    }

    const exists = users.find((u) => u.username === username);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.status(201).json({ message: "User registered", user: newUser });
};
export const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
};
