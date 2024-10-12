const pool = require('./db');

//função para registrar um novo usuário
exports.createUser = async (username, hashedPassword) => {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    [username, hashedPassword]
  );
  return result.rows[0];
};

//função para buscar um usuário pelo username
exports.findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];  //retorna o primeiro usuário encontrado
};
