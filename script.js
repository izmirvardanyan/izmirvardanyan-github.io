function projectsHov(){
    document.querySelector(".projects").style.color = "black";
    document.querySelector(".projects").style.fontSize = "large";
    document.querySelector(".aboutUs").style.color = "white";
    document.querySelector(".aboutUs").style.fontSize = "medium";
    document.querySelector(".home").style.color = "white";
    document.querySelector(".home").style.fontSize = "medium";   
    
    document.querySelector(".arrow").style.display = "block";   
    document.querySelector(".infoDiv").style.top = "50vh";   
    document.querySelector(".imgs").style.top = "20vh";   
    document.querySelector(".infoSection").style.top= "5vh";   
    document.querySelector(".infoSection").style.bottom = "20vh";   
    document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
}
function homeHov(){
    document.querySelector(".home").style.color = "black";
    document.querySelector(".home").style.fontSize = "large";
    document.querySelector(".projects").style.color = "white";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".aboutUs").style.color = "white";
    document.querySelector(".aboutUs").style.fontSize = "medium";
    
    document.querySelector(".infoSection").style.top= "10vh";   
    document.querySelector(".arrow").style.display = "none";   
    document.querySelector(".infoSection").style.bottom = "10vh";  
    document.querySelector(".infoSection").style.width = "15%";   
    document.querySelector(".aboutinfo").style.height = "auto";
    document.querySelector(".aboutinfo").innerHTML = "ԱՁ Իզմիր Վարդանյանը գործունեություն է ծավալում 2012թ․ -ից։ Մենք կատարում ենք որակյալ շինարարական աշխատանքներ։ Տարիների ընթացքում գրավել ենք մեր ուրույն տեղը ոլորտի լավագույնների մեջ՝ ստեղծելով պրոֆեսիոնալ թիմ և լինելով հուսալի գործընկեր"
}
function aboutHov(){
    document.querySelector(".aboutUs").style.color = "black";
    document.querySelector(".aboutUs").style.fontSize = "large";
    document.querySelector(".projects").style.color = "white";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".home").style.color = "white";
    document.querySelector(".home").style.fontSize = "medium";
}
let arrowValue = false;
function arrow(){
    if(arrowValue === false){
        document.querySelector(".arrow").src = "static/Arrow 2.png"
        document.querySelector(".aboutinfo").innerHTML = "Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝ <br> 2016-2017թթ> - Նորք Մարաշ, 7-րդ փ․, 116/4 <br>   2020-2021թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 56/6 և 56/7 <br>   2021-2022թթ. <br> - Նոր Նորք, Լվովյան 20/1 <br>   2022-2023թթ. <br> - Դավթաշեն 2 թաղ․, 22/2 <br>   2022-2023թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 48/1 <br>   2022-2023թթ. <br> - Շենգավիթ, Արշակունյաց 192 <br>   2022-2024թթ. <br> - Դավթաշեն 3 թաղ․, 31/1 <br>   2022-2024թթ. <br> - Նորք Մարաշ, Գ․Հովսեփյան 22/30 <br>   2023-2024թթ. <br> - Նորք Մարաշ, 8-րդ փ․, 1/2 <br>   2023-2024թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 60/10 <br> Կարևորելով մարզերի զարգացումը՝ ՄԱԿ զարգացման ծրագրի շրջանակներում 2023թ-ին> Սյունիքի մարզի Գորիս համայնքի բնակավայրերում տեղադրվեց 10 էներգաարդյունավետ ջերմոց։"
        document.querySelector(".aboutinfo").style.overflow = "auto";
        document.querySelector(".infoSection").style.width = "50vh";    
        document.querySelector(".aboutinfo").style.height = "30vh";
        document.querySelector(".aboutinfo").style.rotate = "30vh";
        arrowValue = true
    }else{
        document.querySelector(".arrow").src = "static/Arrow 1.png"
        document.querySelector(".arrow").style.display = "block";   
        document.querySelector(".infoDiv").style.top = "50vh";    
        document.querySelector(".infoSection").style.width = "15%";   
        document.querySelector(".aboutinfo").style.overflow = "hidden";   
        document.querySelector(".aboutinfo").style.height = "auto";   
        document.querySelector(".imgs").style.top = "20vh";   
        document.querySelector(".infoSection").style.top= "5vh";   
        document.querySelector(".infoSection").style.bottom = "20vh";   
        document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
        arrowValue = false
    }
}