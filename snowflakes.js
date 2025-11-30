/**
 * Snowflake Management System
 * Easy configuration and control of falling snowflakes
 */

class SnowflakeManager {
    constructor() {
        // Configuration - Easy to adjust!
        this.config = {
            count: 15,                    // Number of snowflakes
            symbols: ['❄', '❅', '❆', '❇', '❈', '<3'],    // Snowflake characters
            minDuration: 8,               // Minimum fall duration (seconds)
            maxDuration: 13,              // Maximum fall duration (seconds)
            maxDelay: 5,                  // Maximum animation delay (seconds)
            minSize: 1,                   // Minimum size (em)
            maxSize: 2,                   // Maximum size (em)
            opacity: 0.8                  // Snowflake opacity
        };
        
        this.container = null;
        this.snowflakes = [];
    }
    
    /**
     * Initialize the snowflake system
     * @param {string} containerId - ID of the snow container element
     */
    init(containerId = 'snowContainer') {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Snowflake container with ID '${containerId}' not found`);
            return;
        }
        
        this.createSnowflakes();
    }
    
    /**
     * Create all snowflakes
     */
    createSnowflakes() {
        // Clear existing snowflakes
        this.clearSnowflakes();
        
        for (let i = 0; i < this.config.count; i++) {
            this.createSnowflake();
        }
    }
    
    /**
     * Create a single snowflake
     */
    createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random properties
        const symbol = this.getRandomSymbol();
        const leftPosition = Math.random() * 100; // 0-100%
        const duration = this.getRandomDuration();
        const delay = Math.random() * this.config.maxDelay;
        const size = this.getRandomSize();
        
        // Set content and styles
        snowflake.textContent = symbol;
        snowflake.style.left = leftPosition + '%';
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.animationDelay = delay + 's';
        snowflake.style.fontSize = size + 'em';
        snowflake.style.opacity = this.config.opacity;
        
        this.container.appendChild(snowflake);
        this.snowflakes.push(snowflake);
        
        return snowflake;
    }
    
    /**
     * Get random snowflake symbol
     */
    getRandomSymbol() {
        return this.config.symbols[Math.floor(Math.random() * this.config.symbols.length)];
    }
    
    /**
     * Get random fall duration
     */
    getRandomDuration() {
        return Math.random() * (this.config.maxDuration - this.config.minDuration) + this.config.minDuration;
    }
    
    /**
     * Get random snowflake size
     */
    getRandomSize() {
        return Math.random() * (this.config.maxSize - this.config.minSize) + this.config.minSize;
    }
    
    /**
     * Clear all snowflakes
     */
    clearSnowflakes() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.snowflakes = [];
    }
    
    /**
     * Update snowflake count and recreate
     * @param {number} count - New snowflake count
     */
    setCount(count) {
        this.config.count = Math.max(0, count);
        this.createSnowflakes();
    }
    
    /**
     * Update snowflake symbols
     * @param {string[]} symbols - Array of snowflake symbols
     */
    setSymbols(symbols) {
        if (Array.isArray(symbols) && symbols.length > 0) {
            this.config.symbols = symbols;
            this.createSnowflakes();
        }
    }
    
    /**
     * Update animation speed range
     * @param {number} minDuration - Minimum duration in seconds
     * @param {number} maxDuration - Maximum duration in seconds
     */
    setSpeed(minDuration, maxDuration) {
        this.config.minDuration = Math.max(1, minDuration);
        this.config.maxDuration = Math.max(this.config.minDuration, maxDuration);
        this.createSnowflakes();
    }
    
    /**
     * Enable or disable snowflakes
     * @param {boolean} enabled - Whether to show snowflakes
     */
    setEnabled(enabled) {
        if (this.container) {
            this.container.style.display = enabled ? 'block' : 'none';
        }
    }
    
    /**
     * Get current configuration
     */
    getConfig() {
        return { ...this.config };
    }
    
    /**
     * Update multiple config options at once
     * @param {object} newConfig - Configuration object
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.createSnowflakes();
    }
}

// Create global instance
const snowflakeManager = new SnowflakeManager();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        snowflakeManager.init();
    });
} else {
    snowflakeManager.init();
}

// Export for use in other files
window.snowflakeManager = snowflakeManager;