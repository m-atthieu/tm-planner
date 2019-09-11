function imgError(img) {
    img.onerror = '';
    img.src = 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    return true;
}

function getThumb(thumbId) {
    // Special case for 1 Turn Dmg Ranking
    if (thumbId === '1_turn_dmg_rank')
        return '/optc-cal/assets/img/1_turn_dmg_rank.jpg';

    // Special case for Universal SP Book
    if (thumbId === 'univ_sp')
        return '/optc-cal/assets/img/univ_sp.png';

    // Special case for All Raid
    if (thumbId === 'all_raid')
        return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Aokiji 575 with extra 0
    if (thumbId === 575)
        paddedThumbId = "0" + paddedThumbId;

    // Special case for Kung Fu Luffy
    if (thumbId === 5014 || thumbId === 3334)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png';

    // Special case for Lucci v2 6+
    if (thumbId === 5016 || thumbId === 3336)
        return 'tm-planner/assets/img/new-thumbs/5016.png';

    // Special case for Knight Zoro
    if (thumbId === 5019 || thumbId === 3343)
        return 'tm-planner/assets/img/new-thumbs/5019.png';

    // Special case for Knight Sanji
    if (thumbId === 5020 || thumbId === 3344)
        return 'tm-planner/assets/img/new-thumbs/5020.png';

    // Special case for Shanks & Mihawk
    if (thumbId === 5024 || thumbId === 3342)
        return 'tm-planner/assets/img/new-thumbs/5024.png';

    // Special case for Whitebeard v2
    if (thumbId === 5026 || thumbId === 3346)
        return 'tm-planner/assets/img/new-thumbs/5026.png';

    // Special case for Garp (N)
    if (thumbId === 5028 || thumbId === 3340)
        return 'tm-planner/assets/img/new-thumbs/5028.png';

    // Special case for Log Vivi
    if (thumbId === 5030 || thumbId === 3348)
        return 'tm-planner/assets/img/new-thumbs/5030.png';

    // Special case for Log Ace
    if (thumbId === 5032 || thumbId === 3350)
        return 'tm-planner/assets/img/new-thumbs/5032.png';

    // Special case for Ivankov (N)
    if (thumbId === 5034 || thumbId === 3352)
        return 'tm-planner/assets/img/new-thumbs/5034.png';

    // Special case for YWB (N)
    if (thumbId === 5036 || thumbId === 3354)
        return 'tm-planner/assets/img/new-thumbs/5036.png';

    // Special case for Ranking Wanda
    if (thumbId === 5037 || thumbId === 3355)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5037.png';

    // Special case for Nightmare Luffy (N)
    if (thumbId === 5043 || thumbId === 3357)
        return 'tm-planner/assets/img/new-thumbs/5043.png';

    // Special case for Vergo (N)
    if (thumbId === 5045 || thumbId === 3359)
        return 'tm-planner/assets/img/new-thumbs/5045.png';

    // Special case for LRR Blitz Akainu
    //if(thumbId === 3363)

    // Special case for LRR Blitz Aokiji
    //if(thumbId === 3365)

    // Special case for Duval (N)
    //if(thumbId === 3368)

    // Special cases for new thumbs
    if (
        thumbId === 9999
    )
        return '/tm-planner/assets/img/new-thumbs/' + thumbId + '.png';

    return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + paddedThumbId + '.png';
}

function createImgHtml(imgSrc, size, floatLeft) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);
    imgHtml.attr('onerror', 'imgError(this)');

    if (floatLeft)
        imgHtml.css('float', 'left');

    return imgHtml;
}

function nightModeToggle(nightMode) {
    if (nightMode) {
        $('body').addClass('night-mode');
    } else {
        $('body').removeClass('night-mode');
    }

    localStorage.setItem('night-mode', nightMode);
}

$(document).ready(function() {
    // Day / Night mode
    var nightMode = false;
    if (localStorage.getItem('night-mode') != null) {
        var nightModeStr = localStorage.getItem('night-mode');
        $('#night-mode-check').prop('checked', nightModeStr === 'true' ? true : false);
        nightMode = nightModeStr == 'true';
    }

    nightModeToggle(nightMode);

    $('#night-mode-check').click(function() {
        nightMode = !nightMode;
        nightModeToggle(nightMode);
    });

    var str = '<ui>';
    matchers.forEach(function(matcher) {
        if(matcher.target === 'special' 
            && matcher.name !== 'Silence reducers' && matcher.name !== 'Enemy Threshold Damage Reduction reducer' && matcher.name !== 'Chain Multiplier Limit and Chain Lock reducer'
            && matcher.name !== 'Special cooldown reducers' && matcher.name !== 'Crew ATK DOWN reducer' && matcher.name !== 'Despair reducers'
            && matcher.name !== 'Enemy Percent Damage Reduction reducer' && matcher.name !== 'Enemy Increased Defense reducer' && matcher.name !== 'Defense reducers') {
            str += '<li class="list-group-item" data-filter="' + matcher.name + '">'+ matcher.name + '</li>';
        }
    });

    str += '</ui>';
    $('.list-group').html(str);

    /*$('#header').load('/common/header.html', function() {
        if (typeof highlightNavbar !== 'undefined')
            highlightNavbar();
    });

    $('#footer').load('/common/footer.html', function() {
        if (typeof showFooter !== 'undefined')
            showFooter();
    });*/

    $('#tm-level-label').val('1');
});
