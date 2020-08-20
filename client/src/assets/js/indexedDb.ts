import { request } from "http";

let indxDB: IDBFactory;
export function checkIndexedDbSupport() {
    if ( "indexedDB" in window && window.indexedDB != undefined) {
        indxDB = window.indexedDB;
        return true;
    } else {
        alert("Your browser does not support a stable version of IndexedDb.");
        return false;
    }
}

// const dbPlanSelectionName: string = "PlanSelection";
// export function useIndexedDb(databaseName: string, storeName: string, method: string, object: Object) {
//     return new Promise((resolve, reject) => {
//         const req = indxDB.open(dbPlanSelectionName, 1);
//         let db, tx, store;
//         req.onupgradeneeded = function ( e: any ) {
//             const db = request.result;
//             db.createObjectStore(storeName, { keyPath: "_id" });
//         };

//         req.onerror = function( e: any ) {
//             console.log("An error occurred while sending request.");
//         };

//         req.onsuccess = function(e) {
//             db = req.result;
//             tx = db.transaction(storeName, "readwrite");
//             store = tx.objectStore(storeName);

//             db.onerror = function( e: any ) {
//                 console.log("Error.");
//             }

//             switch (method) {
//                 case "put": 
//                     store.put(object);
//                     break;
//                 case "get":
//                     const all = store.getAll();
//                     all.onsuccess = function() {
//                         resolve(all.result);
//                     };
//                     break;
//                 case "delete":
//                     store.delete(object._id);
//                     break;
//             };

//             tx.oncomplete = function() {
//                 db.close();
//             }
//         };
//     })    
        
// }