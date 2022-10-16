var parentUrlToNotify = null;

$(function() {
    parentUrlToNotify = $('body').data('portal-url');
    notifyResizing();
});
