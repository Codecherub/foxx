const fx_init = ({ // default component settings
    toast: ({
        position: 'place_top_right',
        css: '',
        timeOut: 10000000,
        delay: 0,
        animateIn: 'fx_animate_slideInRight',
        animateOut: 'fx_animate_slideOutRight',
        placeAfter: false,
        dismiss: true,
        icons: ({
            success: 'fx-icon-check',
            info: 'fx-icon-info',
            warning: 'fx-icon-block',
            error: 'fx-icon-exit'
        })

    })
})

//component templates
const fx_tpl = ({
    toast: (type, data,id) => {
        if(data.title != undefined){ title=data.title}else{title=""}
        if(data.body != undefined){ body=data.body}else{body=""}
        return '<div>\
        <i class="fx-icon-type   ' + data.settings.icons[type] + '"></i>\
        </div>\
        <div class="content">\
        <span class="fx_title">' + title + ' </span>\
        <span class="fx_msg">' + body + '</span>\
        </div>\
        <div>\
        <i id="'+id+'-end" class="fx_exit fx-icon-exit"></i>\
        </div>\
        '
    }
})


// construction starts here
const fx = ({
    toast: ({
        success: (data) => {
        // replace default options and pass as prototype specific setting
            data['settings']=fx_init.toast;
            for(i in data.opt){
                data.settings[i] = data.opt[i]
            }
            fx_build.toast('success', data )
        },
        info: (data) => {
        // replace default options and pass as prototype specific setting
            data['settings']=fx_init.toast;
            for(i in data.opt){
                data.settings[i] = data.opt[i]
            }
            fx_build.toast('info', data )
        },
        warning: (data) => {
        // replace default options and pass as prototype specific setting
            data['settings']=fx_init.toast;
            for(i in data.opt){
                data.settings[i] = data.opt[i]
            }
            fx_build.toast('warning', data )
        },
        error: (data) => {
        // replace default options and pass as prototype specific setting
            data['settings']=fx_init.toast;
            for(i in data.opt){
                data.settings[i] = data.opt[i]
            }
            fx_build.toast('error', data )
        },
    })
})


//component Builder
const fx_build = ({
    toast: function(type, data ) {
          
        let itemID = Math.floor(Math.random() * 15000); //create unique id for toast Element
        let template = fx_tpl.toast(type, data, itemID) // get toast template structure
        let placement = data.settings.placeAfter
        const item = document.createElement('div'); // genereate  toast
        item.setAttribute('id', itemID)
        item.setAttribute('class', 'fx  toast ' + data.settings.css +' '+ data.settings.position +' '+data.settings.animateIn + ' ' + type + ' ') //use defined options for toast
        item.innerHTML = template 
        console.log(data.opt.placeAfter)
        itemParent = document.getElementsByTagName('html')[0]
        if (data.opt.placeAfter != undefined) { //if item is to be appended to a specified element
            itemParent = document.getElementById(data.opt.placeAfter); 
            item.classList += ' fix_relative';
        } 

        setTimeout(() => {
            itemParent.appendChild(item)
            fx_build.end.toast(itemID, data.settings);
            document.getElementById(itemID+'-end').addEventListener("click", ()=>{ data.settings.timeOut = false; fx_build.end.toast(itemID, data.settings)});
        }, data.settings.delay);
    },

    end: ({
        toast: function (id,settings) {
            if(settings.timeOut === false){
                time = 0;
            }else {time = time = settings.timeOut}
            setTimeout(() => {
                item = document.getElementById(id);
                item.classList += ' ' + settings.animateOut
            }, time);
            setTimeout(() => {
                item = document.getElementById(id);
                item.remove()
            }, time + 500);

        }
    })
})