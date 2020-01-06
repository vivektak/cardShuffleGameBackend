const CARD_DECK_BASE_URL = 'https://deckofcardsapi.com/api/deck';
const GET_RANDOM_CARDS_API_URL = `${CARD_DECK_BASE_URL}/new/shuffle/?deck_count=1`;
const NUMBER_OF_CARDS = 9;

module.exports = {
	CARD_DECK_BASE_URL,
    GET_RANDOM_CARDS_API_URL,
    NUMBER_OF_CARDS
};
