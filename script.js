// Function to extract keywords from the text
function extractKeywords() {
    // Get the text content from the textarea
    const text = document.getElementById('content').value;

    // Check if the text is empty
    if (!text.trim()) {
        document.getElementById('result').innerHTML = 'Please enter some text.';
        return;
    }

    // Initialize the compromise library with the text
    const nlp = window.nlp(text);

    // Extract nouns (a simple way to get keywords)
    const nouns = nlp.nouns().out('array');

    // Check if any nouns are extracted
    if (nouns.length === 0) {
        document.getElementById('result').innerHTML = 'No keywords found.';
        return;
    }

    // Display the keywords
    document.getElementById('result').innerHTML = '<strong>Extracted Keywords:</strong><br>' + nouns.join(', ');
}
