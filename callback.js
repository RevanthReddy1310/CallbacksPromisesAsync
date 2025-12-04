function getUserDetails(id,getUserSubjects){
    console.log("getting user id",id);
    getUserSubjects({userroll: "678"});
};
function getUserSubjects(userroll,getUserMarks){
    console.log("getting user subjects by roll number",userroll);
    getUserMarks({subid: "eng-1"});
}
function getUserMarks(subjectid){
    console.log("getting user marks by subject id",subjectid);
}
getUserDetails("123",function(userroll){
    getUserSubjects(userroll,function(subjectid){
        getUserMarks(subjectid);
    })
});