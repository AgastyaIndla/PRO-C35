class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Submit'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        this.reset = createButton('Reset');


        this.button.style('width','100px');
        this.button.style('height','40px');
        this.button.style('background','lavender');

        this.reset.style('width','100px');
        this.reset.style('height','40px');
        this.reset.style('background','lavender');

        //question 1
        this.question1 = createElement('h4', "Q1. HOW DID YOU COME TO KNOW ABOUT US  ?");
        this.radio = createRadio('h4');
        this.radio.option('FRIENDS');
        this.radio.option('FAMILY');
        this.radio.option('OTHER DOCTORS');
        this.radio.style('width', '400px');

        //question 2
        this.question2 = createElement('h4', "Q2. HOW LIKELY WILL YOU RECOMMEND OUR HOSPITAL TO FRIENDS AND FAMILY?");
        this.radio1 = createRadio('h5');
        this.radio1.option('1 TO 5');
        this.radio1.option('6 TO 10');
        this.radio1.style('width', '400px');

        //question 3
        this.question3 = createElement('h4', "Q3.HOW WAS YOUR EXPERIENCE AT OUR HOSPITAL?");
        this.radio2 = createRadio('h5');
        this.radio2.option('EXCELLENT ');
        this.radio2.option('GOOD');
        this.radio2.option('AVERAGE');
        this.radio2.option('BAD');
        this.radio2.style('width', '350px');

        //question 4
        this.question4 = createElement('h4', "Q4. WHAT DO YOU THINK SHOULD WE IMPROVE?");
        this.radio3 = createRadio('h5');
        this.radio3.option('STAFF');
        this.radio3.option('DOCTORS');
        this.radio3.option('DORMS');
        this.radio3.style('width', '400px');

        //question 5
        this.question5 = createElement('h4', "Q5. WHICH HOSPITAL OF THE INDLAS DID YOU VISIT?");
        this.radio4 = createRadio('h5');
        this.radio4.option('INDLAS VIMHANS');
        this.radio4.option('SHANTIVAN');
        this.radio4.option('ICGC');
        this.radio4.style('width', '350px');
        
    }
    display(){
        this.title.html("INDLAS VIMHANS");
        this.title.position(650, 20);
        this.name.html("Your Name");
        this.name.position(355 ,125);
        this.input.position(455,145);
        this.emailinput.html("Your Email");
        this.emailinput.position(355 ,200);
        this.email.position(455 ,220);
        this.button.position(800,850);
        this.reset.position(1000,850);

        this.question1.position(450, 250);
        this.radio.position(400,300);
        
        this.question2.position(450,350);
        this.radio1.position(310, 400);

        this.question3.position(450,450);
        this.radio2.position(430,500);

        this.question4.position(450, 540);
        this.radio3.position(360, 580);

        this.question5.position(450, 620);
        this.radio4.position(430, 670);

        this.button.mousePressed(() => {
            this.greeting.show();

            this.greeting.html("Thanks For Your Feed Back!!");
            this.greeting.position(240,800);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '30px');
            this.greeting.style('background','neonblue');
            this.greeting.style('padding','30px');
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            User.radio3= this.radio3.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
            

            
        });
        this.reset.mousePressed(() => { 
          this.greeting.hide();

          this.input.value('');
          this.email.value('');
          this.radio.value();
          this.radio1.value();
          this.radio2.value();
          this.radio3.value();
        });    
    }
}