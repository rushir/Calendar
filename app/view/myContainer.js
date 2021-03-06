/*
 * File: app/view/myContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Confluent.view.myContainer', {
    extend: 'Ext.Container',
    alias: 'widget.myContainer',

    config: {
        itemId: 'myContainer',
        autoDestroy: false,
        scrollable: {
            direction: 'horizontal',
            directionLock: true
        },
        items: [
            {
                xtype: 'draw',
                events: [
                    
                ],
                scrollDisplace: 0,
                itemId: 'inlineDraw',
                autoDestroy: false,
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            var me = this,
                                backgroundColor = me.backgroundColor,
                                timelineColor = me.timelineColor,
                                roomText = me.roomText,
                                boxColor = me.boxColor,
                                dotColor = me.dotColor,
                                events = me.events;

                            var mainCarousel = Ext.ComponentQuery.query('#mainCarousel')[0],
                                displace = Ext.getBody().getSize().width - 200,
                                h = Ext.getBody().getSize().height,
                                surface = me.getSurface('main'),
                                today = new Date(Date.now()),
                                w = 203 * events.length,
                                vDisplaceSumm,
                                vDisplaceDesc,
                                description,
                                dateTime,
                                dateStart,
                                dateEnd,
                                summary,
                                yloc = h/10,
                                xloc;

                            me.setSize(w,h);
                            surface.setSize(w,h);
                            surface.setBackground(backgroundColor);

                            //Line across screen
                            surface.add({
                                type: 'rect',
                                fill: timelineColor,
                                height : 20,
                                width: w,
                                x: 0,
                                y: yloc+330
                            }).show(true);

                            //Name of room
                            surface.add({
                                type: 'text',
                                text: roomText,
                                font: "40px Arial",
                                fill: '#FFF',
                                x: 35,
                                y: 70
                            }).show(true);

                            surface.add({
                                type: 'text',
                                text: '+add',
                                font: "36px Arial",
                                fill: '#FFF',
                                x: displace,
                                y: 70
                            }).show(true);

                            for (var iter = 0; iter < events.length; iter++) {
                                xloc = iter*200;
                                summary = events[iter].summary;
                                description = events[iter].description;
                                vDisplaceSumm = 0;
                                vDisplaceDesc = 0;

                                try {
                                    summary = summary.replace(/\s+/g,' ');
                                    if (summary.length > 24) {
                                        for (var a = 24; a > 0; a--) {
                                            if (summary.substring(a, a+1) == ' ') {
                                                summary = summary.substring(0,a) + '\n' + summary.substring(a+1);
                                                vDisplaceSumm = 20;
                                                a = 0;
                                            }
                                        }
                                        if (summary.length > 48) {
                                            summary = summary.substring(0,48) + '...';
                                        }
                                    }
                                } catch(e) {
                                    summary = '';
                                }

                                try {
                                    description = description.replace(/\s+/g,' ');
                                    description = description.replace(/(\r\n|\n|\r)/gm,' ');
                                    if (description.length > 35) {
                                        for (var b = 35; b > 0; b--) {
                                            if (description.substring(b, b+1) == ' ') {
                                                description = description.substring(0,b) + '\n' + description.substring(b+1);
                                                b = 0;
                                            }
                                        }
                                        if (description.length > 70) {
                                            for (var c = 70; c > 0; c--) {
                                                if (description.substring(c, c+1) == ' ') {
                                                    if (description.length > 103) {
                                                        description = description.substring(0,c) + '\n' + description.substring(c+1,103) + '...';
                                                    } else {
                                                        description = description.substring(0,c) + '\n' + description.substring(c+1);
                                                    }
                                                    vDisplaceDesc = 20;
                                                    c = 0;
                                                }
                                            }
                                        }
                                    }
                                } catch(e) {
                                    description = false;
                                }

                                dateTime = events[iter].start.dateTime;
                                dateTime = Date.parse(dateTime);
                                dateTime = new Date(dateTime);

                                if ((dateTime.getDate() == today.getDate()) && (dateTime.getMonth() == today.getMonth())) {
                                    dateTime = dateTime.toTimeString().substring(0,5);
                                    if (parseInt(dateTime.substring(0,2),10) >= 12) {
                                        if (dateTime.substring(0,2) == '12') {
                                            dateTime = dateTime + ' pm';
                                        } else if ((parseInt(dateTime.substring(0,2),10)-12) < 10) {
                                            dateTime = '0' + (parseInt(dateTime.substring(0,2),10)-12) + dateTime.substring(2) + ' pm';
                                        } else {
                                            dateTime = (parseInt(dateTime.substring(0,2),10)-12) + dateTime.substring(2) + ' pm';
                                        }
                                    } else {
                                        if (dateTime.substring(0,1) == '0') {
                                            dateTime = '12' + dateTime.substring(2) + ' am';
                                        } else if (parseInt(dateTime.substring(0,2),10) < 10) {
                                            dateTime = '0' + dateTime + ' am';
                                        } else {
                                            dateTime = dateTime + ' am';
                                        }
                                    }

                                } else if (dateTime.getMonth() == today.getMonth()) {
                                    dateTime = dateTime.toDateString().substring(0,10);
                                } else {
                                    dateTime = dateTime.toDateString().substring(0,10);
                                }

                                dateStart = events[iter].start.dateTime;
                                dateStart = Date.parse(dateStart);
                                dateStart = new Date(dateStart);
                                dateEnd = events[iter].end.dateTime;
                                dateEnd = Date.parse(dateEnd);
                                dateEnd = new Date(dateEnd);

                                dateStart = dateStart.toTimeString().substring(0,5);
                                if (parseInt(dateStart.substring(0,2),10) >= 12) {
                                    if (dateStart.substring(0,2) == '12') {
                                        dateStart = dateStart + ' pm';
                                    } else if ((parseInt(dateStart.substring(0,2),10)-12) < 10) {
                                        dateStart = '0' + (parseInt(dateStart.substring(0,2),10)-12) + dateStart.substring(2) + ' pm';
                                    } else {
                                        dateStart = (parseInt(dateStart.substring(0,2),10)-12) + dateStart.substring(2) + ' pm';
                                    }
                                } else {
                                    if (dateStart.substring(0,1) == '0') {
                                        dateStart = '12' + dateStart.substring(2) + ' am';
                                    } else if (parseInt(dateStart.substring(0,2),10) < 10) {
                                        dateStart = '0' + dateStart + ' am';
                                    } else {
                                        dateStart = dateStart + ' am';
                                    }
                                }

                                dateEnd = dateEnd.toTimeString().substring(0,5);
                                if (parseInt(dateEnd.substring(0,2),10) >= 12) {
                                    if (dateEnd.substring(0,2) == '12') {
                                        dateEnd = dateEnd + ' pm';
                                    } else if ((parseInt(dateEnd.substring(0,2),10)-12) < 10) {
                                        dateEnd = '0' + (parseInt(dateEnd.substring(0,2),10)-12) + dateEnd.substring(2) + ' pm';
                                    } else {
                                        dateEnd = (parseInt(dateEnd.substring(0,2),10)-12) + dateEnd.substring(2) + ' pm';
                                    }
                                } else {
                                    if (dateEnd.substring(0,1) == '0') {
                                        dateEnd = '12' + dateEnd.substring(2) + ' am';
                                    } else if (parseInt(dateEnd.substring(0,2),10) < 10) {
                                        dateEnd = '0' + dateEnd + ' am';
                                    } else {
                                        dateEnd = dateEnd + ' am';
                                    }
                                }

                                //Larger Point on timeline
                                surface.add({
                                    type: 'circle',
                                    cx: xloc+192,
                                    cy: yloc+338,
                                    r: 22,
                                    fillStyle: dotColor
                                }).show(true);

                                surface.add({
                                    type: 'circle',
                                    cx: xloc+192,
                                    cy: yloc+338,
                                    r: 16,
                                    fillStyle: boxColor
                                }).show(true);

                                if (iter % 2 === 0) {
                                    surface.add({
                                        type: 'rect',
                                        fill: boxColor,
                                        height: 160,
                                        width: 300,
                                        radius: 10,
                                        x: xloc+38,
                                        y: yloc+110
                                    }).show(true);

                                    surface.add({
                                        type: 'path',
                                        path: 'M ' + (xloc+178) + ' ' + (yloc+270) + ' ' +
                                        'l ' + 25 + ' ' + 0 + ' ' +
                                        'l ' + -12 + ' ' + 10 + 'z',
                                        fillStyle: boxColor
                                    }).show(true);

                                    surface.add({
                                        type: 'text',
                                        text: summary,
                                        font: '22px Arial',
                                        width: 290,
                                        height: 130,
                                        fill: '#FFF',
                                        x: xloc+48,
                                        y: yloc+135+vDisplaceSumm
                                    }).show(true);

                                    if (description !== false) {
                                        surface.add({
                                            type: 'text',
                                            text: description,
                                            font: '16px Times New Roman',
                                            width: 280,
                                            height: 100,
                                            fill: '#FFF',
                                            x: xloc+48,
                                            y: yloc+190+vDisplaceSumm+vDisplaceDesc
                                        }).show(true);
                                    }

                                    surface.add({
                                        type: 'text',
                                        text: dateStart + '  -  ' + dateEnd,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+121,
                                        y: yloc+260
                                    }).show(true);

                                    //Time and date for top
                                    surface.add({
                                        type: 'text',
                                        text: dateTime,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+165,
                                        y: yloc+380
                                    }).show(true);

                                } else {

                                    surface.add({
                                        type: 'rect',
                                        fill: boxColor,
                                        height : 160,
                                        width: 300,
                                        radius: 10,
                                        x: xloc+38,
                                        y: yloc+410
                                    }).show(true);

                                    surface.add({
                                        type: 'path',
                                        path: 'M ' + (xloc+203) + ' ' + (yloc+410) + ' ' +
                                        'l ' + -25 + ' ' + 0 + ' ' +
                                        'l ' + 12 + ' ' + -10 + 'z',
                                        fillStyle: boxColor
                                    }).show(true);

                                    surface.add({
                                        type: 'text',
                                        text: summary,
                                        width: 290,
                                        height: 130,
                                        font: '22px Arial',
                                        fill: '#FFF',
                                        x: xloc+48,
                                        y: yloc+435+vDisplaceSumm
                                    }).show(true);

                                    if (description !== false) {
                                        surface.add({
                                            type: 'text',
                                            text: description,
                                            font: '16px Times New Roman',
                                            width: 280,
                                            height: 100,
                                            fill: '#FFF',
                                            x: xloc+48,
                                            y: yloc+485+vDisplaceSumm+vDisplaceDesc
                                        }).show(true);
                                    }

                                    surface.add({
                                        type: 'text',
                                        text: dateStart + '  -  ' + dateEnd,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+121,
                                        y: yloc+560
                                    }).show(true);

                                    //Time and date for bottom
                                    surface.add({
                                        type: 'text',
                                        text: dateTime,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+165,
                                        y: yloc+308
                                    }).show(true);
                                }
                            }
                        },
                        event: 'painted'
                    },
                    {
                        fn: function(element, eOpts) {
                            this.setSize(null, Ext.getBody().getSize().height);
                            this.getSurface('main').setSize(null, Ext.getBody().getSize().height);
                        },
                        event: 'resize'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onInlineDrawReloadPainted',
                event: 'reloadPainted',
                delegate: '#inlineDraw'
            }
        ]
    },

    onInlineDrawReloadPainted: function(draw) {
        var me = this.query('#inlineDraw')[0],
            backgroundColor = me.backgroundColor,
            timelineColor = me.timelineColor,
            roomText = me.roomText,
            boxColor = me.boxColor,
            dotColor = me.dotColor,
            scrollDisplace = me.scrollDisplace,
            events = me.events;

        if(typeof scrollDisplace === 'undefined'){
            scrollDisplace = 0;
        }

        var mainCarousel = Ext.ComponentQuery.query('#mainCarousel')[0],
            displace = Ext.getBody().getSize().width + scrollDisplace - 200,
            h = Ext.getBody().getSize().height,
            surface = me.getSurface('main'),
            today = new Date(Date.now()),
            w = 203 * events.length,
            vDisplaceSumm,
            vDisplaceDesc,
            description,
            dateTime,
            dateStart,
            dateEnd,
            summary,
            yloc = h/10,
            xloc;

        surface.clear();
        surface.removeAll();

        me.setSize(w,h);
        surface.setSize(w,h);
        surface.setBackground(backgroundColor);

        //Line across screen
        surface.add({
            type: 'rect',
            fill: timelineColor,
            height : 20,
            width: w,
            x: 0,
            y: yloc+330
        }).show(true);

        //Name of room
        surface.add({
            type: 'text',
            text: roomText,
            font: "40px Arial",
            fill: '#FFF',
            x: 35 + scrollDisplace,
            y: 70
        }).show(true);

        surface.add({
            type: 'text',
            text: '+add',
            font: "36px Arial",
            fill: '#FFF',
            x: displace,
            y: 70
        }).show(true);

        for (var iter = 0; iter < events.length; iter++) {
            xloc = iter*200;
            summary = events[iter].summary;
            description = events[iter].description;
            vDisplaceSumm = 0;
            vDisplaceDesc = 0;

            try {
                summary = summary.replace(/\s+/g,' ');
                if (summary.length > 24) {
                    for (var a = 24; a > 0; a--) {
                        if (summary.substring(a, a+1) == ' ') {
                            summary = summary.substring(0,a) + '\n' + summary.substring(a+1);
                            vDisplaceSumm = 20;
                            a = 0;
                        }
                    }
                    if (summary.length > 48) {
                        summary = summary.substring(0,48) + '...';
                    }
                }
            } catch(e) {
                summary = '';
            }

            try {
                description = description.replace(/\s+/g,' ');
                description = description.replace(/(\r\n|\n|\r)/gm,' ');
                if (description.length > 35) {
                    for (var b = 35; b > 0; b--) {
                        if (description.substring(b, b+1) == ' ') {
                            description = description.substring(0,b) + '\n' + description.substring(b+1);
                            b = 0;
                        }
                    }
                    if (description.length > 70) {
                        for (var c = 70; c > 0; c--) {
                            if (description.substring(c, c+1) == ' ') {
                                if (description.length > 103) {
                                    description = description.substring(0,c) + '\n' + description.substring(c+1,103) + '...';
                                } else {
                                    description = description.substring(0,c) + '\n' + description.substring(c+1);
                                }
                                vDisplaceDesc = 20;
                                c = 0;
                            }
                        }
                    }
                }
            } catch(e) {
                description = false;
            }

            dateTime = events[iter].start.dateTime;
            dateTime = Date.parse(dateTime);
            dateTime = new Date(dateTime);

            if ((dateTime.getDate() == today.getDate()) && (dateTime.getMonth() == today.getMonth())) {
                dateTime = dateTime.toTimeString().substring(0,5);
                if (parseInt(dateTime.substring(0,2),10) >= 12) {
                    if (dateTime.substring(0,2) == '12') {
                        dateTime = dateTime + ' pm';
                    } else if ((parseInt(dateTime.substring(0,2),10)-12) < 10) {
                        dateTime = '0' + (parseInt(dateTime.substring(0,2),10)-12) + dateTime.substring(2) + ' pm';
                    } else {
                        dateTime = (parseInt(dateTime.substring(0,2),10)-12) + dateTime.substring(2) + ' pm';
                    }
                } else {
                    if (dateTime.substring(0,1) == '0') {
                        dateTime = '12' + dateTime.substring(2) + ' am';
                    } else if (parseInt(dateTime.substring(0,2),10) < 10) {
                        dateTime = '0' + dateTime + ' am';
                    } else {
                        dateTime = dateTime + ' am';
                    }
                }

            } else if (dateTime.getMonth() == today.getMonth()) {
                dateTime = dateTime.toDateString().substring(0,10);
            } else {
                dateTime = dateTime.toDateString().substring(0,10);
            }

            dateStart = events[iter].start.dateTime;
            dateStart = Date.parse(dateStart);
            dateStart = new Date(dateStart);
            dateEnd = events[iter].end.dateTime;
            dateEnd = Date.parse(dateEnd);
            dateEnd = new Date(dateEnd);

            dateStart = dateStart.toTimeString().substring(0,5);
            if (parseInt(dateStart.substring(0,2),10) >= 12) {
                if (dateStart.substring(0,2) == '12') {
                    dateStart = dateStart + ' pm';
                } else if ((parseInt(dateStart.substring(0,2),10)-12) < 10) {
                    dateStart = '0' + (parseInt(dateStart.substring(0,2),10)-12) + dateStart.substring(2) + ' pm';
                } else {
                    dateStart = (parseInt(dateStart.substring(0,2),10)-12) + dateStart.substring(2) + ' pm';
                }
            } else {
                if (dateStart.substring(0,1) == '0') {
                    dateStart = '12' + dateStart.substring(2) + ' am';
                } else if (parseInt(dateStart.substring(0,2),10) < 10) {
                    dateStart = '0' + dateStart + ' am';
                } else {
                    dateStart = dateStart + ' am';
                }
            }

            dateEnd = dateEnd.toTimeString().substring(0,5);
            if (parseInt(dateEnd.substring(0,2),10) >= 12) {
                if (dateEnd.substring(0,2) == '12') {
                    dateEnd = dateEnd + ' pm';
                } else if ((parseInt(dateEnd.substring(0,2),10)-12) < 10) {
                    dateEnd = '0' + (parseInt(dateEnd.substring(0,2),10)-12) + dateEnd.substring(2) + ' pm';
                } else {
                    dateEnd = (parseInt(dateEnd.substring(0,2),10)-12) + dateEnd.substring(2) + ' pm';
                }
            } else {
                if (dateEnd.substring(0,1) == '0') {
                    dateEnd = '12' + dateEnd.substring(2) + ' am';
                } else if (parseInt(dateEnd.substring(0,2),10) < 10) {
                    dateEnd = '0' + dateEnd + ' am';
                } else {
                    dateEnd = dateEnd + ' am';
                }
            }

            //Larger Point on timeline
            surface.add({
                type: 'circle',
                cx: xloc+192,
                cy: yloc+338,
                r: 22,
                fillStyle: dotColor
            }).show(true);

            surface.add({
                type: 'circle',
                cx: xloc+192,
                cy: yloc+338,
                r: 16,
                fillStyle: boxColor
            }).show(true);

            if (iter % 2 === 0) {
                surface.add({
                    type: 'rect',
                    fill: boxColor,
                    height: 160,
                    width: 300,
                    radius: 10,
                    x: xloc+38,
                    y: yloc+110
                }).show(true);

                surface.add({
                    type: 'path',
                    path: 'M ' + (xloc+178) + ' ' + (yloc+270) + ' ' +
                    'l ' + 25 + ' ' + 0 + ' ' +
                    'l ' + -12 + ' ' + 10 + 'z',
                    fillStyle: boxColor
                }).show(true);

                surface.add({
                    type: 'text',
                    text: summary,
                    font: '22px Arial',
                    width: 290,
                    height: 130,
                    fill: '#FFF',
                    x: xloc+48,
                    y: yloc+135+vDisplaceSumm
                }).show(true);

                if (description !== false) {
                    surface.add({
                        type: 'text',
                        text: description,
                        font: '16px Times New Roman',
                        width: 280,
                        height: 100,
                        fill: '#FFF',
                        x: xloc+48,
                        y: yloc+190+vDisplaceSumm+vDisplaceDesc
                    }).show(true);
                }

                surface.add({
                    type: 'text',
                    text: dateStart + '  -  ' + dateEnd,
                    font: '14px Arial',
                    fill: '#FFF',
                    x: xloc+121,
                    y: yloc+260
                }).show(true);

                //Time and date for top
                surface.add({
                    type: 'text',
                    text: dateTime,
                    font: '14px Arial',
                    fill: '#FFF',
                    x: xloc+165,
                    y: yloc+380
                }).show(true);

            } else {

                surface.add({
                    type: 'rect',
                    fill: boxColor,
                    height : 160,
                    width: 300,
                    radius: 10,
                    x: xloc+38,
                    y: yloc+410
                }).show(true);

                surface.add({
                    type: 'path',
                    path: 'M ' + (xloc+203) + ' ' + (yloc+410) + ' ' +
                    'l ' + -25 + ' ' + 0 + ' ' +
                    'l ' + 12 + ' ' + -10 + 'z',
                    fillStyle: boxColor
                }).show(true);

                surface.add({
                    type: 'text',
                    text: summary,
                    width: 290,
                    height: 130,
                    font: '22px Arial',
                    fill: '#FFF',
                    x: xloc+48,
                    y: yloc+435+vDisplaceSumm
                }).show(true);

                if (description !== false) {
                    surface.add({
                        type: 'text',
                        text: description,
                        font: '16px Times New Roman',
                        width: 280,
                        height: 100,
                        fill: '#FFF',
                        x: xloc+48,
                        y: yloc+485+vDisplaceSumm+vDisplaceDesc
                    }).show(true);
                }

                surface.add({
                    type: 'text',
                    text: dateStart + '  -  ' + dateEnd,
                    font: '14px Arial',
                    fill: '#FFF',
                    x: xloc+121,
                    y: yloc+560
                }).show(true);

                //Time and date for bottom
                surface.add({
                    type: 'text',
                    text: dateTime,
                    font: '14px Arial',
                    fill: '#FFF',
                    x: xloc+165,
                    y: yloc+308
                }).show(true);
            }
        }

        me.renderFrame();
    },

    initialize: function() {
        var me = this;
        me.callParent();

        me.element.on({
            tap: me.onTap
        });

        me.getScrollable().getScroller().on('scrollend', function(scroll, x, y) {
            child = me.query('#inlineDraw')[0];
            child.scrollDisplace = scroll.position.x;
            child.fireEvent('reloadPainted', child);
        });

        window.setInterval(function() {me.reloadData();},900000);
    },

    onTap: function(e) {
        if (e.pageY <= 70) {
            if (e.pageX >= Ext.getBody().getSize().width-200) {
                var form = new Conflux.view.MyFormPanel();
                Ext.Viewport.add(form);
            }
        }
    },

    reloadData: function() {
        var me = this,
            today = new Date(),
            mainCarousel,
            calendarId = me.calendarId,
            child;

        var token = Confluent.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar';

        today.setHours(0,0,0,0);
        today = today.toISOString();

        gapi.client.setApiKey(apiKey);
        gapi.auth.setToken(token);

        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
        function(authResult) {
            if (authResult) {
                gapi.client.load('calendar', 'v3', function() {
                    var request = gapi.client.calendar.events.list({
                        'calendarId': calendarId,
                        'singleEvents': true,
                        'orderBy': 'startTime',
                        'timeMin': today,
                        'maxResults': 50
                    });

                    request.execute(function(resp) {
                        child = me.query('#inlineDraw')[0];
                        child.events = resp.items;
                        console.log(child.scrollDisplace);
                        child.fireEvent('reloadPainted',child);
                    });
                });
            } else {
                window.location.reload();
            }
        });
    }

});