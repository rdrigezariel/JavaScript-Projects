document.write(typeof "Word" + "<br>");
document.write("Challenge:<br>1. " + 0/0);
document.write("<br>2. " + isNaN('This is not a number'));
document.write("<br>3. " + isNaN(1));

document.write("<br>Boolean Assignment (true): ");
document.write(3 > 0);
document.write("<br>Boolean Assignment (false): ");
document.write(3 > 3);
document.write("<br>Type coercion assignment: ");
document.write("100"+5);
document.write("<br>Double equal assignment: ");
document.write("100" == "100");
document.write("<br>Double equal assignment: ");
document.write(100 == 99);
document.write("<br>Triple equal assignment: ");
document.write(100 === 100);
document.write("<br>Triple equal assignment: ");
document.write(100 === "99");
document.write("<br>Triple equal assignment: ");
document.write(100 === "100");
document.write("<br>Triple equal assignment: ");
document.write(100 === 99);
document.write("<br>AND assignment: ");
document.write(100 > 99 && 100 < 101);
document.write("<br>AND assignment: ");
document.write(100 < 99 && 100 < 101);
document.write("<br>OR assignment: ");
document.write(100 < 99 || 100 < 101);
document.write("<br>OR assignment: ");
document.write(100 < 99 || 100 > 101);
document.write("<br>NOT operator assignment: ");
document.write(!(5 > 100));
document.write("<br>NOT operator assignment: ");
document.write(!(5 < 100));


function getInfinityValues() {
    document.getElementById("infinity").innerHTML = 3E310;
    document.getElementById("-infinity").innerHTML = -3E310;
}

console.log(100+100);
console.log(false);