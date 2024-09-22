let homeBtn = 0;
let imgCounter = 0;
var x = window.matchMedia("(max-width: 768px)")
var y = window.matchMedia("(max-width: 610px)")

function projectsHov(){
    if(!x.matches){
        document.querySelector(".projects").style.color = "black";
        document.querySelector(".projects").style.fontSize = "large";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";   
        
        document.querySelector(".arrow").style.display = "block";   
        document.querySelector(".infoSection").style.top = "-50vh";  
        document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
        document.querySelector(".phoneInfo").style.display = "none";
        document.querySelector(".mailInfo").style.display = "none";
        document.querySelector(".mailInfo").style.display = "none";
        document.querySelector(".imgs").style.display = "flex";

        //add first hr
        document.querySelector("hr").style.display = "block";

        //hide second hr
        document.querySelector(".hr1").style.display = "none";
    }else if(y.matches){
        document.querySelector(".projects").style.color = "black";
        document.querySelector(".projects").style.fontSize = "large";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";   
        document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
        document.querySelector(".arrow").style.display = "block";   
        document.querySelector(".imgs").style.marginTop = "5vh";
        document.querySelector(".imgs").style.display = "block";
    }else{
        document.querySelector(".projects").style.color = "black";
        document.querySelector(".projects").style.fontSize = "large";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";   
        document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
        document.querySelector(".arrow").style.display = "block";   
        document.querySelector(".imgs").style.marginTop = "0vh";

    }

}
function homeHov(){
    if(!x.matches){
        document.querySelector(".home").style.color = "black";
        document.querySelector(".home").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        
        
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".infoSection").style.width = "20vw";   
        document.querySelector(".infoSection").style.top = "-40vh";
        document.querySelector(".aboutinfo").style.height = "auto";
        
        
        document.querySelector(".imgs").style.display = "flex";
        
        
        document.querySelector(".aboutinfo").innerHTML = "ԱՁ Իզմիր Վարդանյանը գործունեություն է ծավալում 2012թ․ -ից։ Մենք կատարում ենք որակյալ շինարարական աշխատանքներ։ Տարիների ընթացքում գրավել ենք մեր ուրույն տեղը ոլորտի լավագույնների մեջ՝ ստեղծելով պրոֆեսիոնալ թիմ և լինելով հուսալի գործընկեր"
        
        
        //add first hr
        document.querySelector("hr").style.display = "block";
        //hide second hr
        document.querySelector(".hr1").style.display = "none";
    }else if(y.matches){
        document.querySelector(".home").style.color = "black";
        document.querySelector(".home").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".aboutinfo").innerHTML = "ԱՁ Իզմիր Վարդանյանը գործունեություն է ծավալում 2012թ․ -ից։ Մենք կատարում ենք որակյալ շինարարական աշխատանքներ։ Տարիների ընթացքում գրավել ենք մեր ուրույն տեղը ոլորտի լավագույնների մեջ՝ ստեղծելով պրոֆեսիոնալ թիմ և լինելով հուսալի գործընկեր"
        document.querySelector(".imgs").style.marginTop = "0vh";
        document.querySelector(".imgs").style.display = "block";
    }else{
        document.querySelector(".home").style.color = "black";
        document.querySelector(".home").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".aboutUs").style.color = "white";
        document.querySelector(".aboutUs").style.fontSize = "medium";
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".aboutinfo").innerHTML = "ԱՁ Իզմիր Վարդանյանը գործունեություն է ծավալում 2012թ․ -ից։ Մենք կատարում ենք որակյալ շինարարական աշխատանքներ։ Տարիների ընթացքում գրավել ենք մեր ուրույն տեղը ոլորտի լավագույնների մեջ՝ ստեղծելով պրոֆեսիոնալ թիմ և լինելով հուսալի գործընկեր"
        document.querySelector(".imgs").style.marginTop = "0vh";

    }
    
}
function aboutHov(){
    if(!x.matches){
        document.querySelector(".aboutUs").style.color = "black";
        document.querySelector(".aboutUs").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";
        document.querySelector(".aboutinfo").innerHTML = "Գործընկերներին` <br> Լինելով ոլորտի առաջատարներից՝ երաշխավորում ենք առանձնահատուկ մոտեցում, ստանդարտներին համապատասխան որակյալ աշխատանք։ Շինարարական աշխատանքները տարաբնույթ են, շենքների կառուցումից զատ կատարում ենք նաև <br>- հողային աշխատանքներ <br>- պատերի շար <br>- էլեկտրալարերի մոնտաժ <br>- սվաղ <br>- գաջապատում <br>- հարդարում <br>- սալիկապատում <br>- բետոնով հարթեցում և այլն։ <br><br> Mail: fidoraizo@gmail.com <br> Phone: +374 94-58-59-22"
        
        document.querySelector(".infoSection").style.width = "50vh";
        document.querySelector(".infoSection").style.top = "-55vh";

        //add first hr
        document.querySelector(".hr").style.display = "none";
        
        //hide second hr
        document.querySelector(".hr1").style.display = "block";
        homeBtn = 1;
    }else if(y.matches){
        document.querySelector(".aboutUs").style.color = "black";
        document.querySelector(".aboutUs").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".aboutinfo").innerHTML = "Գործընկերներին` <br> Լինելով ոլորտի առաջատարներից՝ երաշխավորում ենք առանձնահատուկ մոտեցում, ստանդարտներին համապատասխան որակյալ աշխատանք։ Շինարարական աշխատանքները տարաբնույթ են, շենքների կառուցումից զատ կատարում ենք նաև <br>- հողային աշխատանքներ <br>- պատերի շար <br>- էլեկտրալարերի մոնտաժ <br>- սվաղ <br>- գաջապատում <br>- հարդարում <br>- սալիկապատում <br>- բետոնով հարթեցում և այլն։ <br><br> Mail: fidoraizo@gmail.com <br> Phone: +374 94-58-59-22"
        document.querySelector(".imgs").style.display = "none";
    }else{
        document.querySelector(".aboutUs").style.color = "black";
        document.querySelector(".aboutUs").style.fontSize = "large";
        document.querySelector(".projects").style.color = "white";
        document.querySelector(".projects").style.fontSize = "medium";
        document.querySelector(".home").style.color = "white";
        document.querySelector(".home").style.fontSize = "medium";
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".aboutinfo").innerHTML = "Գործընկերներին` <br> Լինելով ոլորտի առաջատարներից՝ երաշխավորում ենք առանձնահատուկ մոտեցում, ստանդարտներին համապատասխան որակյալ աշխատանք։ Շինարարական աշխատանքները տարաբնույթ են, շենքների կառուցումից զատ կատարում ենք նաև <br>- հողային աշխատանքներ <br>- պատերի շար <br>- էլեկտրալարերի մոնտաժ <br>- սվաղ <br>- գաջապատում <br>- հարդարում <br>- սալիկապատում <br>- բետոնով հարթեցում և այլն։ <br><br> Mail: fidoraizo@gmail.com <br> Phone: +374 94-58-59-22"
        document.querySelector(".imgs").style.marginTop = "7vh";

    }
    
}

let arrowValue = false;
function arrow(){
    if(!x.matches){
        if(arrowValue === false){
            document.querySelector(".arrow").src = "static/Arrow 2.png"
            document.querySelector(".aboutinfo").innerHTML = "Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝ <br> 2016-2017թթ> - Նորք Մարաշ, 7-րդ փ․, 116/4 <br>   2020-2021թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 56/6 և 56/7 <br>   2021-2022թթ. <br> - Նոր Նորք, Լվովյան 20/1 <br>   2022-2023թթ. <br> - Դավթաշեն 2 թաղ․, 22/2 <br>   2022-2023թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 48/1 <br>   2022-2023թթ. <br> - Շենգավիթ, Արշակունյաց 192 <br>   2022-2024թթ. <br> - Դավթաշեն 3 թաղ․, 31/1 <br>   2022-2024թթ. <br> - Նորք Մարաշ, Գ․Հովսեփյան 22/30 <br>   2023-2024թթ. <br> - Նորք Մարաշ, 8-րդ փ․, 1/2 <br>   2023-2024թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 60/10 <br> Կարևորելով մարզերի զարգացումը՝ ՄԱԿ զարգացման ծրագրի շրջանակներում 2023թ-ին> Սյունիքի մարզի Գորիս համայնքի բնակավայրերում տեղադրվեց 10 էներգաարդյունավետ ջերմոց։"
            document.querySelector(".infoSection").style.overflow = "auto";
            document.querySelector(".infoSection").style.width = "50vh";    
            document.querySelector(".infoSection").style.height = "30vh";

            arrowValue = true
        }else{
            document.querySelector(".arrow").src = "static/Arrow 1.png"
            document.querySelector(".arrow").style.display = "block";   
            document.querySelector(".infoSection").style.width = "25vw";   
            document.querySelector(".infoSection").style.overflow = "hidden";   
            document.querySelector(".infoSection").style.height = "auto";   

            document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
            arrowValue = false
    }}else if(y.matches){
        if(arrowValue === false){
            document.querySelector(".arrow").src = "static/Arrow 2.png"
            document.querySelector(".aboutinfo").innerHTML = "Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝ <br> 2016-2017թթ> - Նորք Մարաշ, 7-րդ փ․, 116/4 <br>   2020-2021թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 56/6 և 56/7 <br>   2021-2022թթ. <br> - Նոր Նորք, Լվովյան 20/1 <br>   2022-2023թթ. <br> - Դավթաշեն 2 թաղ․, 22/2 <br>   2022-2023թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 48/1 <br>   2022-2023թթ. <br> - Շենգավիթ, Արշակունյաց 192 <br>   2022-2024թթ. <br> - Դավթաշեն 3 թաղ․, 31/1 <br>   2022-2024թթ. <br> - Նորք Մարաշ, Գ․Հովսեփյան 22/30 <br>   2023-2024թթ. <br> - Նորք Մարաշ, 8-րդ փ․, 1/2 <br>   2023-2024թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 60/10 <br> Կարևորելով մարզերի զարգացումը՝ ՄԱԿ զարգացման ծրագրի շրջանակներում 2023թ-ին> Սյունիքի մարզի Գորիս համայնքի բնակավայրերում տեղադրվեց 10 էներգաարդյունավետ ջերմոց։"
            document.querySelector(".infoSection").style.overflow = "auto";
            document.querySelector(".infoSection").style.width = "92%";    
            document.querySelector(".infoSection").style.height = "30vh";
            document.querySelector(".imgs").style.display = "none";
            
            arrowValue = true
        }else{
            document.querySelector(".arrow").src = "static/Arrow 1.png"
            document.querySelector(".arrow").style.display = "block";   
            document.querySelector(".infoSection").style.width = "92%";   
            document.querySelector(".infoSection").style.overflow = "hidden";   
            document.querySelector(".infoSection").style.height = "auto";   
            document.querySelector(".imgs").style.display = "block";

            document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
            arrowValue = false
    }}else{
        if(arrowValue === false){
            document.querySelector(".arrow").src = "static/Arrow 2.png"
            document.querySelector(".aboutinfo").innerHTML = "Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝ <br> 2016-2017թթ> - Նորք Մարաշ, 7-րդ փ․, 116/4 <br>   2020-2021թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 56/6 և 56/7 <br>   2021-2022թթ. <br> - Նոր Նորք, Լվովյան 20/1 <br>   2022-2023թթ. <br> - Դավթաշեն 2 թաղ․, 22/2 <br>   2022-2023թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 48/1 <br>   2022-2023թթ. <br> - Շենգավիթ, Արշակունյաց 192 <br>   2022-2024թթ. <br> - Դավթաշեն 3 թաղ․, 31/1 <br>   2022-2024թթ. <br> - Նորք Մարաշ, Գ․Հովսեփյան 22/30 <br>   2023-2024թթ. <br> - Նորք Մարաշ, 8-րդ փ․, 1/2 <br>   2023-2024թթ. <br> - Նորք Մարաշ, Գ․ Հովսեփյան 60/10 <br> Կարևորելով մարզերի զարգացումը՝ ՄԱԿ զարգացման ծրագրի շրջանակներում 2023թ-ին> Սյունիքի մարզի Գորիս համայնքի բնակավայրերում տեղադրվեց 10 էներգաարդյունավետ ջերմոց։"
            document.querySelector(".infoSection").style.overflow = "auto";
            document.querySelector(".infoSection").style.width = "92%";    
            document.querySelector(".infoSection").style.height = "30vh";
            document.querySelector(".imgs").style.marginTop = "5vh";
            
            arrowValue = true
        }else{
            document.querySelector(".arrow").src = "static/Arrow 1.png"
            document.querySelector(".arrow").style.display = "block";   
            document.querySelector(".infoSection").style.width = "92%";   
            document.querySelector(".infoSection").style.overflow = "hidden";   
            document.querySelector(".infoSection").style.height = "auto";   
            document.querySelector(".imgs").style.marginTop = "0vh";

            document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
            arrowValue = false
        }
    }
}

function mainImg(num){
    if(!x.matches){
    let section = document.querySelector(".imgs");
    let img = document.getElementsByClassName(num)
    let showImg = img[0]

    if(imgCounter === 0){
        document.querySelector(".imgs").style.overflow = "hidden"
        section.style.width = "75vw"
        section.style.height = "73vh"
        showImg.style.position = "fixed"
        showImg.style.width = "74vw"
        showImg.style.height = "71vh"
        document.querySelector(".infoSection").style.display = "none"
        document.querySelector(".imgs").style.position = "absolute"
        document.querySelector(".imgs").style.top = "10vh"
        document.querySelector(".imgs").style.zIndex = "1"

        

        imgCounter = 1;
    }else{
        document.querySelector(".imgs").style.overflow = "auto"
        section.style.width = "30vw"
        section.style.height = "17.5vh"
        showImg.style.position = "static"        
        showImg.style.width = "15vw"
        showImg.style.height = "16vh"
        document.querySelector(".infoSection").style.display = "block"
        document.querySelector(".imgs").style.position = "absolute"
        document.querySelector(".imgs").style.top = "60vh"

        imgCounter = 0;
    }}
}

function displaySize(){
    document.addEventListener("DOMContentLoaded", function(){

        if(x.matches){
            document.querySelector(".infoSection").style.width = "92%"
            document.querySelector(".infoSection").style.top = "-75vh"

        }

    })
}

displaySize()