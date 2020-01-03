const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');
const _ = require('lodash')

app.use(cors())

app.get('/api/getRandomCards', (req, res) => {
	const getDeckIdUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
	request(getDeckIdUrl, { json: true }, (err, response, body) => {
		const deckId = body.deck_id;
		const cardApiUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=9`;
		request(cardApiUrl, { json: true }, (err, response, body) => {
            const responseBody = {
                deckOne: body.cards,
                deckTwo: _.shuffle(body.cards)
            } 
			return res.send({
				error: false,
				message: 'rendom cards',
				data: responseBody
			});
		});
	});
});

app.listen(3000);
