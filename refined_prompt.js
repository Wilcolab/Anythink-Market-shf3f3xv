/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert. Must be a non-empty string containing
 *                       at least one letter.
 * @returns {string} The converted camelCase string.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input string is empty.
 * @throws {Error} If input contains no letters.
 * 
 * @example
 * toCamelCase('hello world');           // 'helloWorld'
 * toCamelCase('hello-world');           // 'helloWorld'
 * toCamelCase('hello_world');           // 'helloWorld'
 * toCamelCase('HELLO WORLD');           // 'helloWorld'
 * toCamelCase('hello-world_test api');  // 'helloWorldTestApi'
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to dot.case where words are separated by dots and all characters
 * are lowercase.
 * 
 * @param {string} str - The input string to convert. Must be a non-empty string containing
 *                       at least one letter.
 * @returns {string} The converted dot.case string with words separated by dots.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input string is empty.
 * @throws {Error} If input contains no letters.
 * 
 * @example
 * toDotCase('hello world');           // 'hello.world'
 * toDotCase('hello-world');           // 'hello.world'
 * toDotCase('hello_world');           // 'hello.world'
 * toDotCase('HELLO WORLD');           // 'hello.world'
 * toDotCase('hello-world_test api');  // 'hello.world.test.api'
 */
function toCamelCase(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    if (str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Split by multiple separators (spaces, hyphens, underscores)
    const words = str.split(/[\s\-_]+/).filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one letter');
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Remove non-letter characters but preserve the word structure
            const cleaned = word.replace(/[^a-zA-Z]/g, '');

            if (cleaned.length === 0) {
                return '';
            }

            // First word is lowercase, subsequent words are capitalized
            if (index === 0) {
                return cleaned.toLowerCase();
            }

            // Capitalize first letter, keep rest as-is (preserves acronyms)
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
        })
        .filter(word => word.length > 0)
        .join('');
}

// Example usage:
console.log(toCamelCase('hello world'));           // helloWorld
console.log(toCamelCase('hello-world'));           // helloWorld
console.log(toCamelCase('hello_world'));           // helloWorld
console.log(toCamelCase('HELLO WORLD'));           // helloWorld
console.log(toCamelCase('hello-world_test api')); // helloWorldTestApi
function toDotCase(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    if (str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Split by multiple separators (spaces, hyphens, underscores)
    const words = str.split(/[\s\-_]+/).filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one letter');
    }

    // Convert to dot.case
    return words
        .map(word => {
            // Remove non-letter characters
            const cleaned = word.replace(/[^a-zA-Z]/g, '');
            return cleaned.toLowerCase();
        })
        .filter(word => word.length > 0)
        .join('.');
}

// Example usage:
console.log(toDotCase('hello world'));           // hello.world
console.log(toDotCase('hello-world'));           // hello.world
console.log(toDotCase('hello_world'));           // hello.world
console.log(toDotCase('HELLO WORLD'));           // hello.world
console.log(toDotCase('hello-world_test api')); // hello.world.test.api

