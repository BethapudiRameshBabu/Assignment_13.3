var i,j,k=0; 
var result="";

var userdetObj={"student":[{"name":"Pinky","age":35,"weight":50,"height":180,"friends":['Ramesh','Maria','Lucas'],"college":[{"name":"Infotech College","city":"Hyderabad","pincode":500088}]},
           {"name":"Jerry","age":25,"weight":55,"height":165,"friends":['Robert','Pakir','Susheel','Harish'],"college":[{"name":"Western College","city":"Banglore","pincode":500007}]},
            {"name":"Mathews","age":21,"weight":63,"height":125,"friends":['Sandeep','Julie','Andrews'],"college":[{"name":"Bhavans College","city":"Mumbai","pincode":500013}]},
            {"name":"Swetha","age":23,"weight":52,"height":170,"friends":['Jenny','Sangeetha','Reddy','Manju'],"college":[{"name":"Sreenidhi","city":"Delhi","pincode":580003}]}]};
            for (i in userdetObj.student) { 
                result+="<h4>"+"Student:"+"</h4>";

                    result+="Student Name: "+userdetObj.student[i].name+" "+"Age: "+userdetObj.student[i].age+" "+"Weight: "+userdetObj.student[i].weight+" "+"Height: "+userdetObj.student[i].height;
                        result+="<h4>"+"Friends:"+"</h4>";
                            for(j in userdetObj.student[i].friends){ 
                                result+=userdetObj.student[i].friends[j]+" ; ";        
                            }
                                    result+="<h4>"+"College:"+"</h4>";
                                        for(k in userdetObj.student[i].college){
                                            result+="College Name: "+userdetObj.student[i].college[k].name+" "+"City: "+userdetObj.student[i].college[k].city+" "+"Pin code: "+userdetObj.student[i].college[k].pincode;
                }
            }