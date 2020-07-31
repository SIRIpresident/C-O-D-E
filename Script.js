function infoClick() {
    alert('자신이 직접 자바스크립트 코드를 쳐가면서 Obstacle에 닿지 않고 Player와 Enemy가 만나게 하면 클리어입니다.');
}

function isTouched(px1, px2, py1, py2, ex1, ex2, ey1, ey2) {
    if (((px2 > ex1 && px2 < ex1) || (px1 > ex1 && px1 < ex2)) && ((py2 > ey1 && py2 < ey2) || (py1 > ey1 && py1 < ey2))) {
        alert('crashed');
    }
}

$(function() {
    $('#run').click(function() {
        var code = document.getElementById('codeArea').value;
        var player = document.getElementById('Player');
        var clientRect = player.getBoundingClientRect();
        eval(code);
        var playerXOne = clientRect.top;
        var playerXTwo = playerXOne + 60;
        var playerYOne = $("#Player").position().top;
        var playerYTwo = playerYOne + 60;
        var enemyXOne = $("#Enemy").position().left;
        var enemyXTwo = enemyXOne + 60;
        var enemyYOne = $("#Enemy").position().top;
        var enemyYTwo = enemyYOne + 60;
        isTouched(playerXOne, playerXTwo, playerYOne, playerYTwo, enemyXOne, enemyXTwo, enemyYOne, enemyYTwo);
    });
    $('#reset').click(function() {
        //document.getElementById('codeArea').value = "";
        location.reload();
    })
});