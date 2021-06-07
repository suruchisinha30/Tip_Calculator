//Class of Tip Percent
class TipPercent{

              //this function adds incremental logic to percentage
              constructor()
              { 
                this.percentage=document.getElementById("percent");
              }

              func_plus() {
                var percent = document.getElementById("percent");
               
              	this.percentage= parseInt(percent.value) + 1;
                if(this.percentage>100)
                this.percentage=100;
                percent.setAttribute("value", this.percentage);
                console.log(this.percentage);
                //after percentage is changed Tip_per_person and Total_per_person is updated
                var update_obj= new UpdateValue();
                update_obj.percentage= this.percentage;
                update_obj.Number_of_people= parseInt(document.getElementById("people").value);
                update_obj.func_Tip_per_person();
                update_obj.func_Total_per_person();

            }

            //this function subtracts decremental logic to percenatge
              func_subtract() {
                var percent = document.getElementById("percent");
               
              	this.percentage= parseInt(percent.value) - 1;
                if(this.percentage<0)
                this.percentage=0;
                percent.setAttribute("value", this.percentage);
                //after percentage is changed Tip_per_person and Total_per_person is updated
                var update_obj= new UpdateValue();
                update_obj.percentage= this.percentage;
                update_obj.Number_of_people= parseInt(document.getElementById("people").value);
                update_obj.func_Tip_per_person();
                update_obj.func_Total_per_person();

            }
}

//Class for Number of people
class NumberPeople{
    
    constructor()
              { 
                this.Number_of_people=document.getElementById("people");
              }
       func_plus() {
            var people = document.getElementById("people");
           
          	this.Number_of_people= parseInt(people.value) + 1;
            
            people.setAttribute("value",this.Number_of_people);
            //after percentage is changed Tip_per_person and Bill_per_person is updated
            var update_obj= new UpdateValue();
                update_obj.Number_of_people= this.Number_of_people;
                update_obj.percentage= parseInt(document.getElementById("percent").value);
                update_obj.func_Tip_per_person();
                update_obj.func_Total_per_person();
      }

     func_subtract() {
          var people = document.getElementById("people");
         
        	this.Number_of_people= parseInt(people.value) - 1;
                if(this.Number_of_people<0)                   
                this.Number_of_people=0;                
          
                people.setAttribute("value", this.Number_of_people);
          //after Number_of_people is changed Tip_per_person and Total_per_person is updated
        var update_obj= new UpdateValue();
                update_obj.Number_of_people= this.Number_of_people;
                update_obj.percentage= parseInt(document.getElementById("percent").value);
                update_obj.func_Tip_per_person();
                update_obj.func_Total_per_person();

    }

}

// Class of Updating results
class UpdateValue{
  
    constructor()
              { 
                this.percentage=document.getElementById("percent");
                this.Number_of_people=document.getElementById("people");
              }
  

        //function for updating Tip_per_person
         func_Tip_per_person()
        {
          console.log(this.percentage);
          console.log(this.Number_of_people);
            var total = document.getElementById("total").value;
            var Tip_per_person= [(total*this.percentage)/100]/this.Number_of_people;
            //Exception Handling
            try{
                if(total<0){
                document.getElementById("total").setAttribute("value",0);
                throw new Error("Bill amount cannot be negative")
                document.getElementById("Total").setAttribute("value",0);}
                
            }

                catch(error){
                alert(error);
                console.log("Error has been handled")
            }


            document.getElementById("Tip").setAttribute("value",Tip_per_person);
        }

        //function for updating Total_per_person
         func_Total_per_person()
        {
            
            var total = document.getElementById("total").value;
            var total_bill= total*(1+(this.percentage/100));
            var Total_per_person= total_bill/this.Number_of_people;
            //Exception Handling
            try{
                if(total<0){
                document.getElementById("total").setAttribute("value",0);
                throw new Error('Bill amount cannot be negative')}
                
            }

                catch(error){
                alert(error);
                console.log("Error has been handled")
            }

            document.getElementById("Total").setAttribute("value",Total_per_person);
        }
}

var tip_percent = new TipPercent();               //Object of class TipPercent
var number_people = new NumberPeople();           //Object of class NumberPeople
//this adds on click listener to plus button
document.getElementById("plus").addEventListener("click",tip_percent.func_plus);

//this subtracts on click listener to subtract button
document.getElementById("subtract").addEventListener("click", tip_percent.func_subtract);

//this adds on click listener to plus button
document.getElementById("plus1").addEventListener("click", number_people.func_plus);

//this subtracts on click listener to subtract button
document.getElementById("subtract1").addEventListener("click", number_people.func_subtract);

