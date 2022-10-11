var toggle=document.querySelector(".toggle-button");
var f=0;
toggle.addEventListener("click",function(){
    if(f===0){
        document.documentElement.style.setProperty('--background-color','var(--color2)');
        document.documentElement.style.setProperty('--text-color','var(--color1)');
        document.documentElement.style.setProperty('--border-btm','var(--border-btm2)');
        document.documentElement.style.setProperty('--blue-color','var(--blue1)');
        document.querySelector("p").style.opacity="0.8";
        f=1;
    }
    else{
        document.documentElement.style.setProperty('--background-color','var(--color1)');
        document.documentElement.style.setProperty('--text-color','var(--color2)');
        document.documentElement.style.setProperty('--border-btm','var(--border-btm1)');
        document.documentElement.style.setProperty('--blue-color','var(--blue)');
        document.querySelector("p").style.opacity="0.6";
        f=0;
    }
})