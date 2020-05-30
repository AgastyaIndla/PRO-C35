class Form {
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html("Survey");
        title.position(130,0);

        var input = createInput("Name");
        var input = createInput("Email")
        var button = createButton('Next');

        input.position(250,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

           personCount+=1;
           person.update(name);
           person.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(250,160);

        })
    }
    
}