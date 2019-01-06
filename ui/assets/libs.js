const fs = require('fs');

const applyTemplate = () => {
    $('[data-template]').each((idx,elem) => {
        const $elem = $(elem)
        const templateName = $elem.data('template');
        
        
        const template = fs.readFileSync(templateName,'utf8');
        const layout = $(template);
        layout.find('[data-placeholder="contents"]').append($elem.children());
        $elem.append(layout);
    });
};
