var mytext = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENT', 'FOREX', 'ANALYTICS'];
var id1 = ['cards', 'payment', 'loans', 'support', 'reward', 'saving', 'investment', 'forex', 'analytics'];
var id2 = ['cards2', 'payment2', 'loans2', 'support2', 'reward2', 'saving2', 'investment2', 'forex2', 'analytics2'];
var id3 =['cards3', 'payment3', 'loans3', 'support3', 'reward3', 'saving3', 'investment3', 'forex3', 'analytics3'];
function write_letter(curr,i)
{
    var txt = mytext[curr];
    var icon=document.getElementById(id1[curr]);
    var icon2=document.getElementById(id2[curr]);
    var icon3=document.getElementById(id3[curr]);
    icon.setAttribute("class","blink");
    icon2.setAttribute("class","blink");
    icon3.setAttribute("class","blink");
    if(curr==0){
        var icon1=document.getElementById(id1[8]);
        var icon12=document.getElementById(id2[8]);
        var icon13=document.getElementById(id3[8]);
        icon1.setAttribute("class","unblink");
        icon12.setAttribute("class","unblink");
        icon13.setAttribute("class","unblink");
    }
    else{
        var icon1=document.getElementById(id1[curr-1]);
        var icon12=document.getElementById(id2[curr-1]);
        var icon13=document.getElementById(id3[curr-1]);
        icon1.setAttribute("class","unblink");
        icon12.setAttribute("class","unblink");
        icon13.setAttribute("class","unblink");
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
setTimeout(write_letter,1000,0,0);
function write_letter_del(curr,i)
{
    var txt = mytext[curr];
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
