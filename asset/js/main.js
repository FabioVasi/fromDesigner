import '../css/style.css'

document.querySelectorAll('.control-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        $('#cardSlider').carousel(index);
    });
});

$('#cardSlider').on('slide.bs.carousel', function (e) {
    const index = $(e.relatedTarget).index();
    document.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.control-button')[index].classList.add('active');
});