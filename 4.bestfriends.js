/// node 4.bestfriends.js \\\

console.log('');

let friends = ['Abir', 'Likhon', 'Arko', 'Shakil', 'Sayad', 'Rajnikanth', 'Arafat'];

function bestfriends(friends)
{
    let stringlength = 0; // initialize

    for(let i=0; i<friends.length; i++)
    {
        if( friends[i].length > stringlength )
        {
            stringlength = friends[i].length;
            longeststring = friends[i];
        }
    }
    return longeststring;
}

var longeststring = bestfriends(friends);
console.log(longeststring);

