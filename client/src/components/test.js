console.log('test file ran');

var testFileLoading = function() {
  console.log('testFileLoading');
}

window.testFileLoading = testFileLoading();

export default testFileLoading;