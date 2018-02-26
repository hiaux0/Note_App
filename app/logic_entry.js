var requirejs = require('requirejs');

requirejs.config({
    baseUrl: "app",
    paths: {
        // lib path (external libs)
        jquery: 'lib/jquery.min',
        context_menu_lib: 'lib/jquery.contextMenu',
        // app path (my js)
        app_helper: 'myLib/app_helper/app_helper',
        context_menu_logic: 'myLib/context_menu/cm_logic',
        drag_drop: 'myLib/drag_drop/drag_drop',
        inline_styles: 'myLib/inline_styles',
        helper_lib: 'myLib/helper_lib',
        test: 'test',
        write_anywhere: 'myLib/write_anywhere/write_anywhere'
    },
    nodeRequire: require
})

const dd = requirejs('drag_drop')
const wa = requirejs('write_anywhere')
dd.listeners.evListener()
wa.listeners.evListener()