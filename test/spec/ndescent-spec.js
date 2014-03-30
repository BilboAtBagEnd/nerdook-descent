describe("NDESCENT.Deck functionality", function() {
    var deck;

    beforeEach(function() {
        deck = new NDESCENT.Deck("Directory of Images", [1, 2, 3, 4, 5]);
    });

    it("creates a new deck", function() {
        expect(deck.deck.length).toBe(5);
        expect(deck.deck.toString()).toBe([1,2,3,4,5].toString());
        expect(deck.discard.length).toBe(0);
    });

    it("draws cards into the discard", function() {
        expect(deck.draw()).toBe("Directory of Images/1");
        expect(deck.draw()).toBe("Directory of Images/2");
        expect(deck.draw()).toBe("Directory of Images/3");
        expect(deck.deck.length).toBe(2);
        expect(deck.discard.length).toBe(3);
    });

    it ("returns undefined for a depleted deck", function() {
        deck = new NDESCENT.Deck("Directory", []);
        expect(deck.draw()).not.toBeDefined();
    });

    it("shuffles cards", function() {
        var success = false;
        var retries = 0;
        while(retries < 10) {
            deck = new NDESCENT.Deck("A", [1,2,3,4,5]);
            deck.shuffle();
            if (deck.draw() !== "A/1") {
                success = true;
                break;
            }
            retries = retries + 1;
        };
        expect(success).toBe(true);
    });

    it("reshuffles a depleted deck", function() {
        for(var i = 0; i < 5; i++) {
            deck.draw();
        }
        deck.reshuffle();
        expect(deck.deck.length).toBe(5);
        expect(deck.discard.length).toBe(0);
    });

    it("reshuffles a non-depleted deck", function() {
        for(var i = 0; i < 2; i++) {
            deck.draw();
        }
        deck.reshuffle();
        expect(deck.deck.length).toBe(5);
        expect(deck.discard.length).toBe(0);
    });

    it("reshuffles a full deck", function() {
        var success = false;
        var retries = 0;
        while(retries < 10) {
            deck = new NDESCENT.Deck("A", [1,2,3,4,5]);
            deck.reshuffle();
            if (deck.draw() !== "A/1") {
                success = true;
                break;
            }
            retries = retries + 1;
        };
        expect(success).toBe(true);
    });

    it("flips back through drawn cards", function() {
        for(var i = 0; i < 3; i++) { 
            deck.draw();
        }
        expect(deck.flipBack()).toBe("Directory of Images/3");
        expect(deck.flipBack()).toBe("Directory of Images/2");
        expect(deck.flipBack()).toBe("Directory of Images/1");
        expect(deck.flipBack()).not.toBeDefined();
    });
});
