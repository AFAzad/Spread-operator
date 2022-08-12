var ary = [20,30,50,80];

var ary2 = [47,63,96];

var ary3 = [25, ...ary2,...ary,65];
console.log(ary3);

var obj1 = {
    chanel: "Raaz Info",
    Topic : "Eduction and Information"
};

var obj2={
    Profession: "Businessman and a YouTuber",
    Location: "India"

}

var obj3 = {...obj1,...obj2};
console.log(obj3);
