let cfButton = document.getElementById("cf");

window.onload = () => {
    chrome.storage.local.get(['cfkey'], function(result) {
        console.log('Value currently is ' + result.key);
      });
    // let tmp = chrome.storage.local.get['cfKey'];
    // if(tmp == true)
    // {
    //     $(cfButton).prop('checked', true); 

    // } else {
    //     $(cfButton).prop('checked', false);
    // }    
}

$(cfButton).click(function(){
    if($(this).is(':checked')){
        chrome.storage.local.set({'cfKey': 1}, function() {
            console.log('Value is set to ' + value);
          });
    } else {
        chrome.storage.local.set({'cfKey': 0}, function() {
            console.log('Value is set to ' + value);
          });
    }
});
