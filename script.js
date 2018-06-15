var squads = [
    
    {id: 0, 
    scores: [
        0,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Egypt", continent: "Africa", url: "egypt", group: "A", price: 7, selected: false },
    
    {id: 1, 
    scores: [
        8,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Russia", continent: "Europe", url: "russia", group: "A", price: 13, selected: false },
    
    {id: 2, 
    scores: [
        0,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Saudi Arabia", continent: "Asia", url: "saudi-arabia", group: "A", price: 1, selected: false }, 
    
    {id: 3, 
    scores: [
        4,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Uruguay", continent: "South America", url: "uruguay", group: "A", price: 19, selected: false },
    
    {id: 4, 
    scores: [
        4,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Iran", continent: "Asia", url: "iran", group: "B", price: 2, selected: false },
    
    {id: 5, 
    scores: [
        0,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Morocco", continent: "Africa", url: "morocco", group: "B", price: 5, selected: false },
    
    {id: 6, 
    scores: [
        4,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Portugal", continent: "Europe", url: "portugal", group: "B", price: 21, selected: false },
    
    {id: 7, 
    scores: [
        4,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Spain", continent: "Europe", url: "spain", group: "B", price: 30, selected: false },
    
    {id: 8, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Australia", continent: "Asia", url: "australia", group: "C", price: 3, selected: false },
    
    {id: 9, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Denmark", continent: "Europe", url: "denmark", group: "C", price: 10, selected: false },
    
    {id: 10, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "France", continent: "Europe", url: "france", group: "C", price: 29, selected: false },
    
    {id: 11, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Peru", continent: "South America", url: "peru", group: "C", price: 6, selected: false },
    
    {id: 12, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Argentina", continent: "South America", url: "argentina", group: "D", price: 27, selected: false },
    
    {id: 13, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Croatia", continent: "Europe", url: "croatia", group: "D", price: 12, selected: false },
    
    {id: 14, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Iceland", continent: "Europe", url: "iceland", group: "D", price: 4, selected: false },
    
    {id: 15, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Nigeria", continent: "Africa", url: "nigeria", group: "D", price: 6, selected: false },
    
    {id: 16, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Brazil", continent: "South America", url: "brazil", group: "E", price: 33, selected: false },
    
    {id: 17, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Costa Rica", continent: "North America", url: "costa-rica", group: "E", price: 4, selected: false },
    
    {id: 18, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Serbia", continent: "Europe", url: "serbia", group: "E", price: 7, selected: false },
    
    {id: 19, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Switzerland", continent: "Europe", url: "switzerland", group: "E", price: 9, selected: false },
    
    {id: 20, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Germany", continent: "Europe", url: "germany", group: "F", price: 33, selected: false },
    
    {id: 21, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Mexico", continent: "North America", url: "mexico", group: "F", price: 10, selected: false },
    
    {id: 22, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Sweden", continent: "Europe", url: "sweden", group: "F", price: 8, selected: false },
    
    {id: 23, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "South Korea", continent: "Asia", url: "south-korea", group: "F", price: 3, selected: false },
    
    {id: 24, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Belgium", continent: "Europe", url: "belgium", group: "G", price: 24, selected: false },
    
    {id: 25, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "England", continent: "Europe", url: "england", group: "G", price: 21, selected: false },
    
    {id: 26, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Panama", continent: "North America", url: "panama", group: "G", price: 1, selected: false },
    
    {id: 27, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Tunisia", continent: "Africa", url: "tunisia", group: "G", price: 3, selected: false },
    
    {id: 28, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Colombia", continent: "South America", url: "colombia", group: "H", price: 17, selected: false },
    
    {id: 29, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Japan", continent: "Asia", url: "japan", group: "H", price:  5, selected: false },
    
    {id: 30, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Poland", continent: "Europe", url: "poland", group: "H", price: 14, selected: false },

    {id: 31, 
    scores: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ], name: "Senegal", continent: "Africa", url: "senegal", group: "H", price: 7, selected: false },
];

/* Add up points for each squad */
for(var i=0; i<squads.length; i++){
    var total = 0;
    for(var j=0; j<squads[i].scores.length; j++){
        if (squads[i].scores[j]){
            total += squads[i].scores[j];
        }
    }
    squads[i].total = total;
}

var teams = [
    {
        name: 'Eskimos',
        owner: 'Michael Childers',
        selected: [4,6,8,9,19,24,28,30],
        tb: 160
    },
    {
        name: 'Messi Header',
        owner: 'Michael Beverage',
        selected: [0,1,9,14,16,17,24,29],
        tb: 126
    },
    {
        name: 'Don\'t Messi With Me',
        owner: 'Drew Linger',
        selected: [0,9,12,13,19,21,22,28],
        tb: 165
    },
    {
        name: 'Frankie Hejduk\'s Sponsor',
        owner: 'Stephen Ruby',
        selected: [3,4,11,13,14,16,21,30],
        tb: 157
    },
    {
        name: 'Not a Birdbath',
        owner: 'David Boone',
        selected: [0,2,9,14,16,19,20,27],
        tb: 60
    },
    {
        name: 'Not USA',
        owner: 'Todd Perdue',
        selected: [0,11,15,18,20,21,24,31],
        tb: 180
    },
    {
        name: 'Stars and Scrubs',
        owner: 'Michael Beverage',
        selected: [0,11,15,16,20,27,29,31],
        tb: 110
    },
    {
        name: 'Run Da Pitch',
        owner: 'Matthew Randall',
        selected: [1,6,9,12,19,21,26,31],
        tb: 250
    },
    {
        name: 'Soccer Mom',
        owner: 'Erica Kitchen',
        selected: [2,7,9,15,16,19,27,29],
        tb: 135
    },
    {
        name: 'Vive la Ona',
        owner: 'Jared Brownfield',
        selected: [0,4,7,10,11,13,14,21],
        tb: 150
    },
    {
        name: 'Clint Dempsey\'s 5 O\'Clock Shadow',
        owner: 'Caleb Brownfield',
        selected: [0,11,14,17,20,24,28,29],
        tb: 165
    },
    {
        name: 'Tommy Pickles F.C.',
        owner: 'Tom Pickens',
        selected: [4,8,9,14,20,23,24,25],
        tb: 100
    },
    {
        name: 'Eden Hazardous Picks',
        owner: 'Alex Vance',
        selected: [0,5,10,14,18,24,25,27],
        tb: 147
    },
    {
        name: 'Kylian \'Em Softly',
        owner: 'Alex Vance',
        selected: [2,5,10,17,20,24,26,27],
        tb: 144
    },
    {
        name: 'Where is Michael Bradley???',
        owner: 'Scott Hubay',
        selected: [0,1,3,15,18,21,25,28],
        tb: 430
    }
];

/* Add up points for each team */
for(var i=0; i<teams.length; i++){
    var total = 0;
    for(var j=0; j<8; j++){
        total += squads[teams[i].selected[j]].total;
    }
    teams[i].total = total;
}
teams = teams.sort((a, b) => { return a.total < b.total; });


/* Output Standings table*/
var standings = '<table id="standings" class="tablesorter"><thead><tr><th>Team</th><th>Squad 1</th><th>Squad 2</th><th>Squad 3</th><th>Squad 4</th><th>Squad 5</th><th>Squad 6</th><th>Squad 7</th><th>Squad 8</th><th>Total</th></tr></thead><tbody>';
for(var i=0; i<teams.length; i++){
    standings += '<tr>';
        standings += '<td class="team-name">';
            standings += '<span class="team-name-name">' + teams[i].name + '</span>';
            standings += '<span class="team-name-owner">' + teams[i].owner + '</span>';
        standings += '</td>';
        for(var j=0; j<8; j++){
            standings += '<td class="' + squads[teams[i].selected[j]].total + '">';
                standings += '<span class="squad-name">' + squads[teams[i].selected[j]].name + '</span>';
                standings += '<br/>';
                standings += '<img class="squad-flag" title="' + squads[teams[i].selected[j]].name + '" src="/images/' + squads[teams[i].selected[j]].url + '.svg">';
                standings += '<br/>';
                standings += '<span class="squad-total">' + squads[teams[i].selected[j]].total + '</span>';
                standings += '<ul>';
                    for(var k=0; k<7; k++){
                        standings += '<li>';
                            if(squads[teams[i].selected[j]].scores[k] !== false){
                                standings += squads[teams[i].selected[j]].scores[k];
                            }
                            else{
                                standings += '-';
                            }
                        standings += '</li>';
                    }
                standings += '</ul>';
            standings += '</td>';
        }
        standings += '<td class="team-total">' + teams[i].total + '</td>';
    standings += '</tr>';
}
standings += '</tbody></table>';



$('.standings').html(standings);

$(document).ready(function() 
    { 
        $("#standings").tablesorter( {sortList: [[9,1]]} ); 
    } 
); 
