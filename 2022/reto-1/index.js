const gifts = ['cat', 'game', 'socks'];

function wrapping(gifts) {
    return gifts.map(gift => {
        const lengthOfGift = gift.length + 2;
        const topBottomBorders = '*'.repeat(lengthOfGift);

        const giftWithSideBorder = `\n*${gift}*\n`;
        const giftWrapped =  `${topBottomBorders}${giftWithSideBorder}${topBottomBorders}`;
        
        return giftWrapped
    })
}

const wrapped = wrapping(gifts);

console.log(wrapped[1]);

