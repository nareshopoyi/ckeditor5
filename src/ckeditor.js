import ClassicEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImgkitUploadAdapterPlugin from './ImageKitUploader';
import HashButton from './hashButtonPlugin';
import MentionCustomization from './MentionPlugin';
export class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    FileRepository,
    Image,
    ImageUpload,
    ImageCaptionPlugin,
    ImgkitUploadAdapterPlugin,
    HashButton,
    Mention,
    MentionCustomization,
    TextTransformation,
    AutoformatPlugin,
    MediaEmbed,
    BoldPlugin,
    ItalicPlugin,
    LinkPlugin,
    ListPlugin,
    ParagraphPlugin,
    RemoveFormat,
    Underline
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'hashButton',
            '|',
            'bold',
            'italic',
            'underline',
            'removeFormat',
            '|',
            'uploadImage',
            'link',
            'bulletedList',
            'numberedList'
        ],
    }, 
    language: 'en'
};
