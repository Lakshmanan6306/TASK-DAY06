/* Write a “person” class to hold all the details.

    class person{
        constructor(Name,Age,fatherName,motherName,Address,Email,phoneNumber,Pincode){
        this.Name=Name;
        this.Age=Age;
        this.fatherName=fatherName;
        this.motherName=motherName;
        this.Email=Email;
        this.phoneNumber=phoneNumber;
        this.Pincode=Pincode;
        }
        print(){
            console.log(
                `My Name ${this.Name}.`,
                `My age${this.Age}.`,
                `My father name is ${this.fatherName}.`,
                `My Mother name is ${this.motherName}.`,
                `My email id is ${this.Email}.`,
                `My phone No is ${this.phoneNumber}.`,
                `My pincode is ${this.Pincode}.`);
        }

    }
    var Person1 = new person("Lakshmanan",29,"Ganesan","Valliammal","Sholinghur ranipet","selva@gmail.com",1234567,631102);
    Person1.print();

    ------------------------------------------------------------------------------------------------------------------------ */

    /*      write a class to calculate the uber price.

        class uberPrice{
            constructor(distance){
                this.distance= distance;
            }
            getPrice(){
                console.log((this.distance)*20); 
            }
        }
        let uber = new uberPrice(10);
        uber.getPrice();
    
        --------------------------------------------------------------------------------------------------------------------- */