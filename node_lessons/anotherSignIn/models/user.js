

// 1 Происходит импорт зависимостей и их сохранение в  переменных.

const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// 2 новая схема

const userSchema = new Shema({
   email: String,
    username: String,
     password: String

}, {
    //3 Также для каждого пользователя вы хотите создать timestamps (* время создания/модификации файла). Вы используете Mongoose для получения значений createdAt и updatedAt. Затем сохраняете их в базу данных.
     timestamp: {
         createdAt: 'createdAt',
         updatedAt: 'updatedAt'
     }

});

//4  Определяется модель, и результат присваивается константе под названием User, которая потом экспортируется в качестве модуля. Поэтому ее можно использовать в других частях приложения.

  const User = mongoose.model('user', userSchema);
  module.exports = User;

  //5 хэшируем пароль

module.exports.hashPassword = async (password) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        return await  bcrypt.hash(password, salt);
    } catch (error)  {
        throw new Error('Hashing failed', error);
    }

};