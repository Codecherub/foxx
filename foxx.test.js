


const fx_init = ({
    toast:({
        position:'place_top_right',
        css:'',
        timeOut:'',
        delay:'',
        animateIn:'fx_animate_slideInRight',
        animateOut:'fx_animate_slideOutRight',
        placeAfter:false,
        dismissable:true,
        icons:({
            success:'fx-icon-check',
            info:'fx-icon-info',
            warning:'fx-icon-block',
            error:'fx-icon-exit'
        }),
        options:()=>{ return fx_init.toast.position+' '+fx_init.toast.css+' '+fx_init.toast.animateIn }
       
       })
})


const fx = ({
    toast:({
        neutral:(data)=>{fx_build.toast('neutral',data,fx_init.toast.timeOut,fx_init.toast.animateOut)},
        success:(data)=>{fx_build.toast('success',data,fx_init.toast.timeOut,fx_init.toast.animateOut)},
        info:(data)=>{fx_build.toast('info',data,fx_init.toast.timeOut,fx_init.toast.animateOut)},
        warning:(data)=>{fx_build.toast('warning',data,fx_init.toast.timeOut,fx_init.toast.animateOut)},
        error:(data)=>{fx_build.toast('error',data,fx_init.toast.timeOut,fx_init.toast.animateOut)},
        init:({
            icon:(type)=>{
                switch (type) {
                    case 'success':
                        return fx_init.toast.icons.success
                        break;
                    case 'info':
                        return fx_init.toast.icons.info
                        break;
                    case 'warning':
                        return fx_init.toast.icons.warning
                        break;
                    case 'error':
                        return fx_init.toast.icons.error
                        break;
                
                    default:
                        break;
                }
            },
            options:()=>{
                return fx_init.toast.options()
            }
        }),
        template:(type,data)=>{return '<div>\
            <i class="fx-icon-type   '+fx.toast.init.icon(type)+'"></i>\
        </div>\
        <div class="content">\
            <span class="fx_title">'+data.title+' </span>\
            <span class="fx_msg">'+data.body+'</span>\
        </div>\
        <div>\
            <i class="fx_exit fx-icon-exit"></i>\
        </div>\
        ' }
    }),
    start:(data)=>{
        for(i in data.opt){
            fx_init[data.app][i] = data.opt[i]
        }
    },
    get:({
        infinity:()=>{return 797693134862315}
    })
})



const fx_build = ({
    toast:(type,data,time,animate)=>{  
        console.log(data)     
       let build_toast = fx.toast.template(type,data)
       if(data.opt.placeAfter != false){
        documentBody = document.getElementById(data.opt.placeAfter);
       }else{
        documentBody = document.getElementsByTagName('body')[0];
       }
        
        const elem = document.createElement('div'); // genereate nre toast
        let elemID = Math.floor(Math.random()*15000); //create unique id for toast Element
         elem.setAttribute('id',elemID)
         elem.setAttribute('class','fx  toast '+fx.toast.init.options()+' '+type+' ') //use defined options for toast
         elem.innerHTML = build_toast // append toast template
         console.log(data.opt.placeAfter)
         if(fx_init.toast.placeAfter != false){
         elem.classList+=' fix_relative'
         }
      
       setTimeout(() => {
        documentBody.appendChild(elem)
       fx_build.endElem.toast(elemID,time,data.opt.animateOut);
       }, data.opt.delay);
    },
    endElem:({
        toast:function(id,time,animate){
                 
            
            setTimeout(() => {  
                elem = document.getElementById(id);   
              elem.classList+=' '+animate
              console.log(animate)  
            }, time);
            setTimeout(() => {
                elem = document.getElementById(id);
              elem.remove()
            }, time+500);
            
        }
    })
})

