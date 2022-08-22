const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // converte para css e mostra erros.
        .pipe(uglifycss({"uglyCommets": true})) // Minifica o arquivo
        .pipe(concat('estilo.min.css')) // Muda o nome
        .pipe(gulp.dest('build/css')) // Seleciona o destino
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)