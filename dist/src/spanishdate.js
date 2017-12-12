'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (date) {
    var spanishDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    var spanishMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return spanishDays[date.getDay()] + ' ' + date.getDate() + ' de ' + spanishMonths[date.getMonth()] + ' de ' + date.getFullYear();
};