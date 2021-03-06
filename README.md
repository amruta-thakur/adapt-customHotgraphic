# adapt-customHotgraphic  

**Custom Hot Graphic** is a *presentation component* bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework).    
When a learner clicks on a hot spot within the image, a pop-up is displayed that consists of text with an image. 


##Installation

As one of Adapt's *[core components](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#components),* **Hot Graphic** is included with the [installation of the Adapt framework](https://github.com/adaptlearning/adapt_framework/wiki/Manual-installation-of-the-Adapt-framework#installation) and the [installation of the Adapt authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-Adapt-Origin).

* If **Custom Hot Graphic** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:  
`adapt install adapt-customHotgraphic`

    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
    `"adapt-customHotgraphic": "*"`  
    Then running the command:  
    `adapt install`  
    (This second method will reinstall all plug-ins listed in *adapt.json*.)  

* If **Hot Graphic** has been uninstalled from the Adapt authoring tool, it may be reinstalled using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).  
<div float align=right><a href="#top">Back to Top</a></div>

## Settings Overview

The attributes listed below are used in *components.json* to configure **Hot Graphic**, and are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-hotgraphic/blob/master/example.json).  

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `hotgraphic`. (One word.)

**_classes** (string): CSS class name to be applied to **Hot Graphic**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.  

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.  

**mobileBody** (string): This is optional text that will be substituted for **body** when `Adapt.device.screenSize` is `small` (i.e., when viewed on mobile devices).  

**mobileInstruction** (string): This is optional text that will be substituted for **instruction** when `Adapt.device.screenSize` is `small` (i.e., when viewed on mobile devices).  

**_setCompletionOn** (string): This value determines when the component registers as complete. Acceptable values are `"allItems"` and `"inview"`. `"allItems"` requires each pop-up item to be visited. `"inview"` requires the **Hot Graphic** component to enter the view port completely.  

**_graphic** (string): The main image that appears below the hot spots. It contains values for **src**, **alt** and **title**.

>**src** (string): File name (including path) of the image. Path should be relative to the *src* folder (e.g., *course/en/images/origami-menu-two.jpg*).

>**alt** (string): This text becomes the image’s `alt` attribute.

>**title** (string): This text becomes the image’s `title` attribute.  

**_items** (string): Multiple items may be created. Each item represents one hot spot for this component and contains values for **title**, **body** and **_graphic**.

>**title** (string): This is the title text for a hot spot pop-up.

>**body** (string): This is the main text for a hot spot pop-up.

>**_graphic** (string): The image that appears as a hot spot. Its location is controlled by **_top** and **_left**. It contains values for **src** and **alt**.  

>>**src** (string): File name (including path) of the image. Path should be relative to the *src* folder (e.g., *course/en/images/origami-menu-two.jpg*).

>>**alt** (string): This text becomes the image’s `alt` attribute.   

>**strapline** (string): This text is displayed when `Adapt.device.screenSize` is `small` (i.e., when viewed on mobile devices). It is presented in a title bar above the image.

>**_top** (number): Each hot spot must contain **_top** and **_left** coordinates to position them on the hot graphic. Enter the number of pixels this hot spot should be from the top border of the main graphic.

>**_left** (number): Enter the number of pixels this hot spot should be from the left border of the main graphic.  

>**_width** (number): Each hot spot must contain **_width** and **_height** for hot graphic. Enter the number of pixels this hot spot should be from the top border of the main graphic.

>**_height** (number): Enter the number of pixels this hot spot should be from the left border of the main graphic.

### Accessibility
**Custom Hot Graphic** has two elements assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion** and **ariaPoupupLabel**. These labels are not visible elements. They are utilized by assistive technology such as screen readers. Should the label texts need to be customised, they can be found within the **globals** object in [*properties.schema*](https://github.com/adaptlearning/adapt-customHotgraphic/blob/master/properties.schema).   
<div float align=right><a href="#top">Back to Top</a></div>

## Limitations
 
When viewport size changes to the smallest range, this component will behave like a [**Narrative** component](https://github.com/adaptlearning/adapt-contrib-narrative). All information will remain available but formatted as a narrative rather than as hot spots on a graphic.  


----------------------------
**Version number:**  2.0.7   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a> 
**Framework versions:**  2.0     
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-customHotgraphic/graphs/contributors)  
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8, Opera   
