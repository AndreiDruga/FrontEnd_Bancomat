function WriteToFile(passForm) {
 
     fso = CreateObject("Scripting.FileSystemObject"); 
     s   = fso.CreateTextFile("<your Path>/filename.txt", True);
 
    var firstName = document.getElementById('FirstName');
    var lastName  = document.getElementById('lastName');
 
    s.writeline("First Name :" + FirstName);
    s.writeline("Last Name :" + lastName);
 
    s.writeline("-----------------------------");
    s.Close();
 }

