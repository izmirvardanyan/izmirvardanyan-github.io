let homeBtn = 0;
let imgCounter = 0;
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
    document.querySelector(".infoSection").style.width = "15%";   
    document.querySelector(".aboutinfo").innerHTML = "Հանդես գալով որպես Կապալառու՝ կառուցել ենք բազմաթիվ բազմաբնակարան բնակելի համալիրներ և արտադրական նշանակության շինություններ մայրաքաղաքում և մարզերում։ Ունենալով երկար տարիների փորձ և հմտություն՝ մի շարք գործընկերների համար հանդիսանում ենք միակ Շինարարը։ Երևան քաղաքում բնակելի համալիրներից մի քանիսի կառուցման տարեթվերը և հասցեներն են՝";
    document.querySelector(".phoneInfo").style.display = "none";
    document.querySelector(".mailInfo").style.display = "none";
    document.querySelector(".mailInfo").style.display = "none";
    document.querySelector(".imgs").style.display = "flex";
    
    document.querySelector(".phone").style.padding = "0";    
    document.querySelector(".phone").style.backgroundColor = "transparent";
    document.querySelector(".phone").style.position = "relative";
    document.querySelector(".phone").style.bottom = "14vh";
    document.querySelector(".phone").style.bottom = "0";

    document.querySelector(".mail").style.bottom = "14vh";
    document.querySelector(".mail").style.backgroundColor = "transparent";
    document.querySelector(".mail").style.position = "relative";
    document.querySelector(".mail").style.padding = "0";    
    document.querySelector(".mail").style.bottom = "";

    

    //add first hr
    document.querySelector("hr").style.display = "block";
    document.querySelector(".footer").style.top = "90vh";

    //hide second hr
    document.querySelector(".hr1").style.display = "none";
    
    
}
function homeHov(){
    document.querySelector(".home").style.color = "black";
    document.querySelector(".home").style.fontSize = "large";
    document.querySelector(".projects").style.color = "white";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".aboutUs").style.color = "white";
    document.querySelector(".aboutUs").style.fontSize = "medium";
    document.querySelector(".infoDiv").style.top = "70vh";   
    
    
        
        
        document.querySelector(".arrow").style.display = "none";   
        document.querySelector(".infoSection").style.top = "-10vh";   
        document.querySelector(".imgs").style.top = "0vh";
        document.querySelector(".infoSection").style.bottom = "10vh";  
        document.querySelector(".infoSection").style.width = "15%";   
        document.querySelector(".aboutinfo").style.height = "auto";
        document.querySelector(".aboutinfo").style.height = "auto";
    

         
        document.querySelector(".phoneInfo").style.display = "none";
        document.querySelector(".mailInfo").style.display = "none";
        document.querySelector(".mailInfo").style.display = "none";
        document.querySelector(".imgs").style.display = "flex";
        
        document.querySelector(".phone").style.padding = "0";    
        document.querySelector(".phone").style.backgroundColor = "transparent";
        document.querySelector(".phone").style.position = "relative";
        document.querySelector(".phone").style.bottom = "14vh";
        document.querySelector(".phone").style.bottom = "0";
        
    
        document.querySelector(".mail").style.bottom = "14vh";
        document.querySelector(".mail").style.backgroundColor = "transparent";
        document.querySelector(".mail").style.position = "relative";
        document.querySelector(".mail").style.padding = "0";    
        document.querySelector(".mail").style.bottom = "";
    
        document.querySelector(".aboutinfo").innerHTML = "ԱՁ Իզմիր Վարդանյանը գործունեություն է ծավալում 2012թ․ -ից։ Մենք կատարում ենք որակյալ շինարարական աշխատանքներ։ Տարիների ընթացքում գրավել ենք մեր ուրույն տեղը ոլորտի լավագույնների մեջ՝ ստեղծելով պրոֆեսիոնալ թիմ և լինելով հուսալի գործընկեր"
    
    
        //add first hr
        document.querySelector("hr").style.display = "block";
        document.querySelector(".footer").style.top = "90vh";

        //hide second hr
        document.querySelector(".hr1").style.display = "none";

}
function aboutHov(){
    document.querySelector(".aboutUs").style.color = "black";
    document.querySelector(".aboutUs").style.fontSize = "large";
    document.querySelector(".projects").style.color = "white";
    document.querySelector(".projects").style.fontSize = "medium";
    document.querySelector(".home").style.color = "white";
    document.querySelector(".home").style.fontSize = "medium";
    document.querySelector(".aboutinfo").innerHTML = "Գործընկերներին` <br> Լինելով ոլորտի առաջատարներից՝ երաշխավորում ենք առանձնահատուկ մոտեցում, ստանդարտներին համապատասխան որակյալ աշխատանք։ Շինարարական աշխատանքները տարաբնույթ են, շենքների կառուցումից զատ կատարում ենք նաև <br>- հողային աշխատանքներ <br>- պատերի շար <br>- էլեկտրալարերի մոնտաժ <br>- սվաղ <br>- գաջապատում <br>- հարդարում <br>- սալիկապատում <br>- բետոնով հարթեցում և այլն։"
    document.querySelector(".aboutinfo").style.overflow = "auto";
    
    document.querySelector(".infoDiv").style.top = "50vh";   
    document.querySelector(".infoSection").style.width = "50vh";
    document.querySelector(".infoSection").style.top= "5vh";   
    document.querySelector(".infoSection").style.bottom = "20vh"; 
    document.querySelector(".imgs").style.display = "none";
  

    document.querySelector(".phone").style.position = "absolute";
    document.querySelector(".phone").style.bottom = "14vh";
    document.querySelector(".phone").style.left = "-1vw";
    document.querySelector(".phone").style.backgroundColor = "rgba(82, 81, 81, 0.822)";
    document.querySelector(".phone").style.padding = "1vw";
    document.querySelector(".phone").style.borderRadius = "0.5vw";

    document.querySelector(".mail").style.position = "absolute";
    document.querySelector(".mail").style.bottom = "5vh";
    document.querySelector(".mail").style.left = "-1.2vw";
    document.querySelector(".mail").style.backgroundColor = "rgba(82, 81, 81, 0.822)";
    document.querySelector(".mail").style.padding = "1vw";
    document.querySelector(".mail").style.borderRadius = "0.5vw";
    
    document.querySelector(".phoneInfo").style.display = "block";
    document.querySelector(".phoneInfo").style.position = "relative";
    document.querySelector(".phoneInfo").style.bottom = "5vh";
    document.querySelector(".phoneInfo").style.left = "7vw";
    document.querySelector(".phoneInfo").style.backgroundColor = "rgba(82, 81, 81, 0.822)";
    document.querySelector(".phoneInfo").style.width = "20vw";
    document.querySelector(".phoneInfo").style.padding = "1vw";
    document.querySelector(".phoneInfo").style.color = "white";
    document.querySelector(".phoneInfo").style.fontWeight = "bold";
    document.querySelector(".phoneInfo").style.borderRadius = "0.5vw";

    
    document.querySelector(".mailInfo").style.display = "block";
    document.querySelector(".mailInfo").style.position = "relative";
    document.querySelector(".mailInfo").style.bottom = "3.5vh";
    document.querySelector(".mailInfo").style.left = "7.2vw";
    document.querySelector(".mailInfo").style.backgroundColor = "rgba(82, 81, 81, 0.822)";
    document.querySelector(".mailInfo").style.width = "20vw";
    document.querySelector(".mailInfo").style.padding = "1vw";
    document.querySelector(".mailInfo").style.color = "white";
    document.querySelector(".mailInfo").style.fontWeight = "bold";
    document.querySelector(".mailInfo").style.borderRadius = "0.5vw";
    
    //add first hr
    document.querySelector(".hr").style.display = "none";
    document.querySelector(".footer").style.top = "70vh";
    
    //hide second hr
    document.querySelector(".hr1").style.display = "block";
    homeBtn = 1;
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

function mainImg(num){
    let section = document.querySelector(".imgs");
        let img = document.getElementsByClassName(num)
        let showImg = img[0]

    if(imgCounter === 0){
        document.querySelector(".imgs").style.overflow = "hidden"
        section.style.width = "75vw"
        section.style.height = "73vh"
        section.style.top = "-57vh"
        showImg.style.position = "fixed"
        showImg.style.width = "74vw"
        showImg.style.height = "71vh"
        document.querySelector(".infoSection").style.display = "none"

        document.querySelector(".infoDiv").style.top = "69vh";   

        imgCounter = 1;
    }else{
        document.querySelector(".imgs").style.overflow = "auto"
        section.style.width = "30vw"
        section.style.height = "17.5vh"
        section.style.top = "20vh"
        showImg.style.position = "static"        
        showImg.style.width = "15vw"
        showImg.style.height = "16vh"
        document.querySelector(".infoSection").style.display = "block"
        document.querySelector(".infoSection").style.top= "7vh";   
        document.querySelector(".infoDiv").style.top = "50vh";   

        imgCounter = 0;
    }
}

