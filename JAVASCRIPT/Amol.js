//! ================================================ STYLE SWITCHER TOGGLER STARTS ================================================================
//* ==================================================== OPEN STYLE SWITCHER Toggler ================================================= 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//* ==================================================== OPEN STYLE SWITCHER Toggler ================================================= 


//? ================================================== Hide Style-Switcher On Scroll ==================================================
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
//? ================================================== Hide Style-Switcher On Scroll ==================================================


//!  ===================================================== THEME COLOR =================================================================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");

        }
    })
}
//!  ===================================================== THEME COLOR =================================================================

//todo  ===================================================== LIGHT & DARK MODE ================================================================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
//todo  ===================================================== LIGHT & DARK MODE =================================================================

//! ===================================================== STYLE SWITCHER TOGGLER ENDS ===========================================================

//! ====================================================== TYPING ANIMATION STARTS ==============================================================
var typed = new Typed(".typing", {
    strings:["Web Designer","Web Developer","Java Developer","Android Developer","Gamer"],
    typeSpeed:135,
    BackSpeed:135,
    loop:true
})
//! ===================================================== TYPING ANIMATION STARTS ===============================================================
//! ===================================================== ASIDE SECTION STARTS ==================================================================
const nav  = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0;i<totalNavList;i++)
        {
            const a = navList[i].querySelector("a");

            a.addEventListener("click",function ()
            {
                romoveBackSection();

                for(let j=0;j<totalNavList;j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }

        function romoveBackSection()
        {
            for(let i=0;i<totalSection;i++)
                {
                    allSection[i].classList.remove("back-section");
                }
        }

        function addBackSection(num)
        {
            allSection[num].classList.add("back-section");
        }

        function showSection(element)
        {
            for(let i=0;i<totalSection;i++)
            {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active");
        }
//! ======================================================= ASIDE SECTION STARTS ===============================================================

//! =========================================================== NAV TOGGLER ====================================================================
const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",() =>
        {
            asideSectionTogglerBtn();
        })

        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }
//! =========================================================== NAV TOGGLER ====================================================================

//! ========================================================== HIRE ME BUTTON  =================================================================
function updateNav(element)
{
    for(let i=0; i<totalSection; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    romoveBackSection();
    addBackSection(sectionIndex);

})
//! ========================================================== HIRE ME BUTTON  =================================================================

//! ====================================================== CONTACT SECTION STARTS  ==============================================================

function Validation(){
    var Name = document.getElementById("Name").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var Subject = document.getElementById("Subject").value;
    var Text = document.getElementById("Text").value;
    if (Name==null || Name==""){  
        swal({
            icon: "error",
            title: 'Oops...',
            text : "Please Enter The Name",
            timer: 2000
          });  
        return false;  
      }  
      if (UserEmail==null || UserEmail==""){  
        swal({
            icon: "error",
            title: 'Oops...',
            text : "Please Enter The Gmail",
            timer: 2000
          });  
        return false;  
      }
      if (Subject==null || Subject==""){  
        swal({
            icon: "error",
            title: 'Oops...',
            text : "Please Enter The Subject",
            timer: 2000
          });  
        return false;  
      }   
      if (Text==null || Text==""){  
        swal({
            icon: "error",
            title: 'Oops...',
            text : "Please Enter Your Query",
            timer: 2000
          });  
        return false;  
      }

    SendEmail();
       
}
function SendEmail() {
    
    var Name = document.getElementById("Name").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var Subject = document.getElementById("Subject").value;
    var Text = document.getElementById("Text").value;
    var params ={
        from_name : Name,
        email_id : UserEmail,
       subject : Subject,
        message : Text
    }
    emailjs.send("service_dc1niem","template_7rgqb6k", params).then(function (res){
        swal({
            icon: "success",
            title : "Email Sent Successfully",
            timer: 2000
          });
    })
}      
//! ====================================================== CONTACT SECTION ENDS  ================================================================
