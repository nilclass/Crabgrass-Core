ajaxUpload.view = {
  container: null,
  init: function(_container){
    this.container =_container;
  },
  render: (function() {
    if (!this.container) return;
    if (!ajaxUpload.files.isUploading() && !ajaxUpload.upload.isProcessing()) {
      this.hide();
      return
    }
    var html = '<span id="upload-filename" class="left">#{filename} (#{left})</span>' +
               '<div class="progress progress-striped progress-active">' +
               '<div class="bar" style="width: #{percent}%;"></div>' +
               '</div>' +
               '<span class="left">#{message}</span>';
    this.container.innerHTML = html.interpolate({
      filename: ajaxUpload.upload.getFile().name,
      percent: ajaxUpload.upload.getPercent(),
      message: ajaxUpload.upload.getMessage(),
      left: ajaxUpload.files.length() + 1
    });
    this.container.classList.remove("hidden");
  }),
  hide: function() {
    if (this.container.innerHTML != "") {
      setTimeout((function () {
        this.container.classList.add("hidden")
        this.container.innerHTML = ""
      }).bind(this),1000);
    }
  }
}
