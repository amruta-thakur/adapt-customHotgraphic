define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var CustomHotgraphic = ComponentView.extend({
        events: {
            "click .customHotgraphic-item": 'onItemSelected'
        },

        preRender: function() {
            if (this.model.get('_isRandom') && this.model.get('_isEnabled')) {
                this.model.set("_items", _.shuffle(this.model.get("_items")));
            }
            this.listenTo(Adapt, 'multiQuestion:secondBlockClosed', this.changeIcon);
            this.listenTo(this.model, 'change:_isComplete', this.completed);
            if (Adapt.device.screenSize == "large") {
                this.model.set('_desktop', true);
            } else {
                this.model.set('_desktop', false);
            }
        },

        postRender: function() {
            this.$('.customHotgraphic-background-image').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        },

        onItemSelected: function(event) {
            $currentItem = $(event.currentTarget);
            if (!$currentItem.hasClass("selected")) {
                $currentItem.addClass("selected");
            }
            this.model.get('_items')[$(event.currentTarget).data('id')]._isVisited = true;
            Adapt.trigger("customHotgraphic:itemClicked", event);
            if ((this.model.get('restrictCompletion') == "")) {
                if (this.model.get('_items')[$(event.currentTarget).data('id')]._shouldBeSelected) {
                    this.setCompletionStatus();
                }
            }
            if (this.model.get('_isCompletionOnFirstItem'))
                this.setCompletionStatus();
        },
        getVisitedItems: function() {
            return _.filter(this.model.get('_items'), function(item) {
                return item._isVisited;
            });
        },

        checkCompletionStatus: function() {
            if (this.getVisitedItems().length == this.model.get('_items').length) {
                this.setCompletionStatus();
            }
        },

        changeIcon: function(currentIndex, currentBlockId, shouldChangeIcon) {
            var $currentItem = $("." + currentBlockId).find(".customHotgraphic-item").eq(currentIndex);
            if (shouldChangeIcon == true) {
                $currentItem.find(".customHotgraphic-graphic-pin").addClass("display-none");
                $currentItem.find(".customHotgraphic-graphic-image").removeClass("display-none");
            }
            $currentItem.addClass("visited");
            _.each(this.model.get("_items"), function(item, index) {
                if (index == currentIndex) {
                    item._isSelected = true;
                }
            }, this);
            if (Adapt.device.screenSize != "small") {
                Adapt.scrollTo(this.$(".customHotgraphic-item"));
            } else {
                $("body").scrollDisable();
            }
            this.checkCompletionStatus();
        },

        completed: function() {
            this.$('.customHotgraphic-completed-popup').removeClass('display-none');
        },
    });

    Adapt.register('customHotgraphic', CustomHotgraphic);

    return CustomHotgraphic;
});