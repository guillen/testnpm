export default (date) => {
    const spanishDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ];

    const spanishMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    return `${spanishDays[date.getDay()]} ${date.getDate()} de ${spanishMonths[date.getMonth()]} de ${date.getFullYear()}`
}
