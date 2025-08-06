let count = 0

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

btns.forEach((btn) => {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")){
            count++
        } else if (styles.contains("decrease")){
            count--
        }else{
            count = 0
        }
        console.log(count)
        value.textContent = count
    })
})