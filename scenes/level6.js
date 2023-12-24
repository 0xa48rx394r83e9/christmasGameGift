Crafty.defineScene("Level6", function() {

    // Create level information basics //
    var level_details = {x:0,y:0,w:2500,h:750}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_door = Crafty.e("Door").place(2000,level_details.y+level_details.h-100, true); //Give the door a location (the y parameters are set cleanly for the floor here)
    var next_level_loading = false;
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("Level7");
            }, 500);
        }
    });
    Crafty.bind("ResetLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            numberOfResets += 1;
            Crafty.scene("Level6");
        }
    });

    // Object and obstacle placements //

    var platform = Crafty.e("Platform").place(0,360);
    var ramp = Crafty.e("Small_Ramp_Right").place(240,270);
    var platform = Crafty.e("Platform_Ramp_Left").place(400,320);
    var platform = Crafty.e("Platform").place(700,400);
    var tunnel = Crafty.e("Tunnel").place(920, 400);
    var platform = Crafty.e("Platform").place(1120,400);
    var platform = Crafty.e("Platform").place(1370,400);

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
	player.x = 400;
	player.y = 100;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //
    var ball = Crafty.e("Ball");
    var ball_controller = Crafty.e("Ball_Controller");
    ball.x = 920;
    ball.y = 140;
    var rock = Crafty.e("Rock").place(1650,600);

})
