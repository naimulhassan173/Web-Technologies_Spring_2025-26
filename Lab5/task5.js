function analyzeText() {
    const text = document.getElementById('userText').value;
    
 
    const charCount = text.length;
    
   
    const words = text.trim().split(/\s+/);
    const wordCount = (text.trim() === "") ? 0 : words.length;
    
   
    const reversed = text.split('').reverse().join('');
    
   
    const resultsDiv = document.getElementById('results');
    
    if (text.trim() === "") {
        resultsDiv.innerHTML = "<strong> No text entered.</strong><br>Please paste some text and try again.";
        return;
    }
    
    resultsDiv.innerHTML = `
        <strong>Analysis Results:</strong><br>
         Total characters: ${charCount}<br>
         Total words: ${wordCount}<br>
         Reversed text: ${reversed}
    `;
}
