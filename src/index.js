import stepUrl from '../src/stepUrl';

alert('update 6');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const currentUrl = window.location.href;
    const prevUrl = stepUrl(currentUrl, -1);
    const nextUrl = stepUrl(currentUrl, 1);
    console.log('prevUrl', prevUrl);
    console.log('nexxtUrl', nextUrl);

    // const prevButton = document.getElementById('prevButton');
    // const nextButton = document.getElementById('nextButton');
    // console.log('prevButton', prevButton);
    // console.log('nextButton', nextButton);
});


// document.getElementById('prevButton').onclick = function (e) {
//     // e.preventDefault(); // Prevent the default action of the button
//     console.log('prevButton clicked');
//     const newUrl = stepUrl(-1);
//     console.log('newUrl', newUrl);

//     window.location.href = newUrl;
// }

// document.getElementById('nextButton').onclick = function (e) {
//     // e.preventDefault(); // Prevent the default action of the button
//     console.log('prevButton clicked');
//     const newUrl = stepUrl(1);
//     console.log('newUrl', newUrl);

//     window.location.href = newUrl;
// }