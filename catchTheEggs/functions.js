//whenever the mouse moves basket left position will be set to mouse X position
$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});
// in order to increase eggs position first we find and define current position.
function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
}
//check if egg his the floor. if true show bullseye image
function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        show_bulls_eye(egg);
        decrement_life();
        return true;
    } else {
        return false;
    }
}
//if egg hits the floor set initial position
function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position);

}
//show bulls eye when egg hits the floor.
function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}
//hide bulls eye
function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 900);
}
//decrement life when bulls eye is shown
function decrement_life() {
    life--;
    life_span.text(life);
    if(life < 0) {
        life_span.text('0');
    }
}
//check if egg hits the basket and update the score
function egg_hits_basket(egg) {
    if (collision(egg, basket)) {
        egg_top = parseInt(egg.css('top'));
        if (egg_top < basket_top) {
            update_score();
            return true;
        }

    } else {
        return false;
    }
}
//update the score
function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}
//stop the game
function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}
restart.click(function () {
   location.reload();
});