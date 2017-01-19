define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var CustomHotgraphic = ComponentView.extend({
        events: {
            "click .customHotgraphic-item": 'onItemSelected'
        },

        preRender:function(){
            if (this.model.get('_isRandom') && this.model.get('_isEnabled')) {
                this.model.set("_items", _.shuffle(this.model.get("_items")));
            }
        },

        postRender:function(){
            this.$('.customHotgraphic-background-image').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        },

        onItemSelected:function(event){
            $currentItem = $(event.currentTarget);
            $currentItem.prop('disabled', true);
           //$currentItem.addClass("disabled");
            $currentItem.css({"cursor":"default"});
            $currentItem.addClass("selected");
            Adapt.trigger("customHotgraphic:itemClicked",event);
        }
    });

    Adapt.register('customHotgraphic', CustomHotgraphic);
    
    return CustomHotgraphic;
});
