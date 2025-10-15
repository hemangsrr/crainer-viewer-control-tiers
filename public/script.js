// Tier data parsed from tiers.md
const tiers = [
    {
        id: 1,
        name: "Minor Mischief",
        price: "$5 or 1 Membership",
        description: "Small fun effects to tease the streamer.",
        effects: [
            "Spawn 3 Chicken",
            "Give Nausea (30s)",
            "Random Sound Effect",
            "Set Time to Night"
        ]
    },
    {
        id: 2,
        name: "Chaotic Pranks",
        price: "$10 or 2 Membership",
        description: "More chaotic or dangerous — high entertainment value.",
        effects: [
            "Spawn 5 Creepers or 1 Charged Creeper Near Player",
            "Summon Lightning Bolt",
            "Start Thunderstorm",
            "Random Teleport (50–100 blocks)",
            "Name a Mob After Donor",
            "Summon Wandering Trader"
        ]
    },
    {
        id: 3,
        name: "Mayhem Mode",
        price: "$20 or 5 Membership",
        description: "The real chaos begins.",
        effects: [
            "Spawn 5 Zombies and 5 Skeletons",
            "Spawn 5 TNT (Primed)",
            "Blindness + Slowness Combo (60s)"
        ]
    },
    {
        id: 4,
        name: "Game-Changers",
        price: "$50 or 10 Membership",
        description: "Big moves that can change the game instantly.",
        effects: [
            "Teleport to Random Biome / Random Coordinates",
            "Spawn Mini-Boss (Evoker / Ravager)",
            "Set Surrounding Area on Fire (5x5)",
            "Remove One Armor Piece",
            "Create Lava Pit Trap"
        ]
    },
    {
        id: 5,
        name: "Stream Legends",
        price: "$100+ or 20 Membership",
        description: "Ultimate chaos. Guaranteed highlight moments.",
        effects: [
            "Spawn Wither or Guardian",
            "Instant Inventory Wipe",
            "Teleport to Nether or End"
        ]
    }
];

// Function to create tier card HTML
function createTierCard(tier) {
    const card = document.createElement('div');
    card.className = `tier-card tier-${tier.id}`;
    
    const effectsList = tier.effects.map(effect => `<li>${effect}</li>`).join('');
    
    card.innerHTML = `
        <div class="tier-header">
            <h2 class="tier-name">${tier.name}</h2>
            <p class="tier-price">${tier.price}</p>
        </div>
        <p class="tier-description">${tier.description}</p>
        <ul class="tier-effects">
            ${effectsList}
        </ul>
    `;
    
    return card;
}

// Function to render all tiers
function renderTiers() {
    const container = document.getElementById('tiers-container');
    
    tiers.forEach(tier => {
        const card = createTierCard(tier);
        container.appendChild(card);
    });
}

// Add entrance animation
function animateCards() {
    const cards = document.querySelectorAll('.tier-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderTiers();
    animateCards();
    
    // Add some interactive effects
    const blocks = document.querySelectorAll('.block, .creeper');
    blocks.forEach(block => {
        // Random animation delay for variety
        block.style.animationDelay = `${Math.random() * 2}s`;
    });
});
