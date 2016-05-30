

window.onload=function() {
    var chessBoard = [];
    var me = true;
    var wins = [];
    var myWin = [];
    var comWin = [];
    var over = false;


    for (var i = 0; i < 15; i++) {
        chessBoard[i] = [];
        for (var j = 0; j < 15; j++) {
            chessBoard[i][j] = 0;
        }
    }


    for (var i = 0; i < 15; i++) {
        wins[i] = [];
        for (var j = 0; j < 15; j++) {
            wins[i][j] = [];
        }
    }
    var count = 0;
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
                wins[i][j + k][count] = true;
            }
            count++;
        }
    }
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
                wins[j + k][i][count] = true;
            }
            count++;
        }
    }

    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
                wins[i + k][j + k][count] = true;
            }
            count++;
        }
    }

    for (var i = 0; i < 11; i++) {
        for (var j = 14; j > 3; j--) {
            for (var k = 0; k < 5; k++) {
                wins[i+k][j - k][count] = true;
            }
            count++;
        }
    }

    console.log(count);

    for (var i = 0; i < count; i++) {
        myWin[i] = 0;
        comWin[i] = 0;
    }


    var oChess = document.getElementById("chess");
    var context = oChess.getContext("2d");
    context.strokeStyle = "#bfbfbf";


    var logo = new Image();
    logo.src = "image/bg.png";
    logo.onload = function () {
        context.drawImage(logo, 0, 0, 450, 450);
        drawChessBoard();

    }


    var drawChessBoard = function () {
        for (var i = 0; i < 15; i++) {
            context.moveTo(15 + i * 30, 15);
            context.lineTo(15 + i * 30, 435);
            context.stroke();

            context.moveTo(15, 15 + i * 30);
            context.lineTo(435, 15 + i * 30);
            context.stroke();
        }
    }


    var oneStep = function (i, j, me) {
        context.beginPath();
        context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
        context.stroke();

        var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);
        if (me) {
            gradient.addColorStop(0, "#0a0a0a");
            gradient.addColorStop(1, "#636766");
        }
        else {
            gradient.addColorStop(0, "#d1d1d1");
            gradient.addColorStop(1, "#f9f9f9");
        }

        context.fillStyle = gradient;
        context.fill();
    }


    oChess.onclick = function (e) {
        if (over) {
            return;
        }
        if (!me) {
            return;
        }

        var x = e.offsetX;
        var y = e.offsetY;

        var i = Math.floor(x / 30);
        var j = Math.floor(y / 30);

        if (chessBoard[i][j] == 0) {
            oneStep(i, j, me);
            chessBoard[i][j] = 1;


            for (var k = 0; k < count; k++) {
                if (wins[i][j][k]) {
                    myWin[k]++;
                    comWin[k] = 6;
                    if (myWin[k] == 5) {
                        window.alert("You Win");
                        over = true;
                    }
                }
            }
            if (!over) {
                me = !me;
                computerAi();
            }
        }
    }


    var computerAi = function ()
    {
        var myScore = [];
        var computerS = [];
        var max=0;
        var u=0;
        var v=0;

        for (var i = 0; i < 15; i++)
        {
            myScore[i] = [];
            computerS[i] = [];

            for (var j = 0; j < 15; j++)
            {
                myScore[i][j] = 0;
                computerS[i][j] = 0;
            }
        }

        for (var i = 0; i < 15; i++)
        {
            for (var j = 0; j < 15; j++)
            {
                if (chessBoard[i][j]==0)
                {
                    for(var k=0; k<count; k++)
                    {
                        if(wins[i][j][k])
                        {
                           if(myWin[k]==1)
                           {
                               myScore[i][j]+=200;
                           }
                            else if(myWin[k]==2)
                           {
                               myScore[i][j]+=400;
                           }
                            else if(myWin[k]==3)
                           {
                               myScore[i][j]+=2000;
                           }
                           else if(myWin[k]==4)
                           {
                               myScore[i][j]+=10000;
                           }



                            if(comWin[k]==1)
                            {
                                computerS[i][j]+=220;
                            }
                            else if(comWin[k]==2)
                            {
                                computerS[i][j]+=420;
                            }
                            else if(comWin[k]==3)
                            {
                                computerS[i][j]+=2200;
                            }
                            else if(comWin[k]==4)
                            {
                                computerS[i][j]+=20000;
                            }

                        }
                    }
                    if(myScore[i][j]>max)
                    {
                        max=myScore[i][j];
                        u=i;
                        v=j;
                    }
                    else if(myScore[i][j]==max)
                    {
                        if(computerS[i][j]>computerS[u][v])
                        {
                            u=i;
                            v=j;
                        }
                    }
                    if(computerS[i][j]>max)
                    {
                        max=computerS[i][j];
                        u=i;
                        v=j;
                    }
                    else if(computerS[i][j]==max)
                    {
                        if(myScore[i][j]>myScore[u][v])
                        {
                            u=i;
                            v=j;
                        }
                    }
                }
            }

        }
        oneStep(u,v,false);
        chessBoard[u][v]=2;
        for (var k = 0; k < count; k++) {
            if (wins[u][v][k]) {
                comWin[k]++;
                myWin[k] = 6;
                if (comWin[k] == 5) {
                    window.alert("Computer Win");
                    over = true;
                }
            }
        }
        if (!over) {
            me = !me;
        }
    }


}