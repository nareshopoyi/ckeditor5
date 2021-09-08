
export default function MentionCustomization(editor) {
    editor.conversion.for('upcast').elementToAttribute({
      view: {
        name: 'a',
        key: 'data-mention',
        classes: 'mention',
        attributes: {
          href: true,
          'data-user-id': true
        }
      },
      model: {
        key: 'mention',
        value: viewItem => {
          return editor.plugins.get('Mention').toMentionAttribute(viewItem, {
            link: viewItem.getAttribute('href'),
            userId: viewItem.getAttribute('data-user-id')
          });
        }
      },
      converterPriority: 'high'
    });
  
    editor.conversion.for('downcast').attributeToElement({
      model: 'mention',
      view: (modelAttributeValue, { writer }) => {
        if (!modelAttributeValue) {
          return;
        }
  
        return writer.createAttributeElement(
          'a',
          {
            class: 'mention',
            'data-mention': modelAttributeValue.id,
            'data-user-id': modelAttributeValue.userId,
            href: modelAttributeValue.link
          },
          {
            priority: 20,
            id: modelAttributeValue.uid
          }
        );
      },
      converterPriority: 'high'
    });
  }
  