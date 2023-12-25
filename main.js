Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:19,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bbsxbuZig/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check(){
    img1=document.getElementById("img");
    classifier.classify(img1, gotResult);
}
function gotResult(error, results){
    if(error){console.log(error);}
    else{console.log(results);}
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(4);

}
