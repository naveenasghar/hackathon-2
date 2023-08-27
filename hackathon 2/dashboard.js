// document.getElementById("publishButton").addEventListener("click", function() {
//     // Placeholder aur "What's on your mind" se text ko pakadna
//     var placeholderText = document.getElementById("placeholderInput").value;
//     var whatsOnYourMindText = document.getElementById("whatsOnYourMindInput").value;

//     // Agar dono fields mein text hai to post karein
//     if (placeholderText.trim() !== "" || whatsOnYourMindText.trim() !== "") {
//         // Post ka div element create karna
//         var postDiv = document.createElement("div");

//         // Placeholder aur "What's on your mind" ke text ko combine karke set karna
//         postDiv.innerHTML = "<p><strong>PLACEHOLDER:</strong> " + placeholderText + "</p>" +
//                             "<p><strong>What's on your mind:</strong> " + whatsOnYourMindText + "</p>";

//         // Post ko document ke "blogPosts" div ke andar append karna
//         document.getElementById("blogPosts").appendChild(postDiv);

//         // Text fields ko khali kar dena
//         document.getElementById("placeholderInput").value = "";
//         document.getElementById("whatsOnYourMindInput").value = "";
//     } else {
//         alert("Please enter some text to publish.");
//     }
// });
document.getElementById("publishButton").addEventListener("click", function() {
    // Textbox se text ko pakadna
    var blogText = document.getElementById("blogText").value;
    
    // Agar textbox khali hai, to kuch na karein
    if (blogText.trim() === "") {
        alert("Please enter some text to publish.");
    } else {
        // Publish ki gayi blog ko display karne ke liye ek new paragraph element create karna
        var paragraph = document.createElement("p");
        
        // Paragraph mein textbox se li gayi text set karna
        paragraph.innerText = blogText;
        
        // Paragraph ko document ke "publishedBlog" div ke andar append karna
        document.getElementById("publishedBlog").appendChild(paragraph);
        
        // Textbox ko khali kar dena
        document.getElementById("blogText").value = "";
    }
});













