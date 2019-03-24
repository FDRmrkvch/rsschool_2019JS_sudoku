module.exports = function solveSudoku(matrix)
{
  var matrixDone = matrix;


  function solved(matrix)
{
  var cell = [];
  if(!findEmpSpc(matrix, cell))
  {
    return true;
  }
  var row = cell[0];
  var col = cell[1];
  for(var num = 1;num<10;num++)
  {
    if(!checkRow(matrix, row, num) && !checkCol(matrix, col, num) && !checkBox(matrix,row - row % 3, col - col % 3,num))
    {
      matrix[row][col] = num;
      if(solved(matrix))
      {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}



 
  return false;
}