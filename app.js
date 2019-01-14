// preview image

$(".image_prev_upload").on('change', '.upload_file', function(event) {
  var uploadFile = $(this)
  if (this.files && this.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var preiew_img = uploadFile.parent().siblings().children('.preview_image');
      preiew_img.attr('src', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
  }
});