/**
 * Adjusts the numeric part of a URL by a given step.
 * @param {string} currentUrl - The current URL.
 * @param {number} step - The step to adjust the numeric part of the URL.
 * @returns {string} - The updated URL.
 */
function stepUrl(currentUrl, step) {
  return currentUrl.replace(/(\d+)(?=\D*$)/, (match) => parseInt(match) + step);
}

module.exports = stepUrl;
