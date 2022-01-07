$(eval 
let a = '$(1)'; //This is the first argument to the command.
let o = ""; //Output string.
if (a.toLowerCase() === "gfi")
{
   o = `$(user) rolled a 1 on 9 GFIs`; //...because GFIs fail 900% of the time, of course.
}
else
{
   let f = "a d"; //If the argument is a single number, this string will act as a prefix in the output string. E.g., if a=20, the output string will read, "...a d20".
   let d = a.match(/^(([0-9]+)d)?([0-9]+)$/) ?? null ? a.split('d') : Number.isInteger(a) ? a : null; //Parse out 'a' in to its constituent values.
   let l = (d?.length != null) ? ((d.length === 1) ? 1 : d[0]) : 0; //This is the number of rolls we have to make.
   if (d && d[1]) //This is a d-style roll. E.g., 2d6, 5d10, etc.
   {
      d[0] = d[1]; //Since characters are at a premium and we don't need d[0]'s value anymore, let's reassign d[1]'s value to it.
      f = ""; //Since it's a d-style roll, we'll set this to an empty string.
   }
   let s = 0; //The sum of our rolls.
   let e = ""; //This will be a string of die emojis.
   if (d && Number(d[0])) //This is a basic check to ensure the argument is within the expected codomain since 'd' was parsed out from 'a'.
   {
      while (l-- > 0)
      {
         e += "🎲";
         s += Math.floor(Math.random() * d[0]) + 1;
      }

      o = `${e}  \n$(user) rolled ${s} on ${f}${a}`;
   }
   else
   {
      o = 'Nothing to roll';
   }
})
