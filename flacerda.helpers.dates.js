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
    getDay: (val) => (new Date(this.parseDate(val))).getDate(),
    getDayAndHour: (val) => {
        let date = new Date(this.parseDate(val));
        return date.getDate() + ' '
            + this.vars.days[date.getDay()] + ' | '
            + this.addZero(date.getHours()) + ':'
            + this.addZero(date.getMinutes());
    },
    getDayAndHourForCard: (val) => {
        let date = new Date(this.parseDate(val));
        return this.vars.days[date.getDay()] + ' | '
            + this.addZero(date.getHours()) + ':'
            + this.addZero(date.getMinutes());
    },
    getMonthAndYear: (val) => {
        let date = new Date(this.parseDate(val));
        return this.vars.months[date.getMonth()] + ' ' + date.getFullYear();
    },
    getDateTimeForTable: (val) =>  {
        let date = new Date(this.parseDate(val));
        return this.vars.days[date.getDay()] + '  ' +
            this.addZero(date.getDate()) + '/' + this.addZero(date.getMonth() + 1) + '/' + date.getFullYear() + ' ' +
            this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes());
    },
    parseDate: (val) =>  { return val.indexOf('/Date') > -1 ? parseInt(val.replace("/Date(", "").replace(")/", "")) : val; },
    addZero: (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    },
    getPtDate: (val) => {
        let date = new Date(this.parseDate(val));
        return this.addZero(date.getDate()) + '/' + this.addZero(date.getMonth() + 1) + '/' + date.getFullYear();
    }
}
