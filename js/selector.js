
function setPlayerStyle(player){
    player.style.border = '2px solid lime';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    
}

function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut eligendi tenetur fugit hic veritatis illo, itaque provident, doloribus, nemo at nostrum repudiandae a vero officia incidunt excepturi. Optio, est impedit? Unde.</p>
    `
    setPlayerStyle(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'lime';
    // })
    playerContainer.appendChild(player)
}

document.getElementById('players').addEventListener('click', function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    if(event.target.tagName.toLowerCase() == 'div'){
        
    }
    else{
        event.target.parentNode.style.backgroundColor = 'lime';
    }
});





