const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
recognition.Lang = "en-US"

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc)
    }
    function handleCommands(command){
        if(command.includes("open youtube")){
            speak("opening youtube...")
            window.open("https://www.youtube.com","_blank")
        }else if(command.includes("open facebook")){
            speak("opening facebook...")
            window.open("https://www.facebook.com","_blank")
        }else if(command.includes("open instagram")){
            speak("opening instagram...")
            window.open("https://www.instagram.com","_blank")
        }else if (command.includes("open amazon")) {
            speak("opening amazon...");
            window.open("https://www.amazon.com", "_blank");
        } else if (command.includes("open flipkart")) {
            speak("opening flipkart...");
            window.open("https://www.flipkart.com", "_blank");
        } else if (command.includes("open pinterest")) {
            speak("opening pinterest...");
        } else if (command.includes("open netflix")) {
            speak("opening netflix...");
            window.open("https://www.netflix.com", "_blank");
        } else if (command.includes("open spotify")) {
            speak("opening spotify...");
            window.open("https://www.spotify.com", "_blank");
        } else if (command.includes("open github")) {
            speak("opening gitHub...");
            window.open("https://www.github.com", "_blank");
        } else if (command.includes("open stack overflow")) {
            speak("opening stack Overflow...");
        } else if (command.includes("open twitter")) {
            speak("opening twitter...");
            window.open("https://www.twitter.com", "_blank");
        } else if (command.includes("open gmail")) {
            speak("opening gmail...");
            window.open("https://mail.google.com", "_blank");
        } else if (command.includes("open linkedin")) {
            speak("opening linkedIn...");
            window.open("https://www.linkedin.com", "_blank");
        } else if (command.includes("open google")) {
            speak("opening google...");
            window.open("https://www.google.com", "_blank");
        }else{
            speak("Finding on google...")
            window.open(`https://www.google.com/search?q=${command}` ,"_blank")
        }
    }

    speak("Hello,How can ayush Ai help you")

    setTimeout(() => {
        btn.innerText = "Listening..."
        btn.style.backgroundColor = "red"
        recognition.start()
    }, 2000)

    recognition.onresult = (event) => {
       const command = event.results[0][0].transcript.toLowerCase()
       handleCommands(command) 
    }

    recognition.onend = () => {
        btn.innerText = "Start Speaking"
        btn.style.backgroundColor = "green"
    }
})
