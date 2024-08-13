const ribbonColors = ['br', 'pr']; // 'br' for blue ribbon, 'pr' for pink ribbon
const fillings = ['pg', 'bg', 'tb']; // filling types
let currentRibbonColorIndex = 0; // Initial index for ribbon color
let currentFillingIndex = 0; // Initial index for filling type

function updateImage() {
    // Get current ribbon color and filling
    const ribbonColor = ribbonColors[currentRibbonColorIndex];
    const filling = fillings[currentFillingIndex];
    const imageName = `${ribbonColor}_${filling}.png`; // Construct the image name
    const imagePath = `Balloon/images/Examples/${imageName}`; // Path to the image
    // Update the image source and force a reload
    document.getElementById('balloonImage').src = imagePath + "?t=" + new Date().getTime();
}

function changeRibbonColor(direction) {
    // Change the ribbon color index based on the direction
    if (direction === 'left') {
        currentRibbonColorIndex = (currentRibbonColorIndex - 1 + ribbonColors.length) % ribbonColors.length;
    } else if (direction === 'right') {
        currentRibbonColorIndex = (currentRibbonColorIndex + 1) % ribbonColors.length;
    }
    updateImage(); // Update the image after changing the ribbon
}

function changeFilling(direction) {
    // Change the filling index based on the direction
    if (direction === 'left') {
        currentFillingIndex = (currentFillingIndex - 1 + fillings.length) % fillings.length;
    } else if (direction === 'right') {
        currentFillingIndex = (currentFillingIndex + 1) % fillings.length;
    }
    updateImage(); // Update the image after changing the filling
}

function customizeOrder() {
    // Prepare the order summary with selected options
    const ribbonColor = ribbonColors[currentRibbonColorIndex];
    const filling = fillings[currentFillingIndex];

    const ribbonColorText = ribbonColor === 'br' ? 'Blue Ribbon' : 'Pink Ribbon';
    let fillingText = '';

    switch (filling) {
        case 'pg':
            fillingText = 'Pink Girls Outfit';
            break;
        case 'bg':
            fillingText = 'Blue Boys Outfit';
            break;
        case 'tb':
            fillingText = 'Teddy Bear';
            break;
    }

    // Update the summary display
    document.getElementById('summaryRibbonColor').innerText = `Ribbon Color: ${ribbonColorText}`;
    document.getElementById('summaryFilling').innerText = `Filling: ${fillingText}`;
    document.getElementById('orderSummary').classList.remove('hidden'); // Show summary
}

// Initial image load
updateImage();