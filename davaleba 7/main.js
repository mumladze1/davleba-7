function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
function makeToy(time) {
    console.log("Making toy...");
    return mySetTimeout(time).then(() => {
        console.log("Toy made");
        return "Toy made";
    });
}

function deliverToys(time) {
    console.log("Delivering toy...");
    return mySetTimeout(time).then(() => {
        console.log("Toy delivered");
        return "Toy delivered";
    });
}

function sellToy(time) {
    console.log("Selling toy...");
    return mySetTimeout(time).then(() => {
        console.log("Toy sold");
        return "Toy sold";
    });
}


makeToy(3000)
    .then(result => {
        console.log(result);
        return deliverToys(2000);
    })
    .then(result => {
        console.log(result);
        return sellToy(1000);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    });



    async function makeToyAsync(time) {
        console.log("Making toy...");
        await mySetTimeout(time);
        console.log("Toy made");
        return "Toy made";
    }
    
    async function deliverToysAsync(time) {
        console.log("Delivering toy...");
        await mySetTimeout(time);
        console.log("Toy delivered");
        return "Toy delivered";
    }
    
    async function sellToyAsync(time) {
        console.log("Selling toy...");
        await mySetTimeout(time);
        console.log("Toy sold");
        return "Toy sold";
    }
    
    // Simulating the process
    (async function() {
        try {
            const makeResult = await makeToyAsync(3000);
            console.log(makeResult);
            const deliverResult = await deliverToysAsync(2000);
            console.log(deliverResult);
            const sellResult = await sellToyAsync(1000);
            console.log(sellResult);
        } catch (error) {
            console.error("Error:", error);
        }
    })();
    