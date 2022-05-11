if (typeof flacerda === "undefined") {
    var vasp = {};
}

if (typeof flacerda.helpers === "undefined") {
    vasp = { helpers: {} };
}

flacerda.helpers.dates = {

    vars: {
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        days: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    },
    getDay: function (val) {
        var currentEventDate = new Date(this.parseDate(val));
        return currentEventDate.getDate();
    },
    getDayAndHour: function (val) {
        var currentEventDate = new Date(this.parseDate(val));
        return currentEventDate.getDate() + ' '
            + this.vars.days[currentEventDate.getDay()] + ' | '
            + this.addZero(currentEventDate.getHours()) + ':'
            + this.addZero(currentEventDate.getMinutes());
    },
    getDayAndHourForCard: function (val) {
        var currentEventDate = new Date(this.parseDate(val));
        return this.vars.days[currentEventDate.getDay()] + ' | '
            + this.addZero(currentEventDate.getHours()) + ':'
            + this.addZero(currentEventDate.getMinutes());
    },
    getMonthAndYear: function (val) {
        var currentEventDate = new Date(this.parseDate(val));
        return this.vars.months[currentEventDate.getMonth()] + ' ' + currentEventDate.getFullYear();
    },
    getDateTimeForTable: function (val) {
        var eventDate = new Date(this.parseDate(val));
        return this.vars.days[eventDate.getDay()] + '  ' +
            this.addZero(eventDate.getDate()) + '/' + this.addZero(eventDate.getMonth() + 1) + '/' + eventDate.getFullYear() + ' ' +
            this.addZero(eventDate.getHours()) + ':' + this.addZero(eventDate.getMinutes());
    },
    parseDate: function (val) { return val.indexOf('/Date') > -1 ? parseInt(val.replace("/Date(", "").replace(")/", "")) : val; },
    addZero: function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    },
    getPtDate: function (val) {
        var date = new Date(this.parseDate(val));
        return this.addZero(date.getDate()) + '/' + this.addZero(date.getMonth() + 1) + '/' + date.getFullYear();
    }
}
