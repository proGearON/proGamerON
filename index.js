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
     const notification = new Notification("New version of Website is come, So check Out it ", {
          body: 'Pages of website is updated and Website is Enterd in his version 2.0',
          icon: './logo.png',
          vibrate: [300, 100, 200],
          ring: './Notification.mp3',
     });
     const notification1 = new Notification("New video is come check Out is today", {
          body: 'My First Minecraft Jar World Video on this Youtube',
          icon: './0018.jpg',
          vibrate: [300, 100, 200],
          ring: './Notification.mp3',
     });

     

     notification.addEventListener('click', () => {
          window.open('index.html');
     });

     notification1.addEventListener('click', () => {
          window.open('ok.html');
     });

     setTimeout(() => {

          notification.close();

     }, 4000)

}