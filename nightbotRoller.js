$(eval 
let a = '$(1)';
let o = "";
if (a.toLowerCase() === "gfi")
{
   o = `$(user) rolled a 1 on 9 GFIs.`; //...because GFIs fail 900% of the time, of course.
}
else
{
   let f = "a d"; 
   let d = a.match(/^(([0-9]+)d)?([0-9]+)$/) ?? null ? a.split('d') : Number.isInteger(a) ? a : null;
   let l = (d?.length != null) ? ((d.length === 1) ? 1 : d[0]) : 0;
   if (d && d[1])
   {
      d[0] = d[1];
      f = "";
   }
   let s = 0;
   let e = "";
   if (d && Number(d[0]))
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
