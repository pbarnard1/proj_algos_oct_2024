// Sales by Match challenge (https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true)
function sockMerchant(n, ar) {
    let totalPairs = 0; // Number of paired socks we will return
    let unpairedSockSet = new Set([]); // Set holding unpaired socks (sets can only hold unique values)
    // Loop through the array of socks
    for (let k = 0; k < ar.length; k++) {
        const currentSock = ar[k];
        console.log("Examining the "+ currentSock + " sock")
        // Do we have a sock laying around that isn't paired that can now be paired up with this current one?
        if (unpairedSockSet.has(currentSock)) {
            console.log("Pairing up the "+currentSock+ " sock");
            totalPairs++;
            unpairedSockSet.delete(currentSock); // Now that sock is paired, so remove it from the set, since it holds UNPAIRED socks
        } else { // Sock can't be paired up, so add it to the set of unpaired socks
            unpairedSockSet.add(currentSock);
        }
        console.log(unpairedSockSet);
    }
    return totalPairs;
}