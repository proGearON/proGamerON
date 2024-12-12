if ("Notification" in window) {

     if (Notification.permission === 'granted') {
          notify();
     }
     else {
          Notification.requestPermission().then((res) => {
               if (res === 'granted') {
                    notify();
               } else if (res === 'denied') {
                    console.log("Notifications access denied");
               } else if (res === 'default') {
                    console.log("Notifications permission not given");
               }

          })
     }
}
else {
     console.error("Notification not supported");
}

function notify() {
     const notification = new Notification("Notifications of Website is come stay join to our website for new updates", {
          body: 'New version of website coming v2.0',
          icon: './logo.png',
          vibrate: [300, 100, 200],
          ring: './Notification.mp3',
     });

     notification.addEventListener('click', () => {
          window.open('index.html');
     });


     setTimeout(() => {

          notification.close();

     }, 4000)

}