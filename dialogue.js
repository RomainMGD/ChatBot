var hello = prompt('Vous croisé le chat bot, dite lui (bonjour), (slt) ou passé votre chemin');
var chat = undefined;

if (hello === 'bonjour'){
    chat = 'Hey bonjour comment vas tu?';
    alert(chat);
} else if (hello === 'slt'){
    chat = 'ouesh mon pote slt comment sa va?';
    alert(chat);
} else {
    chat = 'Mec tu est srx tu passe devant tu dit même pas bonjour starf!';
    alert(chat);
}

if (chat === 'Hey bonjour comment vas tu?'){
    chat = 'bien et toi?';
    alert(chat);
} else if (chat === 'ouesh mon pote slt comment sa va?' ) {
    chat = 'hey tranquil frère et toi?';
    alert(chat);
} else {
    chat = 'calme a ou frere';
    alert(chat);
}

if (chat === 'bien et toi?'){
    chat = 'sa va n peu fatigué mais bon. sur ceux ++ je doit y aller';
    alert(chat);
} else if (chat === 'hey tranquil frère et toi? ) {
    chat = 'oèp lé la, lé la, bon faut que mi sa va i attende a moin';
    alert(chat);
} else {
    chat = 'ouai ouai allez casse toi!';
    alert(chat);
}
