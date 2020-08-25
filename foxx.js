//start foxx
let foxx_init = ({
    icons:({
        success:'foxx-icon-check',
        info:'foxx-icon-info',
        warning:'foxx-icon-block',
        error:'foxx-icon-exit'
    })
})


const foxx = ({
    toast:({
        success:(title,body)=>{foxx_build.toast('success',title,body);},
        info:(title,body)=>{foxx_build.toast('info',title,body);},
        warning:(title,body)=>{foxx_build.toast('warning',title,body);},
        error:(title,body)=>{foxx_build.toast('error',title,body);},
        init:({
            icon:(type)=>{
                switch (type) {
                    case 'success':
                        return foxx_init.icons.success
                        break;
                    case 'info':
                        return foxx_init.icons.info
                        break;
                    case 'warning':
                        return foxx_init.icons.warning
                        break;
                    case 'error':
                        return foxx_init.icons.error
                        break;
                
                    default:
                        break;
                }
            }
        })
    }),
})


const foxx_build = ({
    toast:(type,title,body)=>{
       
        
        let build_toast = '<div class="foxx toast place_top_right '+type+'">\
        <div>\
            <i class="foxx-icon-type  '+foxx.toast.init.icon(type)+'"></i>\
        </div>\
        <div class="content">\
            <span class="foxx_title">'+title+' </span>\
            <span class="foxx_msg">'+body+'</span>\
        </div>\
        <div>\
            <i class="foxx_exit foxx-icon-exit"></i>\
        </div>\
    </div>' 
       const documentBody = document.getElementsByTagName('body')[0];
       const elem = document.createElement('div');
        elem.innerHTML = build_toast
        documentBody.appendChild(elem)
    }
})


foxx.toast.error('Transaction success',
'Howdy this  transaction , lets see how it goes'+
'with an addon button <btn onclick="">action btn</btn>');