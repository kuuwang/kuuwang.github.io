function updateJob(image){
    var jobname = image.alt;
    var number = image.dataset.db;
    console.log(number)
    var charClass = document.getElementById("Jobname")
    charClass.innerText = jobname
}