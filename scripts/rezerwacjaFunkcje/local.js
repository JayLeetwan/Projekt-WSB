let date = [];
const addDate = (ev) => {
    ev.preventDefault();
    let date = {
        id: Date.now(),
        from: document.querySelector('from').value,
        destination: document.querySelector('destination').value
    }

    date.push(date);
    document.forms[0].reset()

    console.warn('added', { date });
    let pre = document.querySelector('#from');
    pre.textContent = '\n' + JSON.stringify(date, 't', 2);

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('summary').addEventListener('click', addDate);
});