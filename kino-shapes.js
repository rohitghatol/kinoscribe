/**
 * Created by rohitghatol on 7/10/14.
 */
var commonGd = [
    {
        "-name":"hc",
        "-fmla":"*/ w 1.0 2.0"
    },
    {
        "-name":"hd3",
        "-fmla":"/ h 3"
    }
];
var shapes={
    "heart": {
        "gdLst": {
            "-xmlns": "http://schemas.openxmlformats.org/drawingml/2006/main",
            "gd": [
                {
                    "-name": "dx1",
                    "-fmla": "*/ w 49 48"
                },
                {
                    "-name": "dx2",
                    "-fmla": "*/ w 10 48"
                },
                {
                    "-name": "x1",
                    "-fmla": "+- hc 0 dx1"
                },
                {
                    "-name": "x2",
                    "-fmla": "+- hc 0 dx2"
                },
                {
                    "-name": "x3",
                    "-fmla": "+- hc dx2 0"
                },
                {
                    "-name": "x4",
                    "-fmla": "+- hc dx1 0"
                },
                {
                    "-name": "y1",
                    "-fmla": "+- t 0 hd3"
                },
                {
                    "-name": "il",
                    "-fmla": "*/ w 1 6"
                },
                {
                    "-name": "ir",
                    "-fmla": "*/ w 5 6"
                },
                {
                    "-name": "ib",
                    "-fmla": "*/ h 2 3"
                }
            ]
        },
        "cxnLst": {
            "-xmlns": "http://schemas.openxmlformats.org/drawingml/2006/main",
            "cxn": [
                {
                    "-ang": "3cd4",
                    "pos": {
                        "-x": "hc",
                        "-y": "hd4"
                    }
                },
                {
                    "-ang": "cd4",
                    "pos": {
                        "-x": "hc",
                        "-y": "b"
                    }
                }
            ]
        },
        "rect": {
            "-xmlns": "http://schemas.openxmlformats.org/drawingml/2006/main",
            "-l": "il",
            "-t": "hd4",
            "-r": "ir",
            "-b": "ib"
        },
        "pathLst": {
            "-xmlns": "http://schemas.openxmlformats.org/drawingml/2006/main",
            "path": [
                {
                    "command":"moveTo",
                    "pt": {
                        "-x": "hc",
                        "-y": "hd4"
                    }

                },
                {
                    "command":"cubicBezTo",
                    "pt": [
                        {
                            "-x": "x3",
                            "-y": "y1"
                        },
                        {
                            "-x": "x4",
                            "-y": "hd4"
                        },
                        {
                            "-x": "hc",
                            "-y": "b"
                        }
                    ]
                },
                {
                    "command":"cubicBezTo",
                    "pt": [
                        {
                            "-x": "x1",
                            "-y": "hd4"
                        },
                        {
                            "-x": "x2",
                            "-y": "y1"
                        },
                        {
                            "-x": "hc",
                            "-y": "hd4"
                        }
                    ]
                }


            ]
        }
    }
}