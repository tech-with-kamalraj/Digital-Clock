   function  c_time(){
    let date = new Date();
    let hs = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = document.getElementById('session');

    if(hs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    document.getElementById('hrs').innerHTML = hs;
    document.getElementById('mts').innerHTML = minutes;
    document.getElementById('sc').innerHTML = seconds;
}
setInterval(c_time,10);

    

  