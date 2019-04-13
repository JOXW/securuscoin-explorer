var api = 'http://securuscoin.org:14115';
var donationAddress = "SCR1PahF4AN2DCBDE8MbFFTk6ABFiRe2nUNSP6gVhZANFfx2t6P5t8LKi7J2YkeaaJcR7jR4ZVKK2j88PtVmdAG18SwZKeLBUn";
var blockTargetInterval = 60; // enter the block interval in seconds
var coinUnits = 1000;  // enter in the amount of atomic units in 1 coin, eg. 1000 shells = 1 scr
var totalSupply =  30000000000; // enter the total supply in atomic units
var symbol = 'SCR'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "scr": [
	["pool.securuscoin.org", "http://pool.securuscoin.org:8117"]
 ]
};

var networkStat2 = {
    "scr": [
	[""]
 ]
};
