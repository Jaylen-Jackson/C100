var SpeechRecogniton = window.webkitSpeechRecognition;

var recognition = new SpeechRecogniton();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);
    
    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
    if(content == "take my selfie"){
        speak();
        
    }
}


function speak(){
    
    var synth = window.speechSynthesis;
    
    speak_data = "taking your selfie in 5 seconds"
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterthis);
    Webcam.attach("camera");
    setTimeout(function() {
        takephoto()
        save()
        
    },5000)
}

Webcam.set({
    
 width:360,
height:260,
image_format:"png",
png_quality:90
})
camera = document.getElementById("camera")

function takephoto() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id ='img_tag' src=" + data_uri + ">"
    })
    
}
function save() {
    link = document.getElementById("link")
    img = document.getElementById("img_tag").src;
    link.href = img
    link.click()
}

    
