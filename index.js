var matrixBlockSum = function(mat, k) {
    let m = mat.length;
    let n= mat[0].length;
    const prefix = Array.from({ length:m+1}, ()=> Array(n+1).fill(0));
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            prefix[i][j] = mat[i-1] [j-1]
                        +prefix[i-1] [j]
                        +prefix[i][j-1]
                        -prefix[i-1][j-1];
        }
    }
    const answer = Array.from({ length:m}, ()=> Array(n).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let r1 = Math.max(0, i-k);
            let c1 = Math.max(0, j-k);
            let r2 = Math.min(m-1, i+k);
            let c2 = Math.min(n-1, j+k);

            r1++;
            c1++;
            r2++;
            c2++;

            answer[i][j] = prefix[r2] [c2]
                          -prefix[r1-1] [c2]
                          -prefix[r2] [c1-1]
                          +prefix[r1-1] [c1-1];
        }
    }
    return answer;
};