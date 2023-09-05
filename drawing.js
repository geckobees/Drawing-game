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
        c.strokeStyle = "red";
        
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


function changecolor(){
    var button = document.querySelector('button')
    console.log(button.classList)
}