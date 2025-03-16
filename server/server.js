const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'users.json');

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const getUsers = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

app.post('/api/register', (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const users = getUsers();
    
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    
    if (users.some(user => user.email === email)) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password
    };
    
    users.push(newUser);
    saveUsers(users);
    
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    
    const users = getUsers();
    
    const user = users.find(user => user.username === username);
    
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    res.json({ 
      message: 'Login successful!',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.get('/api/users', (req, res) => {
  try {
    const users = getUsers();
    const safeUsers = users.map(({ id, username, email }) => ({ id, username, email }));
    res.json(safeUsers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
