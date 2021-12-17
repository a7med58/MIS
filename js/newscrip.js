/*$(document).ready(function(){
$(".online").click(function(){

$(".box").slideDown(5000,function(){$(".online").hide();});
    
});
});*/

/*alert("Pleas Update Your Browser"); */ // display string message

if (localStorage.getItem("firstTime") == null) {
    alert("Pleas Chek Update Your Browser");
    localStorage.setItem("firstTime", "done");
}


function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', '...']; // you get the idea
    time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(),
            months[now.getMonth()],
            now.getFullYear()
        ].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call

jQuery(function($) {

    var path = window.location.href;

    $('a').each(function() {

        if (this.href === path) {

            $(this).addClass('active');

        }

    });
});