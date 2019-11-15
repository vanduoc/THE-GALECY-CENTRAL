$(document).ready(function(){
	$('#delete_video').click(function(e){
		e.preventDefault();
		var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
        	$.post('video/delete', {id: val}, function(data) {
        		$(':checkbox:checked').each(function(index) {
        			$id = $(this).val();
        			$('.id'+$id).remove();
        		});
        		alert(data);
        	});	
        }
        else
        	alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
	});

	$('#delete_interior').click(function(e){
		e.preventDefault();
		var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
        	$.post('interior/delete', {id: val}, function(data) {
        		$(':checkbox:checked').each(function(index) {
        			$id = $(this).val();
        			$('.id'+$id).remove();
        		});
        		alert(data);
        	});	
        }
        else
        	alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
	});
	$('#delete_architech').click(function(e){
		 e.preventDefault();
		var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
        	$.post('architech/delete', {id: val}, function(data) {
        		$(':checkbox:checked').each(function(index) {
        			$id = $(this).val();
        			$('.id'+$id).remove();
        		});
        		alert(data);
        	});	
        }
        else
        	alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
	});

	$('#delete_facilitie').click(function(e){
		 e.preventDefault();
		var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
        	$.post('facilitie/delete', {id: val}, function(data) {
        		$(':checkbox:checked').each(function(index) {
        			$id = $(this).val();
        			$('.id'+$id).remove();
        		});
        		alert(data);
        	});	
        }
        else
        	alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
	});
	$('#delete_area').click(function(e){
		 e.preventDefault();
		var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
        	$.post('area/delete', {id: val}, function(data) {
        		$(':checkbox:checked').each(function(index) {
        			$id = $(this).val();
        			$('.id'+$id).remove();
        		});
        		alert(data);
        	});	
        }
        else
        	alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
	});

    $('#delete_user').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('admin/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#delete_designer').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('designer/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#delete_developer').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('developer/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#delete_news').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('news/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#delete_process').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('process/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#delete_category').click(function(e){
        e.preventDefault();
        var val = [];
            $(':checkbox:checked').each(function(i){
              val[i] = $(this).val();
            });
            var confirm_delete = confirm("XoĂ¡ táº¥t cáº£ tin thuá»™c thá»ƒ loáº¡i tin nĂ y!"); 
            if (confirm_delete == true) {
                if(val.length >=1)
                {
                    $.post('serenity.vn/admin/category/delete', {id: val}, function(data) {
                        $(':checkbox:checked').each(function(index) {
                            $id = $(this).val();
                            $('.id'+$id).remove();
                        });
                        alert(data);
                    }); 
                }
                else
                     alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
            }
    });


     $('#delete_popup').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('popup/delete', {id: val}, function(data) {
                $(':checkbox:checked').each(function(index) {
                    $id = $(this).val();
                    $('.id'+$id).remove();
                });
                alert(data);
            }); 
        }
        else
            alert("Chá»n Ă­t nháº¥t 1 dĂ²ng Ä‘á»ƒ xĂ³a");
    });

     $('#active_popup').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('popup/popup_active', {id: val}, function(data) {
                alert(data);
            }); 
        }
        else
            alert("Chá»n 1 popup Ä‘á»ƒ active");
    });

     $('#disable_popup').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('popup/popup_disable', {id: val}, function(data) {
                alert(data);
            }); 
        }
        else
            alert("Chá»n 1 popup Ä‘á»ƒ disable");
    });


     $('#active_video').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('video/video_active', {id: val}, function(data) {
                alert(data);
            }); 
        }
        else
            alert("Chá»n 1 video Ä‘á»ƒ active");
    });
     
     $('#active_news').click(function(e){
         e.preventDefault();
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        if(val.length >=1)
        {
            $.post('news/news_active', {id: val}, function(data) {
                alert(data);
            }); 
        }
        else
            alert("Chá»n 2 tin Ä‘á»ƒ active");
    });

    $('#select_month').on('change', function (e) {
        $month = $(this).val();
        $values = $("select option:selected").attr('value');
        location.replace($values);
        //window.open($values);
        //window.open('serenity.vn/home/action_filter/'+ $("select option:selected").attr('value'));
    });
});