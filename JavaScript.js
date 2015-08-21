var seletedStage;
var selectedWeapon;
var currentAmmo;
var selectedDifficulty;
var kills = 0;
var shots = 0;
var sniperRifle = new Audio("App_Themes/Theme/Sounds/snipers/Sniper Rifle.m4a");
var beamRifle = new Audio("App_Themes/Theme/Sounds/snipers/Beam Rifle.m4a");
var gameOver = new Audio("App_Themes/Theme/Sounds/Game Over.m4a");
var perfection = new Audio("App_Themes/Theme/Sounds/Perfection!.wav")
var countDown = 5;

function makeGrunt() {
    var random = Math.random();
    var left = Math.random();
    left = left * 600;
    random = random * 5000;
    random = Math.floor(random);
    setTimeout(function () {
        document.getElementById("grunt").style.marginLeft = left + "px";
        document.getElementById("grunt").style.display = "block";
    }, random);
}

function makeElite() {
    var random = Math.random();
    random = random * 5000;
    random = Math.floor(random);
    setTimeout(function () {
        var left = Math.random();
        left = left * 600;
        document.getElementById("elite").style.marginLeft = left + "px";
        document.getElementById("elite").style.display = "block";
    }, random);
}

function makeJackal() {
    var random = Math.random();
    random = random * 5000;
    random = Math.floor(random);
    setTimeout(function () {
        var left = Math.random();
        left = left * 600;
        document.getElementById("jackal").style.marginLeft = left + "px";
        document.getElementById("jackal").style.display = "block";
    }, random);
}

document.getElementById("ready").onclick = function () {

    seletedStage = document.getElementById("stageSelect").value;
    selectedWeapon = document.getElementById("weapon").value;
    selectedDifficulty = document.getElementById("difficulty").value;
    document.getElementById("over").style.display = "none";
    alert(seletedStage + " " + selectedWeapon + " " + selectedDifficulty);

    return;

}

document.getElementById("start").onclick = function () {
    //alert(selectedWeapon);
    //alert(selectedDifficulty);
    //alert(seletedStage);

    if (seletedStage == "Forge") {
        document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Forge_world.png')";
    }
    else if (seletedStage == "Avalanche") {
        document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Avalanche.png')";
    }
    else if (seletedStage == "Isolation") {
        document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Isolation.png')";
    }
    else if (seletedStage == "GhostTown") {
        document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/GhostTown.png')";
    }
    else if (seletedStage == "Random") {
        var random = Math.random();
        random = Math.floor(random * 4);
        var stages = ["Forge", "Avalanche", "Isolation", "GhostTown"]
        seletedStage = stages[random];

        if (seletedStage == "Forge") {
            document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Forge_world.png')";
        }
        else if (seletedStage == "Avalanche") {
            document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Avalanche.png')";
        }
        else if (seletedStage == "Isolation") {
            document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/Isolation.png')";
        }
        else if (seletedStage == "GhostTown") {
            document.getElementById("stage").style.backgroundImage = "url('App_Themes/Theme/Pictures/Stages/GhostTown.png')";
        }
    }

    if (selectedWeapon == "Spartan") {
        document.getElementById("stage").onclick = function () {
            document.getElementById("shots").innerHTML = shots -= 1;
            currentAmmo = shots;
            sniperRifle.play();
            if (currentAmmo == 0) {
                kills = 0;
                shots = 0;
                document.getElementById("kills").innerHTML = kills;
                document.getElementById("shots").innerHTML = shots;
                document.getElementById("grunt").style.display = "none";
                document.getElementById("elite").style.display = "none";
                document.getElementById("jackal").style.display = "none";
                document.getElementById("stage").style.backgroundImage = "none";
                document.getElementById("over").style.display = "block";
                document.getElementById("weapon").value = "";
                document.getElementById("stageSelect").value = "";
                document.getElementById("difficulty").value = "";
                gameOver.play();
                document.getElementById("stage").onclick = function () {
                    shots = 0;
                    kills = 0;
                }
            }

        }
    }

    else if (selectedWeapon == "Elite") {
        document.getElementById("stage").onclick = function () {
            document.getElementById("shots").innerHTML = shots -= 1;
            currentAmmo = shots;
            beamRifle.play();
            if (currentAmmo == 0) {
                kills = 0;
                shots = 0;
                document.getElementById("kills").innerHTML = kills;
                document.getElementById("shots").innerHTML = shots;
                document.getElementById("grunt").style.display = "none";
                document.getElementById("elite").style.display = "none";
                document.getElementById("jackal").style.display = "none";
                document.getElementById("stage").style.backgroundImage = "none";
                document.getElementById("over").style.display = "block";
                document.getElementById("weapon").value = "";
                document.getElementById("stageSelect").value = "";
                document.getElementById("difficulty").value = "";
                gameOver.play();
                document.getElementById("stage").onclick = function () {
                    shots = 0;
                    kills = 0;
                }
            }
        }
    }
    else if (selectedWeapon == "Random") {
        var random = Math.random();
        random = Math.floor(random * 2);
        var weapons = ["Spartan", "Elite"];
        selectedWeapon = weapons[random];
        if (selectedWeapon == "Spartan") {
            document.getElementById("stage").onclick = function () {
                document.getElementById("shots").innerHTML = shots -= 1;
                currentAmmo = shots;
                sniperRifle.play();
                if (currentAmmo == 0) {
                    kills = 0;
                    shots = 0;
                    document.getElementById("kills").innerHTML = kills;
                    document.getElementById("shots").innerHTML = shots;
                    document.getElementById("grunt").style.display = "none";
                    document.getElementById("elite").style.display = "none";
                    document.getElementById("jackal").style.display = "none";
                    document.getElementById("stage").style.backgroundImage = "none";
                    document.getElementById("over").style.display = "block";
                    document.getElementById("weapon").value = "";
                    document.getElementById("stageSelect").value = "";
                    document.getElementById("difficulty").value = "";
                    gameOver.play();
                    document.getElementById("stage").onclick = function () {
                        shots = 0;
                        kills = 0;
                    }
                }

            }
        }
        else if (selectedWeapon == "Elite") {
            document.getElementById("stage").onclick = function () {
                document.getElementById("shots").innerHTML = shots -= 1;
                currentAmmo = shots;
                beamRifle.play();
                if (currentAmmo == 0) {
                    kills = 0;
                    shots = 0;
                    document.getElementById("kills").innerHTML = kills;
                    document.getElementById("shots").innerHTML = shots;
                    document.getElementById("grunt").style.display = "none";
                    document.getElementById("elite").style.display = "none";
                    document.getElementById("jackal").style.display = "none";
                    document.getElementById("stage").style.backgroundImage = "none";
                    document.getElementById("over").style.display = "block";
                    document.getElementById("weapon").value = "";
                    document.getElementById("stageSelect").value = "";
                    document.getElementById("difficulty").value = "";
                    gameOver.play();
                    document.getElementById("stage").onclick = function () {
                        shots = 0;
                        kills = 0;
                    }

                }
            }
        }
    }

    if (selectedDifficulty == "normal") {
        makeGrunt();
        shots = 15;
        document.getElementById("shots").innerHTML = shots;

    }
    else if (selectedDifficulty == "heroic") {
        makeGrunt();
        makeElite();
        shots = 30;
        document.getElementById("shots").innerHTML = shots;
    }
    else if (selectedDifficulty == "legendary") {
        makeGrunt();
        makeElite();
        makeJackal();
        shots = 60;
        document.getElementById("shots").innerHTML = shots;
    }
    else if (selectedDifficulty == "Random") {
        var random = Math.random();
        random = Math.floor(random * 3);
        var difficulty = ["normal", "heroic", "legendary"];
        selectedDifficulty = difficulty[random];
        if (selectedDifficulty == "normal") {
            makeGrunt();
            shots = 15;
            document.getElementById("shots").innerHTML = shots;

        }
        else if (selectedDifficulty == "heroic") {
            makeGrunt();
            makeElite();
            shots = 30;
            document.getElementById("shots").innerHTML = shots;
        }
        else if (selectedDifficulty == "legendary") {
            makeGrunt();
            makeElite();
            makeJackal();
            shots = 60;
            document.getElementById("shots").innerHTML = shots;
        }
    }
}

document.getElementById("reset").onclick = function () {
    kills = 0;
    shots = 0;
    document.getElementById("kills").innerHTML = kills;
    document.getElementById("shots").innerHTML = shots;
    document.getElementById("grunt").style.display = "none";
    document.getElementById("elite").style.display = "none";
    document.getElementById("jackal").style.display = "none";
    document.getElementById("stage").style.backgroundImage = "none";
    document.getElementById("over").style.display = "block";
    document.getElementById("weapon").value = "";
    document.getElementById("stageSelect").value = "";
    document.getElementById("difficulty").value = "";
    gameOver.play();
    document.getElementById("stage").onclick = function () {
        shots = 0;
    }
}

document.getElementById("grunt").onclick = function () {
    this.style.display = "none";
    document.getElementById("kills").innerHTML = kills += 1;
    makeGrunt();
}

document.getElementById("elite").onclick = function () {
    this.style.display = "none";
    document.getElementById("kills").innerHTML = kills += 1;
    makeElite();
}

document.getElementById("jackal").onclick = function () {
    this.style.display = "none";
    document.getElementById("kills").innerHTML = kills += 1;
    makeJackal();
}
