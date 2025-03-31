function checkBox(self){
    let tel = document.querySelector('.tel');
    if(self.checked){
        document.querySelector('input[name="tel"]').required=true;
        tel.classList.remove('hidden');
    }else{
        tel.classList.add('hidden');
        document.querySelector('input[name="tel"]').required=false;
    }
}
function validate_form(){
    let res = true;
    let required=['first_name','last_name','email'];
    if(document.querySelector('input[name=sms]')) required[required.length] = 'tel';
    for (let index = 0; index < required.length; index++) {
        const cur = required[index];
        const element = document.querySelector('input[name="'+cur+'"]');
        if(!element.checkValidity()){
            document.querySelector('.msg').classList.remove('hidden');
            document.querySelector('label[for="'+cur+'"]').style.color='red';
            res=false;
        }
    }
    return res;
}
$('input[type!=submit]').keydown(function(){
    let field = this.name;
    console.log(field);
    document.querySelector('label[for="'+field+'"]').style.color='white';
});