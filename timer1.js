let timeInt = process.argv.slice(2);

let timer = time => {
  for (let num of time) {
    num = parseInt(num);
    if (num < 0) {
      continue;
    } else if (num) {
      setTimeout(() => {
        process.stdout.write(num + " seconds\n");
      }, num);
    } else {
      continue;
    }
  }
};

timer(timeInt);
