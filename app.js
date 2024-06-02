const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
    console.log('Moused Over Me!');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});


// Action that occurs when we manage to catch and click the button:
btn.addEventListener('click', function() {
    btn.innerText = 'YOU GOT ME!!!';
    document.body.style.backgroundColor = 'green';
})