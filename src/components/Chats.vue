<template>
    <main>
        <section id="chat-users">
            <div class="header"><p>Chat</p></div>
            <article id="users-list">
            </article>
            <div id="new-conversation-div">
                <input id="new-conv-user">
                <v-btn @click="openNewChatRoom()" id="start-new-conv">start</v-btn>
            </div>
        </section>
        <section id="chat-window">
            <div class="header" id="user-header">
                <p id="target-name">Użytkownik</p>
            </div>
            <article id="main-chat">
            </article>
            <article id="new-message">
                <textarea id="new-text" placeholder="Enter new message..."></textarea>
                <v-btn @click="sendMessage()" id="send-message">
                    >
                </v-btn>
            </article>
        </section>
    </main>
</template>

<script>
    import firebase from 'firebase';
    import db from './firebaseInit';
    require('firebase/auth');

    export default {
        name: "Chats",
        data(){
            return{
                oldUser: true,
                currentUser: firebase.auth().currentUser,
                currentTarget: '',
                currentChatName: '',
                messages: [],
                chatUsers: [],
                profile: location.href.split("?")[1]
            }
        },
        mounted(){
            this.onLoad();
        },
        methods:{
            onLoad(){
                if(this.profile.length > 5){
                    this.currentTarget = this.profile;
                    this.currentTarget = db.collection('Users').doc(this.profile).get().then(snapshot => {
                        if(snapshot.exists){
                            this.currentTarget = snapshot.get('name');
                            this.currentTarget += " " + snapshot.get('last_name');
                        }
                    });
                    this.getChatRoom(this.profile);
                }
            },

            /**
             * funkcja odpowiadająca za wysyłanie wiadomości
             */
            sendMessage(){
                let text = document.getElementById('new-text').value;
                if(text != "") {
                    let data = {
                        text: text,
                        author: this.currentUser.uid,
                        target: this.currentTarget
                    };
                    this.messages.push(data);
                    db.collection('Chats').doc(this.currentChatName).update({messages: this.messages});
                }
                this.loadChatRoom();
            },

            /**
             * funkcja próbująca otworzyć czat z nowym użytkownikiem
             */
            openNewChatRoom(){
                this.oldUser = false;
                let user = document.getElementById('new-conv-user').value;
                window.location.href = window.location.href.split("?")[0] + "?" + user;
                location.reload();
            },

            /**
             * funkcja odpowiadająca za wyświetlenie załadowanego czatu
             */
            loadChatRoom(){
                let chat = document.getElementById('main-chat');
                document.getElementById('target-name').innerHTML = this.currentTarget;

                while(chat.firstChild){
                    chat.removeChild(chat.firstChild);
                }

                for(let i=0; i<this.messages.length; i++){
                    let row = document.createElement('section');
                    row.className = "message-row";
                    row.style.width = '100%';
                    row.style.display = 'flex';
                    row.style.justifyContent = 'space-between';
                    row.style.marginBottom = '10px';

                    let pillow = document.createElement('div');
                    pillow.className = "message-pillow";
                    pillow.style.minWidth = '50%';

                    let message = document.createElement('div');
                    message.innerHTML = this.messages[i].text;
                    message.style.maxWidth = '49%';
                    message.style.padding = "6px 12px 6px";
                    message.style.borderRadius = '15px';
                    message.style.color = '#ddd';
                    message.style.textAlign = 'left';

                    if(this.messages[i].author == this.currentUser.uid){
                        message.style.backgroundColor = '#0060dd';
                        message.className = "user-message";
                        row.appendChild(pillow);
                        row.appendChild(message);
                    }else{
                        message.style.backgroundColor = '#777';
                        message.className = "target-message";
                        row.appendChild(message);
                        row.appendChild(pillow);
                    }

                    chat.appendChild(row);
                }
            },

            /**
             * funkcja zwracająca czat z danym użytkownikiem (tworząca go jeżeli takowy nie istnieje)
             */
            async getChatRoom(user) {
                let notified = false;
                //while(this.oldUser) { odkomentować przed prezentacją
                    db.collection('Users').get().then((result) => {
                        let exists = false;
                        result.docs.forEach((doc) => {
                            if (doc.id == user)
                                exists = true;
                        });
                        if (exists) {
                            if (user < this.currentUser.uid) {
                                this.currentChatName = user + this.currentUser.uid;
                            } else {
                                this.currentChatName = this.currentUser.uid + user;
                            }
                            db.collection('Chats').doc(this.currentChatName).get().then((result) => {
                                let data = result.data();
                                if (typeof data == "undefined") {
                                    console.log("creating new chat room");
                                    db.collection('Chats').doc(this.currentChatName).set({messages: []});
                                }
                                this.chatroom = db.collection('Chats').doc(this.currentChatName);
                                this.chatroom.get().then((result) => {
                                    this.messages = result.data().messages;
                                    this.loadChatRoom();
                                });
                            });
                        } else if(!notified){
                            alert("user doesn't exist!");
                            notified = true;
                        }
                    });
                    //await this.sleep(200); odkomentować przed prezentacją

                //} odkomentować przed prezentacją
            },
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        }
    }
</script>

<style scoped>
    main{
        display: flex;
        width: 100%;
        height: calc(100vh - 65px);
        background-color: #222;
    }

    #chat-users{
        height: 100%;
        width: 30%;
        border: solid 2px #222;
    }

    #chat-window{
        height: 100%;
        width: 70%;
        border: solid 2px #222;
        background-color: #353535;
    }

    .header{
        height: 10%;
        max-height: 60px;
        width: 100%;
        border: solid 1px #424242;
        background-color: #ddd;
        padding: 10px;
        font-size: 150%;
        margin-top: auto;
        margin-bottom: auto;
    }

    #users-list{
        height: 85%;
        color: #ddd;
        overflow-y: scroll;
    }

    #user-header{
        text-align: right;
    }

    #main-chat{
        height: 75%;
        background-color: #424242;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 10px;
        overflow-y: scroll;
    }

    #new-message{
        display: flex;
        height: 15%;
        width: 100%;
    }

    textarea{
        padding: 10px;
        color: #ddd;
        margin: 10px;
        height: 100%;
        width: calc(90% - 30px);
        resize: none;
        border: 2px solid #333;
        overflow: auto;
        background-color: #424242;
        border-radius: 15px;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    #send-message{
        margin: 10px 10px 10px 0px;
        width: 10%;
        height: 100%;
        border-radius: 15px;
        background-color: #ddd;
    }

    ::-webkit-resizer {
        display: none;
    }

    .conversation{
        background-color: #333;
        border-radius: 15px;
        height: 15%;
        max-height: 80px;
        min-height: 60px;
        padding: 10px;
        margin: 10px;
        font-size: 125%;
        text-align: center;
    }

    #new-conversation-div{
        height: calc(5% - 5px);
        margin-top: 5px;
        display: flex;
    }

    #new-conv-user{
        background: #424242;
        width: calc(80% - 5px);
        margin: 5px;
        height: 100%;
        color: white;
    }

    #start-new-conv{
        width: calc(20% - 5px);
        margin: 5px;
    }
</style>