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

NDESCENT.OverlordDeck = new NDESCENT.Deck("images/Custom Deck - Overlord II", [
"aicard0001.jpg",
"aicard0002.jpg",
"aicard0003.jpg",
"aicard0004.jpg",
"aicard0005.jpg",
"aicard0006.jpg",
"aicard0007.jpg",
"aicard0008.jpg",
"aicard0009.jpg",
"aicard0010.jpg",
"aicard0011.jpg",
"aicard0012.jpg",
"aicard0013.jpg",
"aicard0014.jpg",
"aicard0015.jpg",
"aicard0016.jpg",
"aicard0017.jpg",
"aicard0018.jpg" ]);

NDESCENT.DungeonDeck = new NDESCENT.Deck("images/Custom Deck - Dungeon", [
"loccard0001.jpg", 
"loccard0002.jpg", 
"loccard0003.jpg", 
"loccard0004.jpg", 
"loccard0005.jpg", 
"loccard0006.jpg", 
"loccard0007.jpg", 
"loccard0008.jpg", 
"loccard0009.jpg", 
"loccard0010.jpg", 
"loccard0011.jpg", 
"loccard0012.jpg", 
"loccard0013.jpg", 
"loccard0014.jpg", 
"loccard0015.jpg", 
"loccard0016.jpg", 
"loccard0017.jpg", 
"loccard0018.jpg", 
"loccard0019.jpg", 
"loccard0020.jpg", 
"loccard0021.jpg", 
"loccard0022.jpg", 
"loccard0023.jpg", 
"loccard0024.jpg" ]);

NDESCENT.LtsDeck = new NDESCENT.Deck("images/Custom Deck - Lts", [
"ltcard0001.jpg",
"ltcard0002.jpg",
"ltcard0003.jpg",
"ltcard0004.jpg",
"ltcard0005.jpg",
"ltcard0006.jpg",
"ltcard0007.jpg",
"ltcard0008.jpg",
"ltcard0009.jpg" ]);

NDESCENT.OverlordDeck.shuffle();
NDESCENT.DungeonDeck.shuffle();
NDESCENT.LtsDeck.shuffle();
