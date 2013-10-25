
// Clicking the description of a task changes it's checkbox. It's almost like it was a label.
$('body').click(function(e){
  if (e.target) {
    var $target = $(e.target);
    if ($target.hasClass('description') && $target.hasClass('tracker_markup') ) {
      $target.parents('.task').find('input').click()
    }
  }
})