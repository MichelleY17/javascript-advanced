const N = 15;
const fizz = 3;
const buzz = 5;




for(let i=1 ; i<=N;i++){
    let output="";
    if(i%3===0){
        output="fizz"
    }else if(i%5===0){
        output="buzz"
    }else{
        output=i;
    }
    console.log(output)
};


