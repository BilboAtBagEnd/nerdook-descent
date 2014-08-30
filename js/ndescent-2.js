var NDESCENT = {};

NDESCENT.Deck = function(directory, cards) {
    this.directory = directory;
    this.deck = [];
    this.discard = [];
    for(var i = 1; i <= cards.length; i++) {
        this.deck.push(cards[i-1]);
    }

    this.shuffle = function() {
        this.deck.sort(function(a, b) { return Math.random() - 0.5 });
    }

    this.draw = function() { 
        var card = this.deck.shift();

        if (card != undefined) {
            this.discard.unshift(card);
            return this.directory + "/" + card;
        }
        else {
            return undefined;
        }
    }

    this.flipBack = function() { 
        var card = this.discard.shift();
        if (card != undefined) { 
            this.deck.unshift(card);
            return this.directory + "/" + card;
        }
        else {
            return undefined;
        }
    }

    this.reshuffle = function() {
        for(var i = 0; i < this.discard.length; i++) {
            this.deck.push(this.discard[i]);
        }
        this.discard = [];
        this.shuffle();
    }

    this.toString = function() {
        return "Deck: " + this.deck + "\nDiscard: " + this.discard;
    }
}

NDESCENT.OverlordAIDeck = new NDESCENT.Deck("images", [
"ol_card_0001.png",
"ol_card_0002.png",
"ol_card_0003.png",
"ol_card_0004.png",
"ol_card_0005.png",
"ol_card_0006.png",
"ol_card_0007.png",
"ol_card_0008.png",
"ol_card_0009.png",
"ol_card_0010.png" ]);

NDESCENT.OverlordEventDeck = new NDESCENT.Deck("images", [
"ol_card_0011.png",
"ol_card_0012.png",
"ol_card_0013.png",
"ol_card_0014.png",
"ol_card_0015.png",
"ol_card_0016.png",
"ol_card_0017.png",
"ol_card_0018.png",
"ol_card_0019.png",
"ol_card_0020.png",
"ol_card_0021.png",
"ol_card_0022.png",
"ol_card_0023.png",
"ol_card_0024.png",
"ol_card_0025.png",
"ol_card_0026.png",
"ol_card_0027.png",
"ol_card_0028.png",
"ol_card_0029.png",
"ol_card_0030.png",
"ol_card_0031.png",
"ol_card_0032.png",
"ol_card_0033.png",
"ol_card_0034.png",
"ol_card_0035.png",
"ol_card_0036.png",
"ol_card_0037.png" ]);

NDESCENT.DungeonDeck = new NDESCENT.Deck("images", [
"tv_card_0001.png",
"tv_card_0002.png",
"tv_card_0003.png",
"tv_card_0004.png",
"tv_card_0005.png",
"tv_card_0006.png",
"tv_card_0007.png",
"tv_card_0008.png",
"tv_card_0009.png",
"tv_card_0010.png",
"tv_card_0011.png",
"tv_card_0012.png",
"tv_card_0013.png",
"tv_card_0014.png",
"tv_card_0015.png",
"tv_card_0016.png",
"tv_card_0017.png",
"tv_card_0018.png",
"tv_card_0019.png",
"tv_card_0020.png",
"tv_card_0021.png",
"tv_card_0022.png",
"tv_card_0023.png",
"tv_card_0024.png"]);

NDESCENT.BlackRealmsDeck = new NDESCENT.Deck("images", [
"br_card0001.jpg",
"br_card0002.jpg",
"br_card0003.jpg",
"br_card0004.jpg",
"br_card0005.jpg",
"br_card0006.jpg",
"br_card0007.jpg",
"br_card0008.jpg",
"br_card0009.jpg"]);

NDESCENT.LtsDeck = new NDESCENT.Deck("images", [
"lt_card_0001.png",
"lt_card_0002.png",
"lt_card_0003.png",
"lt_card_0004.png",
"lt_card_0005.png",
"lt_card_0006.png",
"lt_card_0007.png",
"lt_card_0008.png",
"lt_card_0009.png",
"lt_card_0010.png",
"lt_card_0011.png"]);

NDESCENT.OverlordAIDeck.shuffle();
NDESCENT.OverlordEventDeck.shuffle();
NDESCENT.DungeonDeck.shuffle();
NDESCENT.BlackRealmsDeck.shuffle();
NDESCENT.LtsDeck.shuffle();
