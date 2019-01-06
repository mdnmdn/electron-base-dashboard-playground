const fs = require('fs');

const applyTemplate = () => {
    $('[data-template]').each((idx,elem) => {
        const $elem = $(elem)
        const templateName = $elem.data('template');

        const template = fs.readFileSync(templateName,'utf8');
        const layout = $(template);
        layout.find('[data-placeholder="contents"]').append($elem.children());
        $elem.append(layout);

        layout.find('[data-placeholder]').each((i, placeHolder) => {
            const $placeHolder = $(placeHolder);
            const contentName = $placeHolder.data('placeholder');
            if (contentName === 'contents') return;

            const value  = $elem.data(`template-${contentName}`);
            if (value) {
                $placeHolder.html(value);
            } else {
                layout.find(`[data-placeholder-container="${contentName}"]`).hide();
            }
        });
    });
};

applyTemplate();
