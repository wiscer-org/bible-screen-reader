import { stepUrl } from './nav';

document.addEventListener('DOMContentLoaded', () => {
    // Get the URLs to replace the navigation buttons
    const currentUrl = window.location.href;
    const prevUrl = stepUrl(currentUrl, -1);
    const nextUrl = stepUrl(currentUrl, 1);

    // Get the buttons
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Change the `href`in the `#prevButton` and `#nextButton` elements
    prevButton.href = prevUrl;
    nextButton.href = nextUrl;
});