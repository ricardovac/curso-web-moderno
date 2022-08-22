const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({ // Tira todos os comentarios do arquivo, e coloca na ultima versão usando o babel.
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // Deixa o codigo em uma linha só.
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!');
    return cb()
}

exports.default = parallel(padrao, fim)