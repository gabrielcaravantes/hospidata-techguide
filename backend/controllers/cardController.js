const pool = require('../models/db');

//cria um novo card
exports.createCard = async (req, res) => {
  const { title, content, attachments } = req.body;
  try {
    const newCard = await pool.query(
      'INSERT INTO cards (title, content, attachments, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, content, attachments, req.userId]  //usa o userId do token JWT
    );
    res.json(newCard.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

//obtém todos os cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await pool.query('SELECT * FROM cards WHERE user_id = $1', [req.userId]);
    res.json(cards.rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

//obtém um card específico por ID
exports.getCardById = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await pool.query('SELECT * FROM cards WHERE id = $1 AND user_id = $2', [id, req.userId]);
    if (card.rows.length === 0) return res.status(404).json({ error: 'Card not found' });
    res.json(card.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
