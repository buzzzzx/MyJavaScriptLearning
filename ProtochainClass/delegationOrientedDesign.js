var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;  
  },
  ask(question) {
    console.log(this.teacher + " " + question);
  }
};

var AnotherWorkshop = Object.assign(
  Object.create(Workshop),
  {
    speakUp(msg) {
      this.ask(msg.toUpperCase());
    }
  }
);

var ws = Object.create(AnotherWorkshop);
ws.setTeacher("Remie");
ws.speakUp("How are you?"); // 'Remie HOW ARE YOU?'
ws // { teacher: 'Remie' }