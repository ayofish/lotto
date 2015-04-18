function twittlerInit() {
    //make it a static var
    var $body = $('.tweetbox');

    function makeTweetElem(tweet) {
        var $tweet = $('<div class = "tweet"> </div>');
        var timenow = new Date().getTime();
        var elapsedms = (timenow - tweet.created_at);
        var elapsedS = Math.round(elapsedms / 1000);
        $tweet.html('@<span class="user_class">' + tweet.user + '</span>' + '<br>' + tweet.message + '<br>' + '<span class="timestamp">' + elapsedS + " seconds ago" + '</span>');
        return $tweet;
    }

    function showUserTweets() {
        var $tweetUser = $(this).text();
        $body.find('.tweet').hide();
        $body.find('.tweet').each(function() {
            var user = $(this).find('span.user_class').text();
            if (user == $tweetUser) {
                $(this).show();
            }
        });
    }

    function updateTweets() {

        $body.html();
        //loop through tweets
        for (var i = streams.home.length - 1; i > 0; i--) {
            var tweet = streams.home[i];
            var $tweet = makeTweetElem(tweet);
            $body.append($tweet);
        }
        $body.find('.user_class').on('click', showUserTweets);
    }

    $('.newtweets').on('click', updateTweets);
    //start the app, call update tweets function
    // function loadTweets(){
    //   updateTweets();
    //   window.setTimeout(loadTweets, 1500);
    // }
    updateTweets();
    
}

$(document).ready(twittlerInit);
