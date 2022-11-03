    setTimeout(() => {
        const btns = document.getElementsByClassName('seat_category_item');
        let catBtn = null;
        for(let i =0; i<btns.length; i++) if(btns[i].innerText === ' Category 3') catBtn = btns[i];
        if(catBtn) catBtn.click();
        const cats = document.getElementsByClassName('resale-item-seatCat category');
        const catExists = cats && cats[0] && cats[0].innerText === 'Category 3';
        if(!catExists) window.location.reload(false);
        else {
           const tickets = document.getElementsByClassName('resale-item-action');
           const randomTicketIndex = Math.floor(Math.random()*tickets.length);
           const ticket = tickets[randomTicketIndex];
           ticket.click()
           setTimeout(() =>  resale.singleEntry.item.addToCart(document.getElementsByClassName('add')[0]), 250)
           setTimeout(() => window.location.reload(false), 300)
        }
    }, 3000)
