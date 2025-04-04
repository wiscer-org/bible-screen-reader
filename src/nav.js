/**
 * Adjusts the numeric part of a URL by a given step.
 * @param {string} currentUrl - The current URL.
 * @param {number} step - The step to adjust the numeric part of the URL.
 * @returns {string} - The updated URL.
 */
function stepUrl(currentUrl, step) {
  // Must persist the number of digits in the URL
  const match = currentUrl.match(/(\d+)(?=\D*$)/);
  if (match) {
    const originalLength = match[0].length;
    const updatedNumber = (parseInt(match[0]) + step).toString().padStart(originalLength, '0');
    return currentUrl.replace(/(\d+)(?=\D*$)/, updatedNumber);
  }
  return currentUrl.replace(/(\d+)(?=\D*$)/, (match) => parseInt(match) + step);
}

function testFunc() {
  console.log('testFunc called');
}

module.exports = {
  stepUrl,
  testFunc,
};
