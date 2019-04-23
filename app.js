function noSameCloth(arr) {
  //calculate and list a lot of clothes
  //make it zero
  var data = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      data[arr[i][j]] = 0;
    }
  }

  //increment it to spesific a lot of clothes
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      data[arr[i][j]]++;
    }
  }

  //if there is a single cloth on array of array, another cloth on its array must be erase.
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (data[arr[i][j]] == 1) {
        for (var k = 0; k < arr[i].length; k++) {
          if (arr[i][k] != arr[i][j]) {
            arr[i].splice(k, 1);
            k--;
          }
        }
      }
    }
  }


  //there is a single cloth is an array, and another same clothes must be erase.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == 1) {
      for (var j = 0; j < arr.length; j++) {
        if (j != i) {
          for (var k = 0; k < arr[j].length; k++) {
            if (arr[i][0] == arr[j][k]) arr[j].splice(k, 1);
          }
        }
      }
    }
  }


  var mx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (mx < arr[i].length) mx = arr[i].length;
  }


  //in case ['cloth1', 'cloth2'], ['cloth1', 'cloth2'], ['cloth3']
  //there is an identic array which is same cloth inside, make sure just take 1 of arr[0][0] with method .pop()
  //on arr[1] take different cloth from arr[0] and erase the same cloth
  while (mx > 1) {
    mx = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > 1) {
        var ch = arr[i][0];
        while (arr[i].length > 1) arr[i].pop();
        for (var j = 0; j < arr.length; j++) {
          if (j != i) {
            for (var k = 0; k < arr[j].length; k++) {
              if (ch == arr[j][k]) arr[j].splice(k, 1);
            }
          }
        }
      }
      if (mx < arr[i].length) mx = arr[i].length;
    }
  }

  //when array have a null value, set false
  var check = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == 0) {
      check = false;
      break;
    }
  }

  // when spesific cloth have more than one, choose one
  var data2 = []
  for (var i = 0; i < arr.length; i++) {
    data2[arr[i][0]] = 0;
  }

  for (var i = 0; i < arr.length; i++) {
    data2[arr[i][0]]++;
  }


  //set false to redundan cloth
  for (var i = 0; i < arr.length; i++) {
    if (data2[arr[i][0]] > 1) check = false;
  }

  if (check == true) console.log(true);
  else console.log(false);
}

var arr = [
  ['JakartaJS'],
  ['AWSome Day', 'Elixir'],
  ['JVM User Group'],
  ['GoJakarta', 'Elixir']
];

noSameCloth(arr);

//output : true
