const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos() {
    return gulp.src('build')
        .pipe(webserverj({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function servidor(cb) {
    // Sempre que alterar o HTML, vai chamar a função.
    watch('src/**/*.html', () => gulp.series('appHTML'))
    watch('src/**/*.scss', () => gulp.series('appCSS'))
    watch('src/**/*.js', () => gulp.series('appJS'))
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG'()))
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}