// Get data from Firestore (previously a local JSON file)
db.collection("Cities").get().then(response => {
    console.log(response);

    let markersArray = [];

    response.docs.forEach(doc => {
        markersArray.push(doc.data());
        console.log("Data: ", markersArray);
    });
});