function submitIssue(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let description=document.getElementById("description").value;
    let message=document.getElementById("message");

    if(name==="" || email==="" || description===""){
        message.innerHTML="Please complete all required fields.";
        message.style.color="red";
        return;
    }

    message.innerHTML="Issue submitted successfully. Thank you for your report.";
    message.style.color="green";

    document.getElementById("issueForm").reset();

}
