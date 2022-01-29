let find = 0;

function showSlide(num){
    let doc1 = document.getElementsByClassName("slide");
    for(let x of doc1){
        x.style.display = "none";
    };
    
    if(find == doc1.length){
        find = 0;
        num = 0
    }
    if(find < 0){
        find = doc1.length-1;
        num = doc1.length-1;

    }

    doc1[num].style.display = "block";

};
showSlide(find);

function counter(val){
    find = find + val;
    showSlide(find);
};