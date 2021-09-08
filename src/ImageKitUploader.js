class ImgkitUploadAdapter {
  constructor(loader, editor) {
    this.loader = loader;
    this.editor = editor;
    this.API_ENDPOINT = 'https://upload.imagekit.io/api/v1/files/upload';
  }

  upload() {
    this.editor.execute( 'toggleImageCaption' );
    console.log(this.editor)
    return new Promise((resolve, reject) => {
      !this.loader.file && reject(new Error('no file to upload'));
      this.loader.file.then((file)=>{
        const { getToken, publicKey, imageBase } =
          this.editor.config._config.image.upload;
        getToken()
          .then(({ signature, expire, token }) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('fileName', 'opoyi.jpg');
            formData.append('publicKey', publicKey);
            formData.append('signature', signature);
            formData.append('expire', expire);
            formData.append('token', token);
            return fetch(this.API_ENDPOINT, { method: 'POST', body: formData });
          })
          .then(res => res.json())
          .then(res => {
            resolve({ default: imageBase + res.filePath });
          })
          .catch(() => {
            reject({});
          });
        });
    });
  }

  abort() {}
}

function ImgkitUploadAdapterPlugin(editor) {
  
  editor.plugins.get('FileRepository').createUploadAdapter = loader =>
    new ImgkitUploadAdapter(loader, editor);
}

export default ImgkitUploadAdapterPlugin;
