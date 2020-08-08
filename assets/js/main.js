(function() {

    // forEach pollyfill for IE browsers
    if(window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if(window.HTMLCollection && !HTMLCollection.prototype.forEach) {
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
    }


    // Fake site list
    const fakeSites = [
        'https://www.wikipedia.org/',
        'http://google.com/',
        'https://www.who.int/',
        'https://loksabha.nic.in/',
        'http://www.indiatimes.com/',
        'http://www.bhaskar.com/',
        'https://www.ndtv.com/news',
        'https://www.thehindu.com/',
        'http://www.rediff.com/news',
        'http://www.indianexpress.com/',
        'http://www.moneycontrol.com/news/',
        'https://www.indiatoday.in/'
    ];

    // Get random site from the fake site list
    function getRandomSite() {
        return fakeSites[Math.floor(Math.random() * fakeSites.length)];
    }
    
    function initQuickExit() {
        // Change default anhor tag behaviour to replace history item
        const anchors = document.querySelectorAll('a');
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function (e) {
                // Disable the defualt behaviour of redirecting to link
                e.preventDefault();
                e.returnValue = false; // IE support

                // Relpace the location - remove current url from history and disable back button
                document.location.replace(anchor.href);
            });
        });

        // Replace current page from history with random site
        document.getElementById('quick-exit').addEventListener('click', function () {
            // Clear DOM to tackle with slow internet connection
            document.title = 'Unable to load the page';
            document.body.innerHTML = 'Unable to load the page';

            // Open random pages
            window.open(getRandomSite());
            setTimeout(function () {
                // document.location.replace(getRandomSite());
            }, 100);
        });
    }

    initQuickExit();
})();