// Clicker Website Game made by Tyler Chew

// I don't like writing comments a lot of times.
$(function(){
	console.log("Documentation is ready!!");

	var clickSound = new Audio("SFX/click.mp3");
	//var musicSound = new Audio("SFX/Jumbo_song.mp3");
	var musicSound = new Audio("SFX/music.mp3");

	// what makes the music loop over again

	musicSound.loop = true;

	musicSound.addEventListener("ended", function() {
    	this.currentTime = 0;
    	this.play();
	}, false);

	var musicColor = false;
	var money = 0;
	var moneyPerClick = 1;

	// variables for upgrades

	var autoClickers = 0;

	// hiding elements for animations or menus

	$(".music").hide();
	$(".upgrade").hide();
	$(".money_button").hide();
	$(".back").hide();
	$(".upgrade1").hide();
	$(".upgrade2").hide();

	// animations

	$(".money_button").delay(1000).fadeIn(2000, "swing");
	$(".upgrade").delay(3000).fadeIn(2000, "swing");
	$(".music").delay(5000).fadeIn(2000, "swing");

	// when the "money_button" get clicked..
	$(".money_button").on("click", function() {
		clickSound.play();
		// increases the money by 1
		money += moneyPerClick;
		// makes it show
		$(".value").text(money);
	})

	$(".upgrade").on("click", function() {
		clickSound.play();
		// hiding all elements besides stats on screen.
		$(".upgrade").hide();
		$(".money_button").hide();
		$(".back").show();
		$(".upgrade1").show();
		$(".upgrade2").show();
	})

	$(".back").on("click", function() {
		clickSound.play();
		$(".back").hide();
		$(".upgrade1").hide();
		$(".upgrade2").hide();
		$(".money_button").show();
		$(".upgrade").show();
	})

	$(".upgrade1").on("click", function() {
		var cost = parseInt($("#price1").text());

		if (money >= cost) {
			clickSound.play();
			money -= cost;
			moneyPerClick ++;
			cost += 500

			$(".value").text(money);
			$(".perClick").text(moneyPerClick);
			$("#price1").text(cost);

			// animation

			$(".upgrade1").css("background-color", "#FF1a1a");
			setTimeout(function(){$(".upgrade1").css("background-color", "#3366FF")}, 500);
		}
	})

	$(".upgrade2").on("click", function() {
		var cost = parseInt($("#price2").text());

		if (money >= cost) {
			clickSound.play();
			money -= cost;
			autoClickers ++;
			cost += 30

			$(".value").text(money);
			$(".autoClick").text(autoClickers);
			$("#price2").text(cost);

			// animation

			$(".upgrade2").css("background-color", "#FF1a1a");
			setTimeout(function(){$(".upgrade2").css("background-color", "#3366FF")}, 500);
			
			// makes the interactivity with the autoClickers work

			autoClickerInteract();
		}
	})

	$(".music").on("click", function() {
		if (musicColor == false) {
			musicColor = true;
			$(".music").css("background-color", "#FF6600");
			musicSound.play();
		}
		else {
			musicColor = false;
			$(".music").css("background-color", "#666666");
			musicSound.pause();
		}
	})

	function autoClickerInteract() {
		if (autoClickers > 0) {
			setInterval(function(){money += autoClickers * moneyPerClick;
				$(".value").text(money)}, 5000);
		}
	}
})

