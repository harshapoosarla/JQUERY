//alert("Hello....");
console.log("Thank You");
$(document).ready(function () {
    console.log($("div p").siblings());
    console.log($("#div4").siblings());
    }
)
//function sibling1() {
//    console.log($("div p").siblings);

//}
//function sibling2() {
//    $("").siblings
//}
$(document).ready(function () {
    $("#hide").click(function () {
        
        $("#hidetext").hide();
       
    });
    $("#show").click(function () {
        $("p").show();
        

    });
});

$(document).ready(function () {
    $("#test").click(function () {
$("#test").append("some text");

//$("#test1").attr("class", "class2").html("<b>bold</b>"); 

    });
   
});

$(document).ready(function () {
    $("#b1").click(function () {
        $("#t1").text("Hello world!");
    });
    $("#b2").click(function () {
        $("#t2").html("<b>Hello world!</b>");
    });
    $("#b3").click(function () {
        $("#t3").val("harsha");
    });
    $(".submit").click(function () {
        alert("submited");
    });
    $("#clear").click(function () {
        $("input[type=text]").filter("#inpfield").val(null);
        $("input[type=number]").val(null);
    });
})  
    $(document).ready(function () {
        $("#fadein").click(function () {
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(1000);
        });
    });
        $(document).ready(function () {
            $("#buttonlast").click(function () {
                $("#div4").empty();
            });
        });