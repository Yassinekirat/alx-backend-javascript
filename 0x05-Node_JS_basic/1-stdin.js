process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {

  if (process.stdin.read()) {
    process.stdout.write(`Your name is: ${process.stdin.read()}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
