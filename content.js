bye = (function(){
  return {
    byeTop: function(){
      $(".zu-top").remove();
    },

    byeSide: function(){
      $(".zu-main-sidebar").remove();
    },

    byeFooter: function(){
      $(".zh-footer").remove();
    },

    byeAnswer:function(){
      $("#zh-question-answer-form-wrap").remove()
    }
  }
})()
