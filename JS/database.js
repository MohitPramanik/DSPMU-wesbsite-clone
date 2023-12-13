var db = openDatabase("college", '1.0', "loginDetails",10)
$(function() {
    $("#register").click(function() {
        db.studentLogin(function(login) {
            var sql = "CREATE TABLE login" +
        })
    })
})