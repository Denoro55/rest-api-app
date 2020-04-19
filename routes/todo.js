const {Router} = require('express');
const router = Router();

// получение списка
router.get('/', (req, res) => {
    res.json({a: 1});
});

// создание новой задачи
router.post('/', (req, res) => {
    res.json({a: 1});
});

// изменение задачи
router.put('/:id', (req, res) => {
    res.json({a: 1});
});

// удаление задачи
router.delete('/:id', (req, res) => {
    res.json({a: 1});
});

module.exports = router;
