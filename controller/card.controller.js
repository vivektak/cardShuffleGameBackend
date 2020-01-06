const request = require('request');
const { shuffle } = require('lodash');
const { GET_RANDOM_CARDS_API_URL, CARD_DECK_BASE_URL, NUMBER_OF_CARDS } = require('../utils/constants');

/**
 * @swagger
 * /api/getRandomCards:
 *   get:
 *     tags:
 *       - Cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Deck
 */
module.exports.getRandomCards = (req, res) => {
	const getDeckIdUrl = GET_RANDOM_CARDS_API_URL;
	try {
		request(getDeckIdUrl, { json: true }, (err, response, body) => {
			const deckId = body.deck_id;
			const cardApiUrl = `${CARD_DECK_BASE_URL}/${deckId}/draw/?count=${NUMBER_OF_CARDS}`;
			request(cardApiUrl, { json: true }, (err, response, body) => {
				const responseBody = {
					deckOne: body.cards,
					deckTwo: shuffle(body.cards)
				};
				return res.send({
					error: false,
					message: 'random cards',
					data: responseBody
				});
			});
		});
	} catch (err) {
		return res.status(500).send({
			error: true,
			messgae: 'Error while getting cards from dec api',
			data: err
		});
	}
};
