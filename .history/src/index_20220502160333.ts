export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
console.log('test-publish-pbbb is working');
/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pbbbl/test-publish-pbbbl.git
git push -u origin main
*/
