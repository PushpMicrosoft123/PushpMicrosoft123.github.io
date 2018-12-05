$(document).ready(function () {
    inputOldHtml = $('#old-data').html();
    inputNewHtml = $('#new-data').html();
    targetSelector = '#result';
    this.tool = null;
    var _ = this;
    $('#compare').on('click', function (e) {
        _.tool = new NUI.CompareTool({
            oldHtml: inputOldHtml,
            newHtml: inputNewHtml,
            target: targetSelector
        });
    });
    $('#clear').on('click', function (e) {
        _.tool.clear();
    });
});
