
module.exports = function (plop) {
    plop.handlebars.registerHelper("vue_expr", function (expression) {
        return '{{' + expression + '}}';
    });

    plop.setGenerator('create-react-component', {
        description: 'component in app (input example: phuoc pro)',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return true;
                }
                return 'name is required';
            },
        }],
        actions: [
            {
                type: 'add',
                path: './src/app/components/{{pascalCase name}}.tsx',
                templateFile: './src/app/template/template.tsx',
            },

        ],
    });
};
