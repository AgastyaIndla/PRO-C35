class Person {
    constructor(){}
  
    getCount(){
      var personCountRef = database.ref('personCount');
      personCountRef.on("value",function(data){
        personCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        personCount: count
      });
    }
  
    update(name){
      var personIndex = "Person" + personCount;
      database.ref(personIndex).set({
        name:name
      });
    }
  }