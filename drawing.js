window.addEventListener('load', function() {
    const canvas = document.querySelector('canvas');
    
    const c = canvas.getContext('2d')

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

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
        
        c.lineTo(event.x, event.y);
        c.stroke();
        c.beginPath(); 
        c.moveTo(event.x, event.y);
        
    }
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mouseout', endPos);

});