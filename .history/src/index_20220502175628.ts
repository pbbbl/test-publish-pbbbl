
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
console.log('test-publish-pbbbl is working 0.2.0');
/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pbbbl/test-publish-pbbbl.git
git push -u origin main
*/
