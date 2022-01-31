var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

$('body').on( "click", 'li.has-2-bets div.pointer',function() {
    console.log('clicked');
    var pinnacle = $("div[title='Pinnacle']");
    var element = $('.bet-wrapper').find(pinnacle);
    if(element.length > 0) {
        var linkPinanacle = element.parent().find('.market').find('a');
        linkPinanacle[0].click();
    } else {
        var betFair = $("div[title='Betfair']");
        var elementFair = $('.bet-wrapper').find(betFair);
        if (elementFair.length > 0) {
            var linkBetFair = elementFair.parent().find('.market').find('a');
            linkBetFair[0].click();
        }

    }
    //$('div.filters-wrapper ul.arbs-list').empty();
    // cache.delete('/arbs').then(function(response) {
    //     console.log('cache deleted');
    // });
    //clear();

});

