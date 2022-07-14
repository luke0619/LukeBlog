import { initializeApp } from "firebase/app";

import { getDatabase, ref, remove} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAc_eKPAMBhwh1Y6AfcRzywVevsN1bDavs",
    authDomain: "luke-blog-d593d.firebaseapp.com",
    databaseURL: "https://luke-blog-d593d-default-rtdb.firebaseio.com",
    projectId: "luke-blog-d593d",
    storageBucket: "luke-blog-d593d.appspot.com",
    messagingSenderId: "903602647879",
    appId: "1:903602647879:web:11f5646366b3d3a6ce1262"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// //更新資料的指令
// const articleData = {
//   title: props.title,
//   type: props.type,
//   text: props.text
// };
// const newKey = push(child(ref(database), 'quotes')).key;
// const updates = {};
// updates['/quotes/' + newKey] = articleData;
// update(ref(database), updates);

export const removeFirebaseData = (id) => {
  console.log('觸發刪除事件');
  const target = ref(db, 'quotes/' + id);
  remove(target);
}


// 刪除資料的指令
    //方法一
    // remove(ref(database, 'quotes/' + props.id))
    //方法二
    //    set(ref(database, 'quotes/' + props.id), {
    //         type: '',
    //         text: '',
    //         title: '',
    //    })
