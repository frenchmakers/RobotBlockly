const { series, watch } = require('gulp');
const { src, dest } = require('gulp');
var del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

/**
 * Configuration
 */
paths = {
    src: "src",
    dist: "dist",
    htmlSrc: "src/index.html",
    js: ["src/**/*.js", "!src/blockly/**/*"],
    blockly: [
        "node_modules/blockly/blockly.min.js", 
        //"node_modules/blockly/blocks.js", 
        "node_modules/blockly/python.js",
        "node_modules/blockly/msg/fr.js"
    ]
};

/**
 * Génération des pages HTML
 */
function html() {
    return src(paths.htmlSrc)
        .pipe(dest(paths.dist));
}

/**
 * Récupération des fichiers Blockly utiles
 */
function blockly() {
    return src(paths.blockly)
        .pipe(concat("blockly.js"))
        .pipe(dest(paths.dist))
        ;
}

/**
 * Génération des fichiers javascripts
 */
function javascript() {
    return src(paths.js)
        .pipe(babel())
        .pipe(dest(paths.dist))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(paths.dist))
        ;
}

/**
 * Nettoyage du dossier de distribution
 */
function clean(cb) {
    return del(paths.dist);
}

/**
 * Construction du dossier de distribution
 */
const build = series(html, blockly, javascript);

exports.clean = clean;
exports.build = build;
exports.watch = function(){
    watch(paths.src+"/**/*", series(clean, build));
};
exports.default = series(clean, build);
