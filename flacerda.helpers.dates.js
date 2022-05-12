if (typeof flacerda === "undefined") {
    var flacerda = {};
}

if (typeof flacerda.helpers === "undefined") {
    flacerda = { helpers: {} };
}

flacerda.helpers.dates = {
vars: {
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        days: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    },
    getDay: function (val) {
        return (new Date(this.parseDate(val))).getDate();
    },
    getDayAndHour: function (val) {
        var date = new Date(this.parseDate(val));
        return date.getDate() + ' '
            + this.vars.days[date.getDay()] + ' | '
            + this.addZero(date.getHours()) + ':'
            + this.addZero(date.getMinutes());
    },
    getDayAndHourForCard: function (val) {
        var date = new Date(this.parseDate(val));
        return this.vars.days[date.getDay()] + ' | '
            + this.addZero(date.getHours()) + ':'
            + this.addZero(date.getMinutes());
    },
    getMonthAndYear: function (val) {
        var date = new Date(this.parseDate(val));
        return this.vars.months[date.getMonth()] + ' ' + date.getFullYear();
    },
    getDateTimeForTable: function (val) {
        var date = new Date(this.parseDate(val));
        return this.vars.days[date.getDay()] + '  ' +
            this.addZero(date.getDate()) + '/' + this.addZero(date.getMonth() + 1) + '/' + date.getFullYear() + ' ' +
            this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes());
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
