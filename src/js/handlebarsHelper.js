/*helper*/

Handlebars.registerHelper('equal', function(val1, val2, option) {
    if (val1 === val2) {
        return option.fn(this);
    } else {
        return option.inverse(this);
    }
});
