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
"ol_card0001.jpg",
"ol_card0002.jpg",
"ol_card0003.jpg",
"ol_card0004.jpg",
"ol_card0005.jpg",
"ol_card0006.jpg",
"ol_card0007.jpg",
"ol_card0008.jpg",
"ol_card0009.jpg",
"ol_card0010.jpg",
"ol_card0011.jpg",
"ol_card0012.jpg",
"ol_card0013.jpg",
"ol_card0014.jpg",
"ol_card0015.jpg",
"ol_card0016.jpg",
"ol_card0017.jpg",
"ol_card0018.jpg"]);

NDESCENT.OverlordEventDeck = new NDESCENT.Deck("images", [
"ol_card0019.jpg",
"ol_card0020.jpg",
"ol_card0021.jpg",
"ol_card0022.jpg",
"ol_card0023.jpg",
"ol_card0024.jpg",
"ol_card0025.jpg",
"ol_card0026.jpg",
"ol_card0027.jpg",
"ol_card0028.jpg",
"ol_card0029.jpg",
"ol_card0030.jpg",
"ol_card0031.jpg",
"ol_card0032.jpg",
"ol_card0033.jpg",
"ol_card0034.jpg",
"ol_card0035.jpg",
"ol_card0036.jpg",
"ol_card0037.jpg",
"ol_card0038.jpg",
"ol_card0039.jpg",
"ol_card0040.jpg",
"ol_card0041.jpg",
"ol_card0042.jpg",
"ol_card0043.jpg",
"ol_card0044.jpg",
"ol_card0045.jpg"]);

NDESCENT.DungeonDeck = new NDESCENT.Deck("images", [
"dg_card0001.png",
"dg_card0002.png",
"dg_card0003.png",
"dg_card0004.png",
"dg_card0005.png",
"dg_card0006.png",
"dg_card0007.png",
"dg_card0008.png",
"dg_card0009.png",
"dg_card0010.png",
"dg_card0011.png",
"dg_card0012.png",
"dg_card0013.png",
"dg_card0014.png",
"dg_card0015.png",
"dg_card0016.png",
"dg_card0017.png",
"dg_card0018.png",
"dg_card0019.png",
"dg_card0020.png",
"dg_card0021.png",
"dg_card0022.png",
"dg_card0023.png",
"dg_card0024.png"]);

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
"lt_card0001.jpg",
"lt_card0002.jpg",
"lt_card0003.jpg",
"lt_card0004.jpg",
"lt_card0005.jpg",
"lt_card0006.jpg",
"lt_card0007.jpg",
"lt_card0008.jpg",
"lt_card0009.jpg"]);

NDESCENT.OverlordAIDeck.shuffle();
NDESCENT.OverlordEventDeck.shuffle();
NDESCENT.DungeonDeck.shuffle();
NDESCENT.BlackRealmsDeck.shuffle();
NDESCENT.LtsDeck.shuffle();
