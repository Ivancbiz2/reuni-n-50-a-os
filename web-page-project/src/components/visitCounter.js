function initializeVisitCounter() {
    const visitCountKey = 'visitCount';
    let visitCount = localStorage.getItem(visitCountKey);

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }

    visitCount++;
    localStorage.setItem(visitCountKey, visitCount);

    const counterElement = document.getElementById('visit-counter');
    if (counterElement) {
        counterElement.textContent = `Number of visits: ${visitCount}`;
    }
}

export { initializeVisitCounter };