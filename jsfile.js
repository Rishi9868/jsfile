var mytext = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENT', 'FOREX', 'ANALYTICS'];
function write_letter(curr,i)
{
    var txt = mytext[curr];
    var icon=document.getElementById(mytext[curr]);
    icon.setAttribute("class","blink");
    if(curr==0){
        var icon1=document.getElementById(mytext[8]);
        icon1.setAttribute("class","unblink");
    }
    else{
        var icon1=document.getElementById(mytext[curr-1]);
        icon1.setAttribute("class","unblink");
    }
    if(i<txt.length)
    {
        document.getElementById("type_text").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(write_letter,200,curr,i);
    }
    else
    {
        
        this.setTimeout(this.write_letter_del,200,curr,i);
    }
}
setTimeout(write_letter(0,0),1000);
function write_letter_del()
{
    var txt = mytext[curr];
    //alert(txt);
    if(i>=0)
    {
        document.getElementById("type_text").innerHTML=txt.substring(0,i);
        i--;
        setTimeout(write_letter_del,100,curr,i);
    }
    else
    {
        curr++;
        setTimeout(this.write_letter,2,curr,i);
        if(curr==mytext.length){
            curr=0;
        }
    }
}
