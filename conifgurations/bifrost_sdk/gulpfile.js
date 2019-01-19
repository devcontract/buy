var fs = require('fs');   // запрашиваем модуль fs  для обращения к фаиловой системы
var gulp = require('gulp'); // запрашиваем модуль gulp
var plugins = require('gulp-load-plugins')(); // запрашиваем модуль gulp-load-plugins чтобы подгрузить зависимости и прицепть их к выбраному обьекту
var webpack = require('webpack'); // запрашиваем модуль webpack

gulp.task('default', ['build']);  // декларируем задание с названием дэфаелт и заодно запускаем задание build

gulp.task('build', function() {   // дуекларируем задание build
  return gulp.src('src/index.js') // обращаемся к фаилу src/index.js
    .pipe(plugins.webpack({       // обращаемся к вэбпак
      output: {library: 'Bifrost'}, // делаем вавод в папку Bifrost
      module: {                     // описание модуля
        loaders: [                  // загрузчики
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}  // исключаем папку с node_modules но используем babel-loader
        ],
      },
      plugins: [
        // Ignore native modules (ed25519)
        new webpack.IgnorePlugin(/ed25519/)  // игнорируем нативные модули вэбпак
      ]
    }))
    // Add EventSource polyfill for IE11 and Edge
    .pipe(plugins.insert.prepend(fs.readFileSync('./node_modules/event-source-polyfill/src/eventsource.js')))  // обращаемся к модулю плагина по средством fs
    .pipe(plugins.rename('bifrost.js')) // переименовавыем в bifrost.js
    .pipe(gulp.dest('dist'))            // экспортирем фаил bifrost.js
    .pipe(plugins.uglify({              // используем uglify чтобы оброботать bifrost.js
      output: {
        ascii_only: true                // конвертируес код в ascii
      }
    }))
    .pipe(plugins.rename('bifrost.min.js'))  // генерируем bifrost.min.js фаил
    .pipe(gulp.dest('dist'));  // сохраняем фаил
});
