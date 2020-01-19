document.addEventListener("DOMContentLoaded", () => {
    const me = document.querySelector("#box");
    const test = document.querySelector("#test");
    test.addEventListener("animationend", () => {
        test.style.display = "none";
        setTimeout(() => { document.querySelector("#me").style.display = "flex" }, 1000);
        setTimeout(() => { document.getElementById("foot").style.display = "flex" }, 2000);
        document.getElementById("header").style.display = "flex";

        function showcontent() {
            setTimeout(() => { me.childNodes[1].style.display = "block" }, 1000);
            setTimeout(() => { me.childNodes[3].style.display = "block" }, 2000);
            setTimeout(() => { me.childNodes[5].style.display = "block" }, 3000);


        }

        setTimeout(showcontent(), 1000);


    })



});

// $(document).ready(() => {
//     $("#test").on("animationend", () => {
//         $('#test').css('display', 'none');
//         setTimeout(() => { $('#me').css('display', 'flex') }, 1000);
//         setTimeout(() => { $('#foot').css('display', "flex") }, 2000);
//         $('#header').css('display', "flex");

//         function showcontent() {
//             setTimeout(() => { me.childNodes[1].style.display = "block" }, 1000);
//             setTimeout(() => { me.childNodes[3].style.display = "block" }, 2000);
//             setTimeout(() => { me.childNodes[5].style.display = "block" }, 3000);


//         }

//         setTimeout(showcontent(), 1000);
//     })
// });