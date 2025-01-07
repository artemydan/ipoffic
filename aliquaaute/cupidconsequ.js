// Example usage
let facetData = someFunctionToGetFacetData();

if (facetData) {
    // Execute this block if facetData is truthy (not null, undefined, false, 0, empty string, etc.)
    console.log('Facet data is available:', facetData);
    // Other statements related to facetData
} else {
    // Optional else block for handling cases where facetData is falsy
    console.log('No facet data available.');
}
