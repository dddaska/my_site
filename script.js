const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const tabs = document.querySelectorAll('.tab-btn[data-tab]');
tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

const accItems = document.querySelectorAll('.acc-q');
accItems.forEach(q => {
    q.addEventListener('click', () => {
        q.parentElement.classList.toggle('open');
    });
});

const filters = document.querySelectorAll('.filter');
filters.forEach(btn => {
    btn.addEventListener('click', () => {
        filters.forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.p-card').forEach(card => {
            const isAll = btn.dataset.f === 'all';
            const isMatch = card.dataset.cat === btn.dataset.f;
            card.style.display = (isAll || isMatch) ? '' : 'none';
        });
    });
});