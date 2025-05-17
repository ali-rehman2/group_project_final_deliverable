const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { supabase } = require('../SupabaseClient');

router.post('/', async (req, res) => {
  const { leagueId, season } = req.body;

  const apiUrl = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${season}`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  });

  const json = await response.json();
  const standingsData = json.response[0]?.league?.standings?.[0];

  if (!standingsData) return res.status(400).json({ error: 'No standings data found' });

  for (const team of standingsData) {
    await supabase
      .from('standings')
      .upsert({
        league_id: leagueId,
        team_id: team.team.id,
        team_name: team.team.name,
        rank: team.rank,
        points: team.points,
        season: season,
      });
  }

  res.json({ message: 'Data stored successfully' });
});

module.exports = router;
