document.querySelectorAll('.price').forEach(node => {
    //р6дакутируем цену
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})