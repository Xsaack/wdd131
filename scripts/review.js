// Track review count in localStorage
document.addEventListener('DOMContentLoaded', function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display review count
    document.getElementById('review-count').textContent = 
        `You have submitted ${reviewCount} review(s) from this device.`;
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});