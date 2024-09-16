document.addEventListener('DOMContentLoaded', function() {
    // Simulating dynamic loading of carbon footprint data
    const carbonAmount = document.getElementById('carbon-amount');
    setTimeout(() => {
        carbonAmount.textContent = "450,000";
    }, 1500);

    // Show reduction strategy on button click
    const reduceBtn = document.getElementById('reduce-btn');
    const reductionStrategy = document.getElementById('reduction-strategy');

    reduceBtn.addEventListener('click', function() {
        reductionStrategy.style.display = reductionStrategy.style.display === 'none' ? 'block' : 'none';
    });
});