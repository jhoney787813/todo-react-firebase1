import firebase  from 'firebase/app';

const  firebaseConfig = {
        apiKey: "AIzaSyBbU8O9MwNlXu6PlBrR4Xv-grQDhK7W4_o",
        authDomain: "todo-f901f.firebaseapp.com",
        databaseURL: "https://todo-f901f.firebaseio.com",
        projectId: "todo-f901f",
        storageBucket: "todo-f901f.appspot.com",
        messagingSenderId: "463595837374",
        appId: "1:463595837374:web:17496d63f6e64e8bf7cbef"
      };

   export default firebase.initializeApp(firebaseConfig);   

