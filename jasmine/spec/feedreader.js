/* feedreader.js
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function() {
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function() {
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    /*  new test suite named "The menu" */
    describe('Menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. 
         */
        it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });



        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should change visibility when icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });

    /*  new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/
        beforeEach(function(done) {
            setTimeout(done, 1000);

        });
        it('must exist (at least one of them must exist)', function() {
            //console.log(document.getElementsByClassName('entry')[0]);
            expect(document.getElementsByClassName('entry').length).not.toBe(0);
            //done();
        });
    });
    /*  new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var preFirstFeed = "";
        beforeEach(function(done) {
            console.log(document.getElementsByClassName("entry")[0].innerHTML);
            preFirstFeed = document.getElementsByClassName("entry")[0].innerHTML;
            loadFeed(1, done);

        });
        
    /*  test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
        it('should change the context after loadfeed is executed', function() {
            expect(document.getElementsByClassName("entry")[0].innerHTML).toBeDefined();
            expect(document.getElementsByClassName("entry")[0].innerHTML).not.toBe(preFirstFeed);
        });

    });


}());