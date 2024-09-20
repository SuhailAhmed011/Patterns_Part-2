/*
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    * 
    */


function pattern6(n){
    for(let i = 0; i<n; i++){
        let rows = ''
        //space
        for(let j = 0; j<n-i-1; j++){
        rows += " "
        }

        // star
        for(let j  = 0; j<2*i+1; j++){
            rows += "*"
        }

        
       
        console.log(rows)
    }
}

function pattern7(n){
    for(let i = 0; i<n; i++){
        let rows = " ";
        // space
        for(let j = 0; j<i; j++){
            rows += " "
        }
        // stars
        for(let j = 0; j<2*n - (2*i+1); j++){
            rows += "*"
        }
        console.log(rows)
    }
   
}

//console.log(pattern6(5));
//console.log(pattern7(5))

function pattern8(n){
    for(let i = 1; i<=2*n-1; i++){
        let rows = ""
        let stars = i;
        if(i>n) stars = 2*n-i
        for(let j = 1; j<=stars; j++){
            rows += "*"
        }
        console.log(rows)
    }
}

function pattern9(n){
    for(let i = 0; i<=n; i++){
        let rows = ''
        let start = 1
        if(i%2 === 0) start = 1;
        else start = 0;
        for(let j = 0; j<=i; j++){
            rows += start
            start = 1 - start

        }
        console.log(rows)
    }
}


function pattern10(n){
    let space = 2*(n-1)
    for(let i = 1; i<=n; i++){
        let rows = "";
        for(let j = 1; j<=i; j++){
            rows += j
        }
        for(let j = 1; j<=space; j++){
            rows += " ";
        }
        for(let j = i; j>=1; j--){
            rows += j
        }
        console.log(rows)
        space -= 2
    }
}
console.log(pattern10(5))