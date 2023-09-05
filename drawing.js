var color = 'black'
window.addEventListener('load', function() {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.height = window.innerHeight / 2 + 100;
    canvas.width = window.innerWidth / 2;

    let painting = false;
    var thickness = 10;
    

    function startPos(event){
        painting = true;
        draw(event);
    }
    function endPos(){
        painting = false;
        c.beginPath();
    }

    function draw(event){
        if (!painting) return;
        c.lineWidth = thickness;
        c.lineCap = "round"; 
        c.strokeStyle = color;
        
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        c.lineTo(x, y);
        c.stroke();
        c.beginPath(); 
        c.moveTo(x, y);
        
    }


    window.addEventListener('mousemove', draw)
    window.addEventListener('mousedown', startPos);
    window.addEventListener('mouseup', endPos);
    window.addEventListener('mouseout', endPos);

});


function changecolor(id){
    var button = document.querySelector('button')
    if (id == 1){
        color = 'red'
    }
    if (id == 2){
        color = 'blue'
    }
}