function swapValues() {
    let a = document.getElementById("var1").value;
    let b = document.getElementById("var2").value;
    console.log("Before Swap: a =", a, "b =", b);
    
    [a, b] = [b, a]; // Swapping values using array destructuring
    
    console.log("After Swap: a =", a, "b =", b);
    document.getElementById("result").innerText = `Swapped Values: a = ${a}, b = ${b}`;
}
