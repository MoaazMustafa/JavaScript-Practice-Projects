 const input = document.querySelector(".bar input")
        const button = document.querySelector(".bar button")

        function task(){
            
            if (button.innerHTML === "Show"){
                button.innerHTML = "Hide";
                input.type = "text";
            }
            else{
                button.innerHTML = "Show";
                input.type = "password";
            }
        }
        button.addEventListener("click", task);