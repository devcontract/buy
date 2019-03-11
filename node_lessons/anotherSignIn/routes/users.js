// Запрос зависимостей. Вам необходимо будет запросить
// зависимости, которые вы установили при помощи npm.
// Проверка пользовательских данных.
// Убедитесь, что пользователь не прислал пустую форму.
// Все поля должны быть заполнены. Введенные данные должны иметь тип String.
// Адрес электронной почты проходит специальную проверку при помощи метода .email(),
// благодаря которому гарантируется, что введенные пользователем
// данные соответствуют формату адреса электронной почты.
// Пароль же проверяется при помощи регулярного выражения.
// В пароле подтверждения следует сохранить то же значение,
// что и во введенном пароле. Эти проверки осуществляются при помощи модуля Joi.
// При поступлении запросов по методу GET исполняется
// страница регистрации, в то время как запросы по методу
// POST поступают после того, как пользователь нажимает кнопку
// для отправки формы.
// Маршрутизатор экспортируется в виде модуля.


const express = require('express');
const router = express.Router();
const Joi = require('joi');
const passport = require('passport');

const User = require('../models/user');


//validation schema

const userSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
    confirmationPassword: Joi.any().valid(Joi.ref('password')).required()
});

router.route('/register')
    .get((req, res) => {
        res.render('register')
    })
    .post(async (req, res, next) => {
        try {
            const result = Joi.validate(req.body, userSchema)
            if (result.error) {
                req.flash('error', 'Data entered is not valid. Please try again.')
                res.redirect('/users/register')
                return
            }

            const user = await User.findOne({ 'email': result.value.email })
            if (user) {
                req.flash('error', 'Email is already in use.')
                res.redirect('/users/register')
                return
            }

            const hash = await User.hashPassword(result.value.password)

            delete result.value.confirmationPassword
            result.value.password = hash

            const newUser = await new User(result.value)
            await newUser.save()

            req.flash('success', 'Registration successfully, go ahead and login.')
            res.redirect('/users/login')

        } catch(error) {
            next(error)
        }
    });

module.exports = router