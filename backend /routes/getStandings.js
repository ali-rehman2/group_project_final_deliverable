const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/:leagueId', async (req, res) => {
  const { leagueId } = req.params;

  const { data, error } = await supabase
    .from('standings')
    .select('*')
    .eq('league_id', leagueId);

  if (error) return res.status(500).json({ error: error.message });
  return res.json({ standings: data });
});

module.exports = router;
