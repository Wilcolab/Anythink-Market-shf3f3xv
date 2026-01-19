function toKebabCase(str) {
    return str
        // Replace underscores and spaces with hyphens
        .replace(/[\s_]+/g, '-')
        // Insert hyphen before uppercase letters preceded by lowercase
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Insert hyphen before uppercase letters followed by lowercase (for sequences like "HTMLParser")
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove duplicate hyphens
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-|-$/g, '');
}

// Examples:
console.log(toKebabCase('myVariableName'));      // "my-variable-name"
console.log(toKebabCase('MyVariableName'));      // "my-variable-name"
console.log(toKebabCase('my_variable_name'));    // "my-variable-name"
console.log(toKebabCase('my variable name'));    // "my-variable-name"
console.log(toKebabCase('HTMLParser'));          // "html-parser"
console.log(toKebabCase('getHTTPResponseCode')); // "get-http-response-code"
console.log(toKebabCase('simple'));              // "simple"
console.log(toKebabCase(''));                    // ""