// refactor, such that index.html doesn't require this one anymore
    // right now it does
// main logic output should only be in app.js
define(['jquery','helper_lib','context_menu_lib','context_menu_logic'], function($,helper,cm,cm_logic) {
// start ======================================
'use strict'
const doc = document;
let changeDisplayedText='Ondemand cm';
let target;

// listen to highlight event
cm_logic.listeners.evListener()

// #422
$(function() {
    $.contextMenu({
        selector: '#container',
        // trigger: 'left',
        // delay:1,
        items: {
            SplitDiv: {
                name: "Split Div",
                items: {
                    Split_test: {
                        name: "Split",
                        className: "head-line",
                    },
                    Split_horizontally: {
                        name: "Horizontal",
                        callback: cm_logic.grid.splitThisHorizontally
                    },
                    Split_vertically: {
                        name: "Vertical",
                        callback: cm_logic.grid.splitThisVertically
                    },
                    range: {
                        name: 'By',
                        type: 'range',
                        id: 'contextMenuSlider',
                        // #425 be able to input min, max,step and value somehow
                        options: {min:1, max:5, step:1,},
                        value: 3
                    }
                }
            },

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
            // TODO: #323
            // when activate: change current tag to another one
            ChangeTagTo: {
                name: "Change Tag to",
                items: {
                    ChangeToTextarea: {
                        name: "Textarea",
                        // isHtmlName: true,
                        callback: cm_logic.textmanipulation.changeToTextarea   },
                    ChangeToDiv: {
                        name: "Div",
                        callback: cm_logic.textmanipulation.changeToDiv
                }   }   },
            Sep: "--------------------------",
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
            // #427.1.
            Edit: {name: changeDisplayedText, icon: "edit",
                callback: function(itemkey,opt) {
                    console.log(itemkey,opt);
                    $.contextMenu({
                        selector: '.box',
                        build: function($triggerElement, e){
                            console.log(this);
                            console.log($triggerElement);
                            return {
                                callback: function(){},
                                items: {
                                    menuItem: {name: `${changeDisplayedText}`}
                                }
                            };
                        }
                    });
                }
            }
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        // events
        events: {
            show: function(itemKey,opt) {
                // console.log("changed? " + itemKey.commands.edit.name);
                cm_logic.grid.listenForSlider();
                // cm_logic.textmanipulation.displayCurrentTarget();

            }
        }
    });
});


// end ======================================
});



// Another context_menu
// $(function() {$.contextMenu({
//         selector: "a",
//         items: {
//             tester: {
//                 name: "test"
//
//             }
//         }
//
// }); });
