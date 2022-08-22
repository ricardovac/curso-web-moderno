const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // pega todo o projeto src
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)