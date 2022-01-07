# nightbot-die-roller
A simple die roller for Nightbot.

This is a die roller you can add to Nightbot. It accepts [x]d[y] notation as well as single integers.

Usage:
<br/>
`!roll 2d20`: Rolls 2 20-sided dice.<br/>
`!roll 5d17`: Rolls 5 17-sided dice.<br/>
`!roll 50`: Rolls 1 50-sided die.<br/>
`!roll gfi`: Rolls for a Blood Bowl GFI.<br/>

Example Results:<br />
![Example results](https://user-images.githubusercontent.com/535603/148482789-56a1bd55-0b8b-4a5b-a5c2-659dacdcae55.png)
 
Here's the minified code you can just drop in to a Nightbot command:
```
$(eval let a='$(1)';let o="";if(a.toLowerCase()==="gfi"){o=`$(user) rolled a 1 on 9 GFIs.`;}else{let f="a d";let d=a.match(/^(([0-9]+)d)?([0-9]+)$/)??null?a.split('d'):Number.isInteger(a)?a:null;let l=(d?.length!=null)?((d.length===1)?1:d[0]):0;if(d&&d[1]){d[0]=d[1];f="";}let s=0;let e="";if(d&&Number(d[0])){while(l-->0){e+="🎲";s+=Math.floor(Math.random()*d[0])+1;}o=`${e}\n$(user) rolled ${s} on ${f}${a}`;}else{o=`Nothing to roll`;}})
```

If you don't need the Blood Bowl GFI gag, here's the minified code you can use, instead:
```
$(eval let a='$(1)';let o="";let f="a d";let d=a.match(/^(([0-9]+)d)?([0-9]+)$/)??null?a.split('d'):Number.isInteger(a)?a:null;let l=(d?.length!=null)?((d.length===1)?1:d[0]):0;if(d&&d[1]){d[0]=d[1];f="";}let s=0;let e="";if(d&&Number(d[0])){while(l-->0){e+="🎲";s+=Math.floor(Math.random()*d[0])+1;}o=`${e}\n$(user) rolled ${s} on ${f}${a}`;}else{o=`Nothing to roll`;})
```
