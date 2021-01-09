$(function() {
    $("#getQuote").click(fetchQuote)

})
function fetchQuote() {
     $.get({
            url: "https://api.quotable.io/random",
            dataType: "json",
            success:function(data){
             const {author, content} = data
                $(".quote").html(content)
                 $(".author").html(`--- ${author}`)
            }
        });
}