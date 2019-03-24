module.exports = function solveSudoku(matrix){
  
var matrixDone = matrix;
  if(solved(matrix)){
    matrixDone = matrix;
  }
return matrixDone;

function solved(matrix){
  var cell = [];
  if(!fij(matrix, cell)){
    return true;
}

var row = cell[0];
var col = cell[1];

for(var num = 1; num < 10; num++){
  if(!rowChecked(matrix, row, num) && !colChecked(matrix, col, num) && !check(matrix, row - row % 3, col - col % 3, num)){
    matrix[row][col] = num;
      if(solved(matrix)){
        return true;
      }
     matrix[row][col] = 0;
  }
}
return false;
}

function fij(matrix, cell){
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      if(matrix[i][j] == 0){
        cell[0] = i;
        cell[1] = j;
        return true;
      }
    }
  }
  return false;
}
  
function rowChecked(matrix, row, num){
  for(var i = 0; i < 9; i++){
    if(matrix[row][i] == num){
      return true;
      }
    }
  return false;
}
  
  function colChecked(matrix, col, num){
    for(var i = 0; i < 9; i++){
      if(matrix[i][col] == num){
        return true;
      }
    }
  return false;
}

function check(matrix, row, col, num){
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(matrix[i + row][j + col] == num){
        return true;
        }
      }
    }  
  return false;
}
}