function B(note) {
    return note >= 10;  //fonctions slide 46

}

function A() {
    // type complexe tableau d objets slide 41
    const Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    for (let i = 0; i < Students.length; i++) {
        if (B(Students[i][3])) {  //fonctions slide 46 
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}
