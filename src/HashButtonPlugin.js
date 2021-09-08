import hashIcon from '@ckeditor/ckeditor5-core/theme/icons/hashicon.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class HashButton extends Plugin {
    init() {
        const editor = this.editor;
        editor.ui.componentFactory.add( 'hashButton', locale => {
            const view = new ButtonView( locale );
            view.set( {
                label: 'Add hashtag',
                icon: hashIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                editor.model.change(writer => {
                    const insertPosition = editor.model.document.selection.getFirstPosition();
                    writer.insertText('#', insertPosition);
                  });
                  editor.editing.view.focus();
            } );

            return view;
        } );
    }
}

export default HashButton;