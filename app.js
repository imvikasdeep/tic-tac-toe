$(document).ready(function($){

    $('.reset').on('click', function(){
        location.reload();
        $('#switch-theme').prop('checked', false);
    });

    // Toggle theme 

    $('#switch-theme').on('change', function(){
        if($(this).prop('checked')) {
            $('html').attr('data-theme', 'dark');
            $('.switch-theme h4').text('Light Mode');
        } else {
            $('html').attr('data-theme', 'light');
            $('.switch-theme h4').text('Dark Mode');
        }
    })

    let currentPlayer = $('#currentPlayer');

    const blocks = $('.block');
    const blockArr = Array.from(blocks);

    $(blocks).each(function() {
        $(this).on('click', function(){
            var currentBlock = $(this);
            onClickResult(currentBlock);

            // winning Senario

            if(blockArr[0].innerText !== '' && blockArr[0].innerText === blockArr[1].innerText && blockArr[1].innerText === blockArr[2].innerText) {

                winning(blockArr[0].innerText);

            } else if(blockArr[0].innerText !== '' && blockArr[0].innerText === blockArr[3].innerText && blockArr[3].innerText === blockArr[6].innerText) {

                winning(blockArr[0].innerText);

            } else if(blockArr[3].innerText !== '' && blockArr[3].innerText === blockArr[4].innerText && blockArr[4].innerText === blockArr[5].innerText) {

                winning(blockArr[3].innerText);

            } else if(blockArr[6].innerText !== '' && blockArr[6].innerText === blockArr[7].innerText && blockArr[7].innerText === blockArr[8].innerText) {

                winning(blockArr[6].innerText);

            } else if(blockArr[1].innerText !== '' && blockArr[1].innerText === blockArr[4].innerText && blockArr[4].innerText === blockArr[7].innerText) {

                winning(blockArr[1].innerText);

            } else if(blockArr[2].innerText !== '' && blockArr[2].innerText === blockArr[5].innerText && blockArr[5].innerText === blockArr[8].innerText) {

                winning(blockArr[2].innerText);

            } else if(blockArr[0].innerText !== '' && blockArr[0].innerText === blockArr[4].innerText && blockArr[4].innerText === blockArr[8].innerText) {

                winning(blockArr[0].innerText);

            } else if(blockArr[2].innerText !== '' && blockArr[2].innerText === blockArr[4].innerText && blockArr[4].innerText === blockArr[6].innerText) {

                winning(blockArr[2].innerText);

            } else if( $('.occupied').length === 9 ) {

                winning('Match Drawn');

            }


        })
    })

    function winning(result) {
        setTimeout(function(){ 
            $('body').css('overflow','hidden');
            if(result.length == 1) {
                $('#popup').find('h2').text('Player ' + result +  ' Won');
            } else {            
                $('#popup').find('h2').text(result);
            }
            $('#popup').addClass('open');

        }, 300);
    }

    function onClickResult(currentBlock) {

        const blockIndex = currentBlock.index();
        
        console.log(blockIndex);
        if(currentBlock.hasClass('occupied')) {
            
            // DO nothing

        } else {
             
            if(currentPlayer.text() === 'Player X') {
                currentPlayer.toggleClass('active').text('Player 0');
                currentBlock.addClass('playerX occupied').text('X');
            } else {
                currentPlayer.toggleClass('active').text('Player X');
                currentBlock.addClass('player0 occupied').text('0');
            }

        }
    }

})