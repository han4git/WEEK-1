const faqs = document.querySelectorAll(".faq")
window.alert('hey there')
faqs.forEach((faq) => {
    faq.addEventListener("click",()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
        }
    })
})
