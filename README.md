# Foxx



Foxx is a javascript library of easily customisable and reusable utility UI components

  - start foxx
  - define preferences
  - call component
  - parse data
  - Easy init ?

# Dependencies
a Keyboard and some set of fingers. . maybe a thinking brain
> foxx js is built on (vanilla) Js.


# Getting Started

  - include foxx static file
    ```sh
    <!--html-->
    <script src="./path_to/foxx.js"></script>
    ```
  - trot like a foxx !


Available Components:
  - Toast ui
  - Alerts (coming soon)
  - SideBar (coming soon)

# Usage

  - define  preferences
    ```sh
    settings = ({
               position:'place_top_center',
               css:'light',
               timeOut:12000,
               delay:000,
               dismiss:false
    })
    ```
  - call component
    ```sh
    // toast notification sample
     fx.toast.success({
          title:'Notification head',
          body:'Howdy, this is a sample notification simple & reusable,
          Check out the cool button below<btn >click me</bt>',
          opt:settings         //use preference instance
      })   
    ```
  - voila
    ![sample image](https://github.com/Codecherub/foxx/blob/master/cog/easy.PNG)

That's pretty much all you need to know.

### Features

some features that makes things a bit interestiong:
* Dark Mode 
* Custom css injection
* customisable Animations
* Append Components to a specified element
* More under way

### Customization

##### Dark mode

foxx default night colors

```sh
const settings = ({
css:'dark'
})
```
##### Custom Styling

using customised css classes

```sh
const settings = ({
css:'your_custom_css_class'
})
```

##### Append to Elemnt

attach component to html element

```sh
const settings = ({
placeAfter:'html_element_id'
})
```

contributions are absolutely welcome and appreciated

### Todos

 - Write MORE Tests
 - Add Alerts Ui
 - Add sideBar Ui

License
----

MIT


**Free Software, Hell Yeah!**